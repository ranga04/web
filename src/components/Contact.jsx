import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import RoamingBot from "./RoamingBot"; // Import RoamingBot
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons"; // For close icon

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [modalMessage, setModalMessage] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Add loading state

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
      setIsLoading(true); // Set loading to true

      // EmailJS configuration
      emailjs
        .send(
          "service_divk5c7", // Your service ID
          "template_c4p066v", // Your template ID
          formData,
          "J9sVQILNOQJWTccK-" // Your public key
        )
        .then(
          (result) => {
            setModalMessage(
              "Message sent successfully! Feel free to reach out via social platforms."
            );
            setIsModalVisible(true);
            setFormData({ name: "", email: "", message: "" });
            setErrors({});
            setIsLoading(false); // Stop loading after successful submission
          },
          (error) => {
            setModalMessage(
              "Failed to send message. Please try again or contact me via social platforms."
            );
            setIsModalVisible(true);
            setIsLoading(false); // Stop loading after failure
          }
        );
    } else {
      setErrors(validationErrors);
    }
  };

  const closeModal = () => {
    setIsModalVisible(false);
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
          className="w-full bg-moderateBlue text-white py-2 rounded hover:bg-darkBlue transition duration-300 flex items-center justify-center"
          disabled={isLoading} // Disable button when loading
        >
          {isLoading ? (
            <div className="loader" /> // Show loader when submitting
          ) : (
            "Send"
          )}
        </button>

        {/* Optional: Progress bar during loading */}
        {isLoading && (
          <div className="relative pt-2">
            <div className="overflow-hidden h-2 text-xs flex rounded bg-lightGray">
              <div
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600"
                style={{ width: "100%" }}
              ></div>
            </div>
          </div>
        )}
      </form>
      {/* Modal for Success or Failure Message */}
      {isModalVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center relative max-w-lg w-full">
            <button
              className="absolute top-2 right-2 text-darkBlue"
              onClick={closeModal}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <p className="text-2xl mb-4">{modalMessage}</p>

            {/* Social Icons for fallback */}
            <div className="flex justify-center space-x-4 text-2xl">
              <a
                href="https://www.linkedin.com/in/srirangasaitulasi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-darkBlue hover:text-yellow-500 transition duration-300"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-darkBlue hover:text-yellow-500 transition duration-300"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://github.com/your-github-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-darkBlue hover:text-yellow-500 transition duration-300"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>
        </div>
      )}
      <RoamingBot />
    </motion.div>
  );
};

export default Contact;
