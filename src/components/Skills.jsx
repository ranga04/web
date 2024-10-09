import React from "react";

const Skills = () => {
  const skills = [
    { name: "Python", level: 90, icon: "🐍" },
    { name: "C++", level: 80, icon: "📚" },
    { name: "JavaScript", level: 85, icon: "🟨" },
    { name: "ReactJS", level: 75, icon: "⚛️" },
    { name: "Tailwind CSS", level: 80, icon: "🎨" },
    { name: "PostgreSQL", level: 70, icon: "🐘" },
    { name: "AutoCAD", level: 95, icon: "📐" },
    { name: "SolidWorks", level: 90, icon: "🛠️" },
    { name: "Fusion 360", level: 85, icon: "🔧" },
    { name: "MATLAB", level: 90, icon: "📊" },
    { name: "Simulink", level: 85, icon: "📈" },
    { name: "ROS", level: 80, icon: "🤖" },
    { name: "IoT", level: 75, icon: "🌐" },
  ];

  return (
    <section
      id="skills"
      className="py-12 px-4 md:py-16 md:px-8 bg-lightGrayishBlue text-veryLightGray"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-1 flex items-center">
                <span className="mr-1">{skill.icon}</span> {skill.name}
              </h3>
              <div className="w-full bg-gray-300 rounded-full h-2 mb-2">
                <div
                  className="bg-yellow-500 h-2 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
