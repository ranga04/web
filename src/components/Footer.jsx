import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faGithub,
  faSnapchat,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

// Footer Component with Animated Background
const Footer = () => {
  return (
    <footer className="footer-animated p-8 text-veryLightGray">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* <div className="space-y-4">
          <h3 className="text-2xl font-bold">Work</h3>
          <ul>
            <li>
              <a href="#projects" className="hover:underline">
                Sensor-Driven Robotic Navigation
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:underline">
                Automated Waste Monitoring System
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:underline">
                Arduino-Based Motion Tracking System
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:underline">
                Object Detection with OpenCV
              </a>
            </li>
          </ul>
        </div> */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">Expertise</h3>
          <p className="text-lg text-white">
            Robotics and Automation <br />
            Machine Learning & AI Development <br />
            Computer Vision & Autonomous Systems <br />
            Embedded Systems & ROS <br />
            Software Development & Testing
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-bold">About</h3>
          <ul>
            <li>
              <Link to="/about" className="hover:underline">
                About Me
              </Link>
            </li>

            <li>
              <a
                href="https://www.instagram.com/ranga_sai26/profilecard/?igsh=ZDg4YjlobmxnbXo="
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/srirangasaitulasi"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/156yM-U0UVRCozs_i1M6R-b6yRt5mzCmL/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Download Resume <FontAwesomeIcon icon={faFileAlt} />
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">Lets Connect</h3>
          <div className="flex space-x-4 text-2xl">
            <a
              href="https://www.linkedin.com/in/srirangasaitulasi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-veryLightGray hover:text-yellow-500 transition duration-300"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://www.instagram.com/ranga_sai26/profilecard/?igsh=ZDg4YjlobmxnbXo="
              target="_blank"
              rel="noopener noreferrer"
              className="text-veryLightGray hover:text-yellow-500 transition duration-300"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="mailto:srstulasi@gmail.com"
              className="text-veryLightGray hover:text-yellow-500 transition duration-300"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a
              href="https://github.com/ranga04"
              target="_blank"
              rel="noopener noreferrer"
              className="text-veryLightGray hover:text-yellow-500 transition duration-300"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://www.snapchat.com/add/srirangasaii?share_id=trjssAJ9DL8&locale=en-IN"
              target="_blank"
              rel="noopener noreferrer"
              className="text-veryLightGray hover:text-yellow-500 transition duration-300"
            >
              <FontAwesomeIcon icon={faSnapchat} />
            </a>
            <a
              href="https://discord.com/users/rangasai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-veryLightGray hover:text-yellow-500 transition duration-300"
            >
              <FontAwesomeIcon icon={faDiscord} />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center flex flex-wrap justify-center border-t border-gray-600 pt-4">
        <p className="text-sm mr-2">© 2025 Tulasi. All rights reserved.</p>
        <p className="text-sm">
          Email:{" "}
          <a href="mailto:srstulasi@gmail.com" className="hover:underline">
            srstulasi@gmail.com
          </a>{" "}
          | Phone:{" "}
          <a href="tel:+447393068531" className="hover:underline">
            +44 7393068531
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
