import Header from "./Header";
import imageDesktop from "../assets/image.png"; // Ensure the image path is correct
import imageMobile from "../assets/IMG_4693.jpg"; // Add your mobile image

const Hero = ({ name, title, location }) => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-between bg-darkGrayishBlue text-veryLightGray relative overflow-hidden"
    >
      <Header />
      <div className="absolute top-0 left-0 p-4 text-veryLightGray copyright-text">
        <p className="text-base">© Code by Tulasi</p>
      </div>
      <div className="flex-grow flex flex-col items-center justify-center relative">
        <div className="relative w-4/5 md:w-4/5 h-4/5 rounded-3xl overflow-hidden glass-effect flex items-center justify-center">
          <img
            src={imageDesktop}
            alt="Portrait"
            className="w-full h-full object-cover rounded-3xl hidden md:block"
          />
          <img
            src={imageMobile}
            alt="Portrait"
            className="w-full h-full object-cover rounded-3xl md:hidden"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 rounded-3xl"></div>
        </div>
        <h1 className="absolute text-5xl md:text-7xl font-bold top-1/2 transform -translate-y-1/2 text-center z-20 animate-name">
          {name}
        </h1>
        <div className="absolute top-1/4 md:top-20 right-0 transform -translate-y-1/2 flex items-center z-20">
          <p className="text-2xl md:text-5xl mr-4 text-lightGrayishBlue font-serif animate-title">
            {title}
          </p>
        </div>
      </div>
      <div className="absolute left-4 bottom-4 bg-darkBlue p-2 rounded-full flex items-center space-x-2">
        <svg
          className="w-6 h-6 text-veryLightGray"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 20l-5.447-2.724A2 2 0 013 15.382V6a2 2 0 011.105-1.791l7-3.5a2 2 0 011.79 0l7 3.5A2 2 0 0121 6v9.382a2 2 0 01-1.553 1.894L15 20v1a2 2 0 01-2 2H11a2 2 0 01-2-2v-1z"
          ></path>
        </svg>
        <span>{location}</span>
      </div>
    </section>
  );
};

export default Hero;
