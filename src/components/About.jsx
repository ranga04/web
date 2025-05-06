const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center bg-[#1b263b] px-6 py-20 text-[#e0e1dd]"
    >
      <h2 className="text-4xl font-bold text-center mb-2">About Me</h2>
      <div className="w-24 h-1 bg-[#e0e1dd] rounded mb-6"></div>

      <div className="max-w-3xl text-center space-y-6 text-lg leading-relaxed">
        <p className="text-lg">
          I’m Tulasi — a Robotics Engineer and AI/ML enthusiast passionate about
          creating real-world solutions at the intersection of hardware and
          software.
        </p>

        <p className="text-lg">
          My journey began in mechanical engineering and has evolved through
          hands-on experience in embedded systems, machine learning, and
          robotics R&D. Whether it’s building autonomous robots, optimizing
          control systems, or exploring human-machine collaboration, I’m driven
          by curiosity, creativity, and the thrill of solving complex problems.
        </p>

        <ul className="text-left space-y-2 mt-4 text-base sm:text-lg">
          <li>🔧 Embedded systems & control design</li>
          <li>🤖 Robot autonomy & simulation</li>
          <li>🧠 Machine learning & computer vision</li>
          <li>📈 Passion for research and collaboration</li>
        </ul>

        <div className="mt-10 bg-[#778da9] text-[#0d1b2a] px-6 py-4 rounded-lg shadow-lg text-xl font-semibold">
          Currently open to research, collaborations, and robotics
          opportunities.
        </div>
      </div>
    </section>
  );
};

export default About;
