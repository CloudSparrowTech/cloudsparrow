// Navbar.jsx
import React, { useState } from "react";
import { FaBars, FaTimes, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    {
      name: "Services",
      path: "#",
      dropdown: [
        {
          name: "Funding Consultation",
          path: "#",
          dropdown: [
            { name: "Grants", path: "/grants" },
            { name: "Loans", path: "/loans" },
            { name: "NBFC", path: "/nbfc" },
          ],
        },
        { name: "Certificate Consultation", path: "/certifications" },
        { name: "Marketing Consultation", path: "/marketing" },
        { name: "Legal Consultation", path: "/legal" },
      ],
    },
    { name: "Team", path: "/team" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  const userDropdown = [
    { name: "Profile", path: "/updateuser/*" },
    { name: "Admin", path: "/dashboard" },
    { name: "Login", path: "/login" },
    { name: "Documents", path: "/generatedocuments" },
  ];

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Left Side - Logo and Nav Links */}
          <div className="flex items-center">
            {/* Logo */}
            <div className="flex-shrink-0 mr-6">
              <img
                className="h-10 w-10"
                src="/cloudsparrow-all-img/logo.png"
                alt="Logo"
              />
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group">
                  <Link
                    to={link.path}
                    className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
                  >
                    {link.name}
                  </Link>
                  {link.dropdown && (
                    <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="py-1">
                        {link.dropdown.map((items) => {
                          return (
                            <>
                              <Link
                                key={items.name}
                                to={items.path}
                                className={
                                  "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                }
                              >
                                {items.name}
                              </Link>
                              {items.dropdown && (
                                <div className="absolute left-48 top-1 w-48 rounded-r-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                  <div className="py-1">
                                    {items.dropdown.map((item) => {
                                      return (
                                        <Link
                                          key={item.name}
                                          to={item.path}
                                          className={
                                            "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                          }
                                        >
                                          {item.name}
                                        </Link>
                                      );
                                    })}
                                  </div>
                                </div>
                              )}
                            </>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Login and User */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              Login
            </button>
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                <FaUser className="mr-2" />
                User
              </button>
              <div className="overflow-hidden absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {userDropdown.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600 p-2"
            >
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="px-4 pt-5 pb-2">
          {/* Logo in Mobile */}
          <div className="flex-shrink-0 flex items-center mb-6">
            <img
              className="h-10 w-10"
              src="https://via.placeholder.com/40"
              alt="Logo"
            />
          </div>

          {/* Mobile Nav Links */}
          {navLinks.map((link) => (
            <div key={link.name} className="mb-2">
              <a
                href={link.href}
                className="block text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
              >
                {link.name}
              </a>
              {link.dropdown && (
                <div className="ml-4 mt-1">
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={
                        "block px-3 py-2 text-sm text-gray-600 hover:text-blue-600"
                      }
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Mobile User Menu */}
          <div className="border-t pt-4 mt-4">
            <button className="w-full text-left text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              Login
            </button>
            <div className="mt-2">
              <div className="flex items-center text-gray-700 px-3 py-2 text-sm font-medium">
                <FaUser className="mr-2" />
                User
              </div>
              <div className="ml-4 mt-1">
                {userDropdown.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
