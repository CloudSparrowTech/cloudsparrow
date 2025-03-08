import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Make sure to install react-router-dom
import { FaBars, FaTimes, FaUser, FaChevronDown } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import jobService from "../../backend/job";
import authService from "../../backend/auth";
import userService from "../../backend/user";
import teamService from "../../backend/team";
import { setAllJobs } from "../../store/jobSlice";
import { setTeamData } from "../../store/teamSlice";
import { login, logout } from "../../store/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState({});
  const { status, userData } = useSelector((state) => state.authSlice);

  const getUser = async () => {
    try {
      const response = await authService.getCurrUser();
      if (!response?.isVerified) {
        await authService.sendVerifyEmail();
        toast("check your mail for verification link");
        await authService.logoutUser();
      }
      const userData = await userService.getUserById(response._id);
      if (userData) {
        dispatch(login({ userData }));
      } else {
        dispatch(logout());
      }
    } catch (e) {
      e;
    }
  };

  const handleLogout = () => {
    authService.logoutUser().then(() => {
      dispatch(logout());
    });
  };

  const getAllJobs = async () => {
    const jobData = await jobService.getAllJobs();
    if (jobData) {
      dispatch(setAllJobs({ jobsData: jobData }));
    }
  };

  const getTeamData = async () => {
    const teamData = await teamService.getAllTeamMembers();
    if (teamData) {
      dispatch(setTeamData({ teamsData: teamData }));
    }
  };

  useEffect(() => {
    const fetchData = () => {
      getUser();
      getAllJobs();
      getTeamData();
    };
    fetchData();
  }, []);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    {
      name: "Services",
      to: "#",
      dropdown: [
        {
          name: "Funding Advisory",
          to: "#",
          subItems: [
            {
              name: "Grants",
              to: "/grants",
            },
            {
              name: "Loans",
              to: "/loans",
            },
            {
              name: "NBFC",
              to: "/nbfc",
            },
          ],
        },
        {
          name: "Certification Advisory",
          to: "/certifications",
        },
        {
          name: "Marketing Advisory",
          to: "/marketing",
        },
        {
          name: "Legal Advisory",
          to: "/legal",
        },
      ],
    },
    { name: "Team", to: "/team" },
    { name: "Careers", to: "/careers" },
  ];

  let userDropdown = [
    { name: "Profile", to: `updateuser/${userData?._id}` },
    { name: "Logout", to: "/login" },
  ];
  if (status && userData?.permission === "team") {
    userDropdown = [
      ...userDropdown,
      { name: "Generate Documents", to: "/generatedocument" },
    ];
  } else if (status && userData?.permission === "admin") {
    userDropdown = [
      ...userDropdown,
      { name: "Admin Dashboard", to: "/dashboard" },
      { name: "Generate Documents", to: "/generatedocument" },
    ];
  }

  const toggleMobileDropdown = (dropdownId) => {
    setOpenMobileDropdown((prev) => ({
      ...prev,
      [dropdownId]: !prev[dropdownId], // Toggle only the selected dropdown
    }));
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Left Side - Logo and Nav Links */}
          <div className="flex items-center">
            <div className="flex-shrink-0 mr-6">
              <img
                className="h-12 w-12"
                src="/cloudsparrow-all-img/logo.png"
                alt="Logo"
              />
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-4">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group">
                  <Link
                    to={link.to}
                    className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
                  >
                    {link.name}
                  </Link>
                  {link.dropdown && (
                    <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="py-1">
                        {link.dropdown.map((item) => (
                          <div key={item.name} className="relative group/sub">
                            <Link
                              to={item.to}
                              className={
                                "block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-600"
                              }
                            >
                              {item.name}
                            </Link>
                            {item.subItems && (
                              <div className="absolute left-full top-0 mt-0 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200">
                                <div className="py-1">
                                  {item.subItems.map((subItem) => (
                                    <Link
                                      to={subItem.to}
                                      key={subItem.name}
                                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                                    >
                                      {subItem.name}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Login and User */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/contact"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
            >
              Contact Us
            </Link>
            {status && (
              <div className="relative group">
                <button className="flex items-center text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                  <FaUser className="mr-2" />
                  {userData?.name}
                </button>
                <div className="overflow-hidden absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {userDropdown.map((item) => (
                    <Link
                      key={item.name}
                      to={item.to}
                      onClick={item.name === "Logout" ? handleLogout : null}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
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
          <div className="flex-shrink-0 flex items-center mb-6">
            <img
              className="h-10 w-10"
              src="/cloudsparrow-all-img/logo.png"
              alt="Logo"
            />
          </div>

          {/* Mobile Nav Links */}
          {navLinks.map((link) => (
            <div key={link.name} className="mb-2">
              {/* Main Navigation Link */}
              <div
                onClick={() => toggleMobileDropdown(link.name)}
                className="flex items-center justify-between px-3 py-2 text-sm font-medium cursor-pointer text-gray-700 hover:text-blue-600"
              >
                <Link to={link.to} onClick={(e) => e.stopPropagation()}>
                  {link.name}
                </Link>
                {link.dropdown && (
                  <FaChevronDown
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleMobileDropdown(link.name);
                    }}
                  />
                )}
              </div>

              {/* First Level Dropdown */}
              {link.dropdown && openMobileDropdown[link.name] && (
                <div className="ml-4 mt-1">
                  {link.dropdown.map((item) => (
                    <div key={item.name} className="mb-1">
                      {/* First Level Item */}
                      <div
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleMobileDropdown(`${link.name}-${item.name}`);
                        }}
                        className="flex items-center justify-between px-3 py-2 text-sm text-gray-600 hover:text-blue-600 cursor-pointer"
                      >
                        <Link to={item.to} onClick={(e) => e.stopPropagation()}>
                          {item.name}
                        </Link>
                        {item.subItems && (
                          <FaChevronDown
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleMobileDropdown(`${link.name}-${item.name}`);
                            }}
                          />
                        )}
                      </div>

                      {/* Second Level Dropdown */}
                      {item.subItems &&
                        openMobileDropdown[`${link.name}-${item.name}`] && (
                          <div className="ml-4 mt-1">
                            {item.subItems.map((subItem) => (
                              <Link
                                key={subItem.name}
                                to={subItem.to}
                                onClick={(e) => e.stopPropagation()}
                                className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:scale-105 transform transition-all duration-150 hover:bg-blue-50"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Mobile User Menu */}
          <div className="border-t pt-4 mt-4">
            <Link
              to="/contact"
              className="w-full text-left text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
            >
              Contact Us
            </Link>
            {status && (
              <div className="mt-2">
                <div
                  className="flex items-center justify-between text-gray-700 px-3 py-2 text-sm font-medium cursor-pointer hover:text-blue-600"
                  onClick={() => toggleMobileDropdown("User")}
                >
                  <div className="flex items-center">
                    <FaUser className="mr-2" />
                    {userData?.name}
                  </div>
                  <FaChevronDown />
                </div>
                {openMobileDropdown["User"] && (
                  <div className="ml-4 mt-1">
                    {userDropdown.map((item) => (
                      <Link
                        key={item.name}
                        to={item.to}
                        onClick={item.name === "Logout" ? handleLogout : null}
                        className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
