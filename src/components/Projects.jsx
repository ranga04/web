import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Sensor-Driven Robotic Navigation",
      description:
        "Developed a ROS-based system using Arduino Uno and ultrasonic sensors for enhanced mobile robot control.",
      image: "/path/to/project1-image.jpg",
    },
    {
      title: "Automated Waste Monitoring System",
      description:
        "Created a system to monitor and report waste levels using Arduino and Python.",
      image: "/path/to/project2-image.jpg",
    },
    {
      title: "Arduino-Based Motion Tracking System",
      description:
        "Designed a motion tracking system with real-time data display.",
      image: "/path/to/project3-image.jpg",
    },
    {
      title: "Object Detection with OpenCV and Python",
      description:
        "Developed an object detection program using advanced techniques in OpenCV.",
      image: "/path/to/project4-image.jpg",
    },
  ];

  return (
    <section id="projects" className="p-8 bg-lightGray text-darkGrayishBlue">
      <h2 className="text-4xl font-bold mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <p className="text-lg">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
