import { Link, useLocation, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { useUserProfile } from "../../hooks/useUserProfile";
import { useAuth } from "../../hooks/auth/useAuth";
import { useDropdown } from "../../hooks/useDropdown";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { profile, error } = useUserProfile();

  const { handleLogout, isAdmin } = useAuth(profile);

  const profileDropdown = useDropdown();
  const adminDropdown = useDropdown();

  useEffect(() => {
    if (
      error &&
      !["/login", "/register"].includes(location.pathname) &&
      !location.pathname.startsWith("/password-reset")
    ) {
      navigate({ to: "/login" });
    }
  }, [error, location, navigate]);

  if (["/login", "/register", "/password-reset"].includes(location.pathname)) {
    return null;
  }

  return (
    <nav className="bg-blue-800 shadow-lg">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link
            to="/"
            activeProps={{ className: "text-white font-bold" }}
            inactiveProps={{ className: "text-gray-200 hover:text-white" }}
            className="text-lg"
          >
            Home
          </Link>
          <Link
            to="/about"
            activeProps={{ className: "text-white font-bold" }}
            inactiveProps={{ className: "text-gray-200 hover:text-white" }}
            className="text-lg"
          >
            About
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          {/* User Profile Dropdown */}
          <div className="relative" ref={profileDropdown.ref}>
            <button
              onClick={profileDropdown.toggleDropdown}
              className="text-white text-lg font-medium flex items-center space-x-2"
            >
              Settings
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {profileDropdown.isOpen && (
              <div className="dropdown absolute right-0 mt-2 w-48 bg-white shadow-xl rounded">
                <Link
                  to="/profile/profile"
                  onClick={profileDropdown.closeDropdown}
                  className="dropdown-item block px-4 py-2 hover:bg-gray-100"
                >
                  Profile
                </Link>
                <Link
                  to="/profile/2fa"
                  onClick={profileDropdown.closeDropdown}
                  className="dropdown-item block px-4 py-2 hover:bg-gray-100"
                >
                  Manage 2FA
                </Link>
              </div>
            )}
          </div>

          {/* Admin Dropdown */}
          {isAdmin && (
            <div className="relative" ref={adminDropdown.ref}>
              <button
                onClick={adminDropdown.toggleDropdown}
                className="text-white text-lg font-medium flex items-center space-x-2"
              >
                Admin
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {adminDropdown.isOpen && (
                <div className="dropdown absolute right-0 mt-2 w-48 bg-white shadow-xl rounded">
                  <Link
                    to="/admin/users"
                    onClick={adminDropdown.closeDropdown}
                    className="dropdown-item block px-4 py-2 hover:bg-gray-100"
                  >
                    Users
                  </Link>
                </div>
              )}
            </div>
          )}

          <button
            onClick={handleLogout}
            className="text-white text-lg font-medium hover:text-gray-200"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
