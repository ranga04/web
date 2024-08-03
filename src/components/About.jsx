import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="px-6 py-8 bg-about-bg bg-cover bg-center text-white"
      style={{ minHeight: "100vh" }}
    >
      <h2 className="text-3xl font-bold mb-4 ">About Me</h2>
      <p className="mb-4 text-lg text-darkBlue">
        I am a passionate web developer with experience in building responsive
        and dynamic web applications. My expertise lies in JavaScript, React,
        and Node.js.
      </p>
      <p className="text-lg text-darkBlue">
        I love to learn new technologies and keep myself updated with the latest
        trends in web development. My goal is to create seamless user
        experiences and efficient, maintainable code.
      </p>
    </motion.div>
  );
};

export default About;
