import img from "../assets/project_img.webp";
import uni_logo from "../assets/uni_logo.jpg";

const Projects = () => {
  const projects = [
    {
      title: "DDPG for Continuous Control",
      description:
        "Implemented DDPG for continuous control tasks in robotics simulation. This project demonstrates the use of advanced reinforcement learning techniques to achieve seamless control in robotics applications.",
      image: img,
      link: "https://github.com/ranga04/ddpg",
    },
    {
      title: "ML & AI Projects",
      description:
        "A collection of machine learning and AI projects exploring various datasets and algorithms, including image classification, anomaly detection, and predictive modeling.",
      image: img,
      link: "https://github.com/ranga04/ml-ai_projects",
    },
    {
      title: "Anomaly Detection in Time Series Data",
      description:
        "Developed an anomaly detection model for time series data using LSTM-based networks. This project features accurate forecasting methods and anomaly visualization.",
      image: img,
      link: "https://github.com/ranga04/Anomaly-Detection-TSD",
    },
    {
      title: "University MSc Robotics Tasks",
      description:
        "A showcase of various robotics and AI-related projects completed during the MSc course in Robotics, including mobile robotics, manipulator programming, and vision-based tasks.",
      image: uni_logo,
      link: "https://github.com/ranga04/university_works",
    },
  ];

  return (
    <section id="projects" className="p-8 bg-lightGray text-darkGrayishBlue">
      <h2 className="text-4xl font-bold mb-8 text-center">Projects</h2>
      <div className="space-y-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden"
          >
            {/* Project Image */}
            <div className="w-full md:w-1/3">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
            </div>

            {/* Project Description */}
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
    </section>
  );
};

export default Projects;
