import { useState } from "react";
import { motion } from "framer-motion";
import RoamingBot from "./RoamingBot"; // Import the RoamingBot component

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) errors.email = "Email is required";
    if (!formData.message) errors.message = "Message is required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      // Handle form submission (e.g., send data to a server)
      console.log("Form submitted:", formData);
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="px-6 py-8 bg-lightGrayishBlue text-darkBlue min-h-screen flex flex-col items-center relative"
    >
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white p-6 rounded shadow-md"
      >
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            aria-invalid={errors.name ? "true" : "false"}
            aria-describedby="nameError"
          />
          {errors.name && (
            <span id="nameError" className="text-red-500 text-sm">
              {errors.name}
            </span>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby="emailError"
          />
          {errors.email && (
            <span id="emailError" className="text-red-500 text-sm">
              {errors.email}
            </span>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            rows="5"
            aria-invalid={errors.message ? "true" : "false"}
            aria-describedby="messageError"
          />
          {errors.message && (
            <span id="messageError" className="text-red-500 text-sm">
              {errors.message}
            </span>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-moderateBlue text-white py-2 rounded hover:bg-darkBlue transition duration-300"
        >
          Send
        </button>
      </form>
      <RoamingBot /> {/* Add the RoamingBot component */}
    </motion.div>
  );
};

export default Contact;
