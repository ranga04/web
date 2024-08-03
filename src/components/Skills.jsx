import React from "react";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-16 px-4 md:py-24 md:px-8 bg-darkGrayishBlue text-veryLightGray"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-2">Programming Languages</h3>
            <p className="text-lg">
              Python, C++, JavaScript, ReactJS, Tailwind CSS, PostgreSQL
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2">Engineering Tools</h3>
            <p className="text-lg">
              AutoCAD, SolidWorks, Fusion 360, MATLAB, Simulink, ROS, IoT
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2">Key Skills</h3>
            <p className="text-lg">
              Machine Learning, Problem-Solving, Team Management, Project
              Management, Leadership
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
