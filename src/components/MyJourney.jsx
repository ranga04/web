import { motion } from "framer-motion";

const MyJourney = () => {
  const milestones = [
    {
      year: "2024",
      description:
        "Completed an MSc project on a dynamic kinetic self-folding origami sculpture, featured at The Festival of the Mind, Millennium Gallery, Sheffield. Currently volunteering at Code Your Future, helping with code reviews and teaching coding while upskilling in AI/ML, computer vision, and robotics.",
    },
    {
      year: "2023",
      description:
        "Joined MSc in Robotics at The University of Sheffield, taking on advanced modules in Machine Vision, Data Modelling, Mechatronics, Manipulator Robotics, Multi-Sensor Systems, and Mobile Robotics.",
    },
    {
      year: "2022",
      description:
        "Graduated from SCSVMV University with a CGPA of 9.70/10. Began working as a Junior Software Engineer, primarily focused on automation and web development projects.",
    },
    {
      year: "2018",
      description:
        "Started my BEng in Mechanical Engineering at SCSVMV University, with a focus on CAD/CAM, Mechatronics, Control Systems, and Manufacturing.",
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
