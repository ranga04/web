import React from "react";
import ProjectCard from "./ProjectCard"; // Import the ProjectCard component

const Projects = () => {
  const projects = [
    {
      title: "Sensor-Driven Robotic Navigation",
      description:
        "Developed a ROS-based system using Arduino Uno and ultrasonic sensors for enhanced mobile robot control.",
      image: "/assets/robotic_navigation.jpg", // Update with real image paths
      link: "https://github.com/your-github/sensor-driven-robotic-navigation",
    },
    {
      title: "Automated Waste Monitoring System",
      description:
        "Created a system to monitor and report waste levels using Arduino and Python for smart waste management.",
      image: "/assets/waste_monitoring.jpg", // Update with real image paths
      link: "https://github.com/your-github/automated-waste-monitoring",
    },
    {
      title: "Arduino-Based Motion Tracking System",
      description:
        "Designed a motion tracking system with real-time data display using Arduino and sensors.",
      image: "/assets/motion_tracking.jpg", // Update with real image paths
      link: "https://github.com/your-github/motion-tracking-system",
    },
    {
      title: "Object Detection with OpenCV and Python",
      description:
        "Developed an object detection program using advanced techniques in OpenCV and Python.",
      image: "/assets/object_detection.jpg", // Update with real image paths
      link: "https://github.com/your-github/object-detection-opencv",
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
