import { motion } from "framer-motion";

const MyJourney = () => {
  const milestones = [
    {
      year: "2018",
      description:
        "Completed BEng in Mechanical Engineering from SCSVMV University.",
    },
    {
      year: "2019",
      description:
        "Worked as Junior Software Engineer, focusing on automation projects.",
    },
    {
      year: "2021",
      description:
        "Joined MSc in Robotics at The University of Sheffield, expanding my knowledge in robotics and AI.",
    },
    {
      year: "2023",
      description:
        "Completed MSc project on a self-folding origami robot, focusing on automation without sensors.",
    },
    {
      year: "2024",
      description:
        "Working on an AI-powered digital twin platform and exploring business opportunities in the AI & robotics field.",
    },
  ];

  return (
    <section id="my-journey" className="px-6 py-8 bg-lightGrayishBlue">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-darkBlue mb-8 text-center">
          My Journey
        </h2>
        <div className="relative border-l-4 border-moderateBlue pl-8">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: index * 0.3 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              className="mb-8 relative"
            >
              {/* Align the bullet point */}
              <div
                className="absolute left-[-28px] top-1 w-4 h-4 bg-moderateBlue rounded-full"
                style={{ zIndex: 1 }}
              ></div>

              {/* Year and description */}
              <div className="text-lg pl-4">
                <div className="text-2xl font-bold text-moderateBlue">
                  {milestone.year}
                </div>
                <motion.p
                  className="text-lg text-darkGrayishBlue mt-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: index * 0.4 }}
                >
                  {milestone.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyJourney;
