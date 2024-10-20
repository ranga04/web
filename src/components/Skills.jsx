import React from "react";

const Skills = () => {
  const skills = [
    { name: "Python", level: 75, icon: "🐍" },           // Advanced
    { name: "C++", level: 60, icon: "📚" },              // Intermediate
    { name: "JavaScript", level: 70, icon: "🟨" },       // Intermediate
    { name: "ReactJS", level: 75, icon: "⚛️" },          // Intermediate
    { name: "Tailwind CSS", level: 65, icon: "🎨" },     // Intermediate
    { name: "PostgreSQL", level: 55, icon: "🐘" },       // Intermediate
    { name: "AutoCAD", level: 80, icon: "📐" },          // Expert
    // { name: "SolidWorks", level: 65, icon: "🛠️" },      // Advanced
    { name: "Fusion 360", level: 80, icon: "🔧" },       // Advanced
    { name: "MATLAB", level: 65, icon: "📊" },           // Advanced
    { name: "Simulink", level: 60, icon: "📈" },         // Advanced
    { name: "ROS", level: 65, icon: "🤖" },              // Intermediate
    { name: "IoT", level: 55, icon: "🌐" },              // Intermediate
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
