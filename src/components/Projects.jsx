import origami_img from "../assets/group photo.jpg";
import itp_img from "../assets/itp.png";
import turtlebot_img from "../assets/turtlebot3.png";
import mobilebot_img from "../assets/mobile robot.jpeg";
// import uni_logo from "../assets/uni_logo.jpg";
import mover6 from "../assets/mover6.png";
import vision_img from "../assets/improved model.png";
import dm_img from "../assets/modelsComaprision.png";

const Projects = () => {
  const featuredProjects = [
    {
      title: "Self-Folding Origami Robot",
      description:
        "Developed a self-folding origami robot showcased at the Festival of the Mind. Explored sensor-less actuation through material design and embedded control. Collaborated with Dr. Shuhei Miyashita, Dr. Dana Damian, and team. Contact me for access to the full thesis report or submitted paper.",
      image: origami_img,
      link: "https://drive.google.com/file/d/1i_nqAe1Zt8ak7cVAeIr_Q7W6LY-z0pP_/view?usp=sharing",
    },
    {
      title: "Industrial Training Program (ITP): Thin Film Manufacturing",
      description:
        "Designed a reinforcement learning-based control system for roll-to-roll thin film manufacturing. The project included simulations in MATLAB/Simulink and was presented via a technical poster.",
      image: itp_img,
      link: "https://drive.google.com/file/d/1MY6GY2TLnoaeUVLi9i97jpnPUADWArSZ/view?usp=sharing",
    },
  ];

  const moduleProjects = [
    {
      title: "SLAM with TurtleBot3",
      description:
        "Implemented SLAM in Gazebo and RViz using ROS for indoor exploration and mapping. (Module: Mobile Robotics and Autonomous Systems)",
      image: turtlebot_img,
      link: "https://drive.google.com/file/d/1QDe0krJ4ziSiE_KwzmfwLfbCpMko4JnV/view?usp=sharing",
    },
    {
      title: "Autonomous Mobile Robot",
      description:
        "Arduino-based robot for obstacle avoidance and path following in a defined arena. (Module: Mechatronics for Robotics)",
      image: mobilebot_img,
      link: "https://drive.google.com/file/d/1pVjPrATbG8GErOidlO36RkVgaIoFR0-T/view?usp=sharing",
    },
    {
      title: "Collaborative Robot Safety",
      description:
        "Analyzed ISO/TS 15066 standards and human-robot collaboration modes using Mover6 manipulator. (Module: Manipulator Robotics)",
      image: mover6,
      link: "https://drive.google.com/file/d/1uxWFPNuqiY8rHwHy18aF7ZLV67s-gjRu/view?usp=sharing",
    },
    {
      title: "QSAR ML for Biodegradability",
      description:
        "Random Forest and SVM models used to predict chemical biodegradability. (Module: Data Modelling and Machine Intelligence)",
      image: dm_img,
      link: "https://drive.google.com/file/d/1KO0Z4hS7Ty0NuqoEE6eLTURyRsxt2naK/view?usp=sharing",
    },
    {
      title: "Image Classification and Tracking",
      description:
        "Developed image processing tasks including histogram analysis, edge detection, optical flow, and object classification using CNNs. (Module: Machine Vision)",
      image: vision_img,
      link: "https://drive.google.com/file/d/16SB_R5YVJTG-g-nKFs4z8N8q0kJXwoGh/view?usp=sharing",
    },
  ];

  const otherProjects = [
    {
      title: "DDPG for Continuous Control",
      description:
        "Deep Deterministic Policy Gradient algorithm applied to OpenAI Gym's Pendulum-v1. (Independent Project)",
      link: "https://github.com/ranga04/ddpg",
    },
    {
      title: "Drone Navigation with Reinforcement Learning",
      description:
        "Trained a drone using PyBullet and Stable-Baselines3 for autonomous navigation. (Independent Project)",
      link: "https://github.com/ranga04/drone_rl",
    },
    {
      title: "Anomaly Detection in Time Series",
      description:
        "LSTM with attention mechanism used for time series anomaly detection. (Independent Project)",
      link: "https://github.com/ranga04/Anomaly-Detection-TSD",
    },
    {
      title: "Object Detection using KITTI Dataset",
      description:
        "YOLOv5 fine-tuned for object detection on KITTI data. Applied to robotic perception tasks. (Independent Project)",
      link: "https://github.com/ranga04/ktti_obj_detection",
    },
  ];

  return (
    <section id="projects" className="p-8 bg-lightGray text-darkGrayishBlue">
      <h2 className="text-4xl font-bold mb-8 text-center">Projects</h2>
      <>
        {/* Featured Projects */}
        <div className="space-y-8 mb-12">
          {featuredProjects.map((project, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <div className="w-full md:w-1/3">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="w-full md:w-2/3 p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                  <p className="text-lg text-darkGrayishBlue">
                    {project.description}
                  </p>
                </div>
                <div className="mt-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-yellow-500 text-darkBlue px-4 py-2 text-lg font-semibold rounded shadow-lg hover:bg-yellow-400 transition-transform transform hover:scale-105"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Module Projects */}
        <h3 className="text-2xl font-bold mb-4 mt-12">Module Projects</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
          {moduleProjects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
            >
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-6">
                <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                <p className="text-sm text-darkGrayishBlue mb-3">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-moderateBlue font-semibold hover:underline"
                >
                  View
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <h3 className="text-2xl font-bold mb-4 mt-12">Other Projects</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {otherProjects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
            >
              <div className="p-6">
                <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                <p className="text-sm text-darkGrayishBlue mb-3">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-moderateBlue font-semibold hover:underline"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </>
    </section>
  );
};

export default Projects;
