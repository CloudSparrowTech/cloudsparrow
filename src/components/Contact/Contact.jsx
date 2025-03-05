import React, { useState } from "react";
import { motion } from "framer-motion";
import enquiryService from "../../backend/enquiry";
import { toast } from "react-toastify";

const Contact = () => {
  const [loading, setLoading] = useState({ status: false, message: "" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
    services: [],
  });

  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    setFormData((prevData) => {
      let newServices = [...prevData.services];
      if (checked) {
        newServices.push(id);
      } else {
        newServices = newServices.filter((service) => service !== id);
      }
      return { ...prevData, services: newServices };
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    setLoading({ status: true, message: "Submitting..." });
    e.preventDefault();
    try {
      const response = await enquiryService.createEnquiry(formData);
      if (response) {
        toast("Submitted successfully...");
        setFormData({
          name: "",
          email: "",
          phone: "",
          description: "",
          services: [],
        });
        toast("We will contact you shortly...");
      }
    } catch (error) {
      toast(error?.message);
    } finally {
      setLoading({ status: false, message: "" });
    }
  };

  return (
    <div>
      <motion.div
        className="text-center pt-24 pb-10 lg:py-48 lg:px-60 bg-[radial-gradient(circle_at_bottom,#FDE7E1_20%,#FFF9EC_30%,#FFFFFF_60%)]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-3xl lg:text-7xl font-bold lg:leading-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          GOOD THINGS{" "}
          <motion.img
            src="cloudsparrow-all-img/orangestar.png"
            alt=""
            className="inline lg:size-16 size-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          />{" "}
          HAPPEN <br /> WHEN YOU SAY
          <motion.p
            className="text-[#407BFF]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            “Hello”
          </motion.p>
        </motion.h1>
      </motion.div>

      <motion.div
        className="bg-[#323E48] text-[#FFFFFF] flex flex-col justify-center items-center py-4 lg:py-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="lg:py-4 lg:my-2 px-4 lg:px-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl lg:text-4xl font-medium">
            Fill out the form and we will be in touch.
          </h1>
        </motion.div>
        <div className="lg:min-w-2xl px-4 lg:px-2">
          <form className="mx-auto w-full" onSubmit={handleSubmit}>
            <motion.div
              className="flex flex-col w-full mb-5 my-6 lg:my-12 gap-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <label htmlFor="name">What’s Your Name?</label>
              <input
                type="text"
                name="name"
                id="name"
                className="bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
                placeholder=" "
                required
                value={formData.name}
                onChange={handleInputChange}
              />
            </motion.div>
            <motion.div
              className="flex flex-col w-full mb-5 my-6 lg:my-12 gap-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
                placeholder=" "
                required
                value={formData.email}
                onChange={handleInputChange}
              />
            </motion.div>
            <motion.div
              className="flex flex-col w-full mb-5 my-6 lg:my-12 gap-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <label htmlFor="phone">Would you like to add a phone number?</label>
              <input
                type="number"
                name="phone"
                id="phone"
                className="bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
                placeholder=" "
                required
                value={formData.phone}
                onChange={handleInputChange}
              />
            </motion.div>
            <motion.div
              className="flex flex-col w-full mb-5 my-6 lg:my-12 gap-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <p>Services that interest you*</p>
              <div className="grid grid-cols-2 grid-rows-2 lg:grid-cols-3 lg:grid-rows-3">
                {[
                  { id: "ecommerce", label: "eCommerce development" },
                  { id: "design", label: "Creative Design" },
                  { id: "redesign", label: "Redesign" },
                  { id: "webdevelopment", label: "Web development" },
                  { id: "shopify", label: "Shopify" },
                  { id: "marketing", label: "Digital Marketing" },
                  { id: "appdevelopment", label: "App development" },
                  { id: "wordpress", label: "Wordpress" },
                  { id: "other", label: "Other" },
                ].map(({ id, label }, index) => (
                  <motion.div
                    key={id}
                    className="flex items-start my-5"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center h-5">
                      <input
                        id={id}
                        type="checkbox"
                        checked={formData.services.includes(id)}
                        onChange={handleCheckboxChange}
                        className="size-5 border border-gray-300 rounded-sm bg-gray-50"
                      />
                    </div>
                    <label htmlFor={id} className="ms-2 text-sm font-medium">
                      {label}
                    </label>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              className="flex flex-col w-full lg:mb-5 lg:my-12 gap-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.6 }}
              viewport={{ once: true }}
            >
              <label htmlFor="description">Briefly describe your Request</label>
              <textarea
                name="description"
                id="description"
                className="bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
                placeholder=" "
                required
                value={formData.description}
                onChange={handleInputChange}
              />
            </motion.div>
            <motion.div
              className="flex w-full mb-5 mt-6 h-20"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.7 }}
              viewport={{ once: true }}
            >
              <div className="w-full relative">
                <motion.button
                  disabled={loading.status}
                  type="submit"
                  className="absolute bottom-0 right-0 uppercase py-3 px-10 bg-[#F48B3A] rounded-md text-xs font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {loading.status ? loading.message : "Send Inquiry"}
                </motion.button>
              </div>
            </motion.div>
          </form>
        </div>
      </motion.div>

      {/* Uncomment and animate this section if needed */}
      {/* <motion.div
        className="p-4 lg:py-28 lg:px-52 bg-[#F6F6F6]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl lg:text-6xl font-medium">
            Where to find us?
          </h1>
        </motion.div>
        <div className="flex gap-8 mt-4 lg:mt-16 overflow-scroll no-scrollbar">
          {[
            { title: "Lucknow", color: "#FF9559", image: "/cloudsparrow-all-img/lucknow.png" },
            { title: "Delhi NCR", color: "#499DFF", image: "/cloudsparrow-all-img/delhi.png" },
            { title: "USA", color: "#00CA8E", image: "/cloudsparrow-all-img/usa.png" },
          ].map((card, index) => (
            <Card key={card.title} {...card} delay={0.4 + index * 0.2} />
          ))}
        </div>
      </motion.div> */}
    </div>
  );
};

const Card = ({ title, color, image, delay }) => {
  return (
    <motion.div
      style={{ backgroundColor: color }}
      className="text-[#1F252B] rounded-md text-center py-6 min-w-full lg:min-w-auto px-20 lg:py-10"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
    >
      <div>
        <h1 className="text-2xl font-bold">{title}</h1>
      </div>
      <motion.div
        className="my-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: delay + 0.1 }}
        viewport={{ once: true }}
      >
        <p className="font-medium">
          C26 Block Sector 65, Noida, Uttar-Pradesh, India
        </p>
      </motion.div>
      <motion.div
        className="flex justify-center items-center"
        initial={{ scale: 0.8, opacity: 0 }}
       

 whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: delay + 0.2 }}
        viewport={{ once: true }}
      >
        <img className="size-20" src={image} alt="" />
      </motion.div>
    </motion.div>
  );
};

export default Contact;