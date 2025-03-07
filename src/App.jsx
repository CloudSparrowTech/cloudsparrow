import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Test from "./components/Test";
import Loader from "./components/Common/Loader";
import HomePage from "./components/Home/HomePage";
import Footer from "./components/Common/Footer";
import Careers from "./components/Careers/Careers";
import Navbar from "./components/Common/Navbar";
import Contact from "./components/Contact/Contact";
import Services from "./components/Services/Services";
import Grants from "./components/Services/Funding/Grants";
import Loans from "./components/Services/Funding/Loans";
import NBFC from "./components/Services/Funding/NBFC";
import Certification from "./components/Services/Certification/Certification";
import ITServices from "./components/Services/ITServices/ITServices";
import Legal from "./components/Services/Legal/Legal";
import TermsAndConditions from "./components/T&C/TermsAndConditions";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import { IoIosArrowDropup } from "react-icons/io";
import Login from "./components/Auth/Login/Login";
import Signup from "./components/Auth/Register/Signup";
import UpdateUser from "./components/Auth/Update/UpdateUser";
import ForgotPassword from "./components/Auth/Recover/ForgotPassword";
import Dashboard from "./components/Admin/Dashboard";
import DocumentDashBoard from "./components/Admin/DocumentDashBoard/DocumentDashboard";
import EnquiryDash from "./components/Admin/EnquiryDash";
import JobDash from "./components/Admin/JobDashBoard/JobDash";
import UsersDash from "./components/Admin/UsersDash";
import TeamDash from "./components/Admin/TeamDashBoard/TeamDash";
import AuthLayout from "./components/PermissionLayouts/AuthLayout";
import PermissionLayout from "./components/PermissionLayouts/PermissonLayout";
import { ToastContainer } from "react-toastify";
import UpdatePassword from "./components/Auth/Recover/UpdatePassword";
import NotFound from "./components/Error/NotFound";
import NotFoundAdmin from "./components/Error/NotFoundAdmin";
import Team from "./components/Team/Team";
import TestimonialsDashboard from "./components/Admin/TestimonialsDashboard/TestimonialsDashboard";
import DocumentEditor from "./components/Documents/DocumentEditor";
import Main from "./components/Customer/Main";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Loader state

  // Scroll-to-top logic
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Simulate loading delay (replace with actual data fetch logic)
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000); // 3-second delay
    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  // Scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      {/* Loader with fade effect */}
      <AnimatePresence>
        {isLoading && <Loader text={"Setting Up Things For You!"} />}
      </AnimatePresence>

      {/* Main content - hidden while loading */}
      {!isLoading && (
        <>
          <Navbar />
          <ToastContainer />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="about" element={<About />} />
            <Route path="test" element={<Test />} />{" "}
            {/* Optional: Keep Test as a route */}
            <Route path="services" element={<Services />} />
            <Route path="grants" element={<Grants />} />
            <Route path="loans" element={<Loans />} />
            <Route path="nbfc" element={<NBFC />} />
            <Route path="certifications" element={<Certification />} />
            <Route path="legal" element={<Legal />} />
            <Route path="itservices" element={<ITServices />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="careers" element={<Careers />} />
            <Route path="team" element={<Team />} />
            <Route path="contact" element={<Contact />} />
            <Route path="termsandconditions" element={<TermsAndConditions />} />
            <Route path="passwordrecovery" element={<ForgotPassword />} />
            <Route path="updatepassword" element={<UpdatePassword />} />
            <Route path="customer" element={<Main />} />
            <Route path="*" element={<NotFound />} />
            {/* Protected routes - logged in only */}
            <Route
              path="login"
              element={
                <AuthLayout authentication={false}>
                  <Login />
                </AuthLayout>
              }
            />
            <Route
              path="signup"
              element={
                <AuthLayout authentication={false}>
                  <Signup />
                </AuthLayout>
              }
            />
            <Route
              path="updateuser/:id"
              element={
                <AuthLayout>
                  <UpdateUser />
                </AuthLayout>
              }
            />
            {/* Protected routes - admin only */}
            <Route path="/notadmin" element={<NotFoundAdmin />} />
            <Route
              path="/dashboard"
              element={
                <AuthLayout>
                  <PermissionLayout role={["admin"]}>
                    <Dashboard />
                  </PermissionLayout>
                </AuthLayout>
              }
            />
            <Route
              path="/dashboard/enquiry"
              element={
                <AuthLayout>
                  <PermissionLayout role={["admin"]}>
                    <EnquiryDash />
                  </PermissionLayout>
                </AuthLayout>
              }
            />
            <Route
              path="/dashboard/jobs"
              element={
                <AuthLayout>
                  <PermissionLayout role={["admin"]}>
                    <JobDash />
                  </PermissionLayout>
                </AuthLayout>
              }
            />
            <Route
              path="/dashboard/users"
              element={
                <AuthLayout>
                  <PermissionLayout role={["admin"]}>
                    <UsersDash />
                  </PermissionLayout>
                </AuthLayout>
              }
            />
            <Route
              path="/dashboard/team"
              element={
                <AuthLayout>
                  <PermissionLayout role={["admin"]}>
                    <TeamDash />
                  </PermissionLayout>
                </AuthLayout>
              }
            />
            <Route
              path="/dashboard/testimonials"
              element={
                <AuthLayout>
                  <PermissionLayout role={["admin"]}>
                    <TestimonialsDashboard />
                  </PermissionLayout>
                </AuthLayout>
              }
            />
            <Route
              path="/dashboard/managedocuments"
              element={
                <AuthLayout>
                  <PermissionLayout role={["admin"]}>
                    <DocumentDashBoard />
                  </PermissionLayout>
                </AuthLayout>
              }
            />
            <Route
              path="/generatedocument"
              element={
                <AuthLayout>
                  <PermissionLayout role={["admin", "team"]}>
                    <DocumentEditor />
                  </PermissionLayout>
                </AuthLayout>
              }
            />
          </Routes>
          <Footer scrollToTop={scrollToTop} />
          {isVisible && (
            <IoIosArrowDropup
              onClick={scrollToTop}
              className="fixed bottom-0 right-0 lg:m-6 m-4 size-10 rounded-full bg-blue-600 text-white border-0"
            >
              Back To Top
            </IoIosArrowDropup>
          )}
        </>
      )}
    </div>
  );
}

export default App;
