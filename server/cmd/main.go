package main

import (
	"context"
	"fmt"
	"log"
	"time"

	"github.com/gin-gonic/contrib/sessions"
	"github.com/gin-gonic/gin"
	"go.uber.org/fx"

	"server/api/controllers"
	"server/api/middleware"
	"server/api/routes"
	"server/config"
	"server/database"
	"server/database/repository"
	"server/internal/email"
	"server/internal/helpers"
	"server/services"
)

// @title Server API
// @version 1.0.0

// @SecurityDefinitions.apikey csrf
// @in header
// @name X-CSRF-Token

type Params struct {
	fx.In
	Config  *config.Config
	DB      *repository.Database
	AuthS   *services.AuthService
	AdminS  *services.AdminService
	EmailS  *email.EmailService
	Helpers *helpers.HelperService
	MW      *middleware.Middleware
}

func NewRouter(p Params) (*gin.Engine, error) {
	router := gin.Default()

	corsMiddleware := middleware.Cors(p.Config)
	var rateLimitMiddleware gin.HandlerFunc
	if p.Config.RateLimit.Enabled {
		fmt.Println("Rate limit enabled: limit", p.Config.RateLimit.Limit, "window", p.Config.RateLimit.Window)
		rateLimitMiddleware = middleware.RateLimit(
			p.Config.RateLimit.Limit,
			time.Duration(p.Config.RateLimit.Window)*time.Minute,
		)
	}

	sessionStore := sessions.NewCookieStore([]byte(p.Config.CookieSecret))
	sessionMiddleware := sessions.Sessions(p.Config.SessionName, sessionStore)

	router.Use(corsMiddleware)
	if p.Config.RateLimit.Enabled {
		router.Use(rateLimitMiddleware)
	}
	router.Use(sessionMiddleware)
	router.Use(p.MW.EnsureCSRFTokenExistsInSession())

	controllers := controllers.NewControllers(p.Config, p.AuthS, p.AdminS, p.DB, p.Helpers)
	appRouter := routes.NewRouter(controllers, p.Config, p.DB, p.MW)

	appRouter.RegisterRoutes(router)

	return router, nil
}

func main() {
	app := fx.New(
		fx.Provide(
			config.LoadConfig,
			database.Init,
			email.NewEmailService,
			helpers.NewHelperService,
			middleware.NewMiddleware,
			services.NewAuthService,
			services.NewAdminService,
		),
		fx.Invoke(func(lc fx.Lifecycle, config *config.Config, db *repository.Database, authS *services.AuthService, adminS *services.AdminService, emailS *email.EmailService, helpers *helpers.HelperService, mw *middleware.Middleware) {
			params := Params{
				Config:  config,
				DB:      db,
				AuthS:   authS,
				AdminS:  adminS,
				EmailS:  emailS,
				Helpers: helpers,
				MW:      mw,
			}
			router, err := NewRouter(params)
			if err != nil {
				log.Fatalf("Failed to initialize router: %v", err)
			}

			lc.Append(fx.Hook{
				OnStart: func(ctx context.Context) error {
					go func() {
						if err := router.Run(":8090"); err != nil {
							log.Fatalf("Server failed to start: %v", err)
						}
					}()
					return nil
				},
				OnStop: func(ctx context.Context) error {
					fmt.Println("Shutting down...")
					return nil
				},
			})
		}),
	)

	app.Run()
}
