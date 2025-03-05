import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useResolvedPath } from "react-router-dom";
import jobService from "../../backend/job";
import authService from "../../backend/auth";
import userService from "../../backend/user";
import teamService from "../../backend/team";
import { setAllJobs } from "../../store/jobSlice";
import { setTeamData } from "../../store/teamSlice";
import { login, logout } from "../../store/authSlice";
import { toast } from "react-toastify";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropDown] = useState(false);
  const path = useResolvedPath();
  const navigate = useNavigate();
  const dispatch = useDispatch();
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

  const handleLogout = () => {
    setIsOpen(!isOpen);
    authService.logoutUser().then(() => {
      dispatch(logout());
    });
    navigate("/login");
  };

  const navItems = [
    "Home",
    "About",
    "Services",
    "Portfolio",
    "Team",
    "Careers",
  ];

  useEffect(() => {
    const fetchData = () => {
      getUser();
      getAllJobs();
      getTeamData();
    };
    fetchData();
  }, []);

  return (
    <motion.div
      className="flex absolute justify-between items-center h-20 w-full px-4 text-black"
      style={{
        display: path.pathname === "/customer" ? "none" : "",
      }}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Logo */}
      <motion.div
        className="flex gap-8 items-center"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <img
          src="/cloudsparrow-all-img/logo.png"
          alt="logo"
          className="size-16"
        />
        {/* Navigation Links (Desktop) */}
        <nav
          className="hidden lg:flex gap-8"
          onClick={() => setDropDown(false)}
        >
          {navItems.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
            >
              <Link
                to={item === "Home" ? "/" : item.toLowerCase()}
                className={
                  "font-medium hover:text-blue-400 transition text-xs " +
                  (path.pathname === "/" || path.pathname === "/careers"
                    ? " text-white "
                    : " ")
                }
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </nav>
      </motion.div>

      <div className="flex gap-2 items-center">
        {/* Contact Us Button (Desktop) */}
        <motion.div
          className="hidden lg:block py-2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <Link
            to={"/contact"}
            className="px-4 py-2 text-sm text-white rounded-md bg-blue-700 hover:bg-blue-800"
          >
            Contact Us
          </Link>
        </motion.div>

        {/* User Dropdown (Desktop) */}
        {userData && (
          <div>
            <motion.button
              className={
                "hidden lg:block font-medium hover:text-blue-400 transition text-xs " +
                (path.pathname === "/" || path.pathname === "/careers"
                  ? " text-white "
                  : " ")
              }
              type="button"
              onClick={() => setDropDown(!dropdown)}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              whileHover={{ scale: 1.1 }}
            >
              {dropdown ? (
                <AiOutlineClose size={24} />
              ) : (
                <AiOutlineMenu size={24} />
              )}
            </motion.button>
            {dropdown && (
              <motion.div
                onClick={() => setDropDown(false)}
                className="absolute hidden lg:block right-4 top-16 divide-y divide-black rounded-lg shadow-sm w-44 bg-white text-black"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="px-4 py-3 text-sm">
                  <div>{userData.name}</div>
                  <div className="font-medium truncate">{userData.email}</div>
                </div>
                <ul className="py-2 text-sm">
                  {status && (
                    <>
                      {["admin"].includes(userData.permission) && (
                        <li>
                          <Link
                            to={"/dashboard"}
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            Dashboard
                          </Link>
                        </li>
                      )}
                      {["admin", "team"].includes(userData.permission) && (
                        <li>
                          <Link
                            to={"/generatedocument"}
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            Generate Documents
                          </Link>
                        </li>
                      )}
                      <li>
                        <Link
                          to={"/updateuser/" + userData?._id}
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Account
                        </Link>
                      </li>
                      <li>
                        <button
                          onClick={handleLogout}
                          className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
                        >
                          Logout
                        </button>
                      </li>
                    </>
                  )}
                </ul>
              </motion.div>
            )}
          </div>
        )}
      </div>

      {/* Mobile Menu Button */}
      <motion.button
        className="lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        whileHover={{ scale: 1.1 }}
      >
        {isOpen ? (
          <AiOutlineClose size={32} color="blue" />
        ) : (
          <AiOutlineMenu size={32} color="blue" />
        )}
      </motion.button>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          className="absolute z-10 top-20 left-0 w-full bg-[url('./assets/BackGroundImage.png')] text-white py-4 flex flex-col items-center lg:hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          {navItems.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link
                onClick={() => setIsOpen(!isOpen)}
                to={item === "Home" ? "/" : item.toLowerCase()}
                className="py-2 text-lg font-medium hover:text-blue-400 transition"
              >
                {item}
              </Link>
            </motion.div>
          ))}
          {userData && (
            <>
              {["admin", "team"].includes(userData.permission) && (
                <motion.button
                  className="mt-4 h-10 px-6 text-sm bg-blue-600 font-semibold rounded-xl hover:bg-blue-700 transition text-white"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: navItems.length * 0.1 + 0.1,
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Link
                    onClick={() => setIsOpen(!isOpen)}
                    to={"generatedocument"}
                  >
                    Generate Documents
                  </Link>
                </motion.button>
              )}
              {["admin"].includes(userData.permission) && (
                <motion.button
                  className="mt-4 h-10 px-6 text-sm bg-blue-600 font-semibold rounded-xl hover:bg-blue-700 transition text-white"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: navItems.length * 0.1 + 0.2,
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Link onClick={() => setIsOpen(!isOpen)} to={"/dashboard"}>
                    Dashboard
                  </Link>
                </motion.button>
              )}
              <motion.button
                className="mt-4 h-10 px-6 text-sm bg-blue-600 font-semibold rounded-xl hover:bg-blue-700 transition text-white"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.4,
                  delay: navItems.length * 0.1 + 0.1,
                }}
                whileHover={{ scale: 1.05 }}
              >
                <Link
                  onClick={() => setIsOpen(!isOpen)}
                  to={"/updateuser/" + userData?._id}
                >
                  Account
                </Link>
              </motion.button>
              <motion.button
                onClick={handleLogout}
                className="mt-4 h-10 px-6 text-sm bg-blue-600 font-semibold rounded-xl hover:bg-blue-700 transition text-white"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: navItems.length * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                Logout
              </motion.button>
            </>
          )}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="mt-4 h-10 px-6 text-sm bg-blue-600 font-semibold rounded-xl hover:bg-blue-700 transition text-white"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              delay: navItems.length * 0.1 + (status ? 0.3 : 0),
            }}
            whileHover={{ scale: 1.05 }}
          >
            <Link to={"/contact"}>Contact Us</Link>
          </motion.button>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Navbar;
