import React from "react";
import ProjectCard from "./ProjectCard"; // Import the ProjectCard component
import img from '../assets/project_img.webp';
import uni_logo from '../assets/uni_logo.jpg';

const Projects = () => {
  const projects = [
    {
      title: "DDPG for Continuous Control",
      description:
        "Implemented DDPG for continuous control tasks in robotics simulation. Used advanced reinforcement learning techniques.",
      image: img, 
      link: "https://github.com/ranga04/ddpg",
    },
    {
      title: "ML & AI Projects",
      description:
        "A collection of machine learning and AI projects exploring different datasets and algorithms for various tasks.",
      image:  img,
      link: "https://github.com/ranga04/ml-ai_projects",
    },
    {
      title: "Anomaly Detection in Time Series Data",
      description:
        "Developed an anomaly detection model for time series data, using LSTM-based networks for accurate forecasting.",
      image: img, 
      link: "https://github.com/ranga04/Anomaly-Detection-TSD",
    },
    {
      title: "University MSc Robotics Tasks",
      description:
        "Showcasing various robotics and AI-related university projects completed during the MSc course in Robotics.",
      image: uni_logo, 
      link: "https://github.com/ranga04/university_works",
    },
  ];

  return (
    <section id="projects" className="p-8 bg-lightGray text-darkGrayishBlue">
      <h2 className="text-4xl font-bold mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link} // Pass the project link as a prop
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
