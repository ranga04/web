import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../public/1.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="bg-darkGrayishBlue text-veryLightGray p-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* <div className="text-2xl font-bold"> */}
        <Link
          to="/"
          className="flex items-center space-x-4"
          onClick={closeMenu}
        >
          <img src={logo} alt="Logo" className="h-8 w-auto mr-1 rounded-xl" />
          <h1 className="text-2xl font-greatVibes text-white animate-signature">
            Sri Ranga Sai Tulasi
          </h1>
        </Link>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
        <nav
          className={`md:flex ${
            isOpen ? "fixed" : "hidden"
          } md:relative top-0 right-0 h-full md:h-auto bg-darkGrayishBlue md:bg-transparent transform md:transform-none ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out md:transition-none`}
        >
          <div className="p-4 md:hidden flex justify-end">
            <button onClick={closeMenu} className="focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 p-4 md:p-0">
            <li>
              <Link
                to="/"
                className="hover:underline block"
                onClick={() => {
                  closeMenu();
                }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:underline block"
                onClick={() => {
                  closeMenu();
                }}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/myJourney"
                className="hover:underline block"
                onClick={() => {
                  closeMenu();
                }}
              >
                My Journey
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="hover:underline block"
                onClick={() => {
                  closeMenu();
                }}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/skills"
                className="hover:underline block"
                onClick={() => {
                  closeMenu();
                }}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:underline block"
                onClick={() => {
                  closeMenu();
                }}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
