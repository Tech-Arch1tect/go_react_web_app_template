package main

import (
	"server/api/routes"
	"server/config"
	"server/initialisation"
)

// @title Server API
// @version 1.0.0

// @SecurityDefinitions.apikey csrf
// @in header
// @name X-CSRF-Token

func main() {
	if err := config.LoadConfig(); err != nil {
		panic(err)
	}

	// Initialise server
	initialiser := initialisation.NewServerInitialiser(config.CFG)
	r := initialiser.Initialise()

	// Initialise routes
	router := routes.NewRouter(config.CFG)
	router.RegisterRoutes(r)

	if err := r.Run(":8090"); err != nil {
		panic(err)
	}
}