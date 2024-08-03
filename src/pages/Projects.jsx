// import React from "react";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import ProjectCard from "../components/ProjectCard";
// import projectData from "../data/projects.json"; // Create a JSON file with project details

// const Projects = () => {
//   return (
//     <div>
//       <Header />
//       <main className="container mx-auto p-4 text-darkBlue">
//         <h1 className="text-4xl font-bold text-center my-8">My Projects</h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {projectData.map((project, index) => (
//             <ProjectCard key={index} {...project} />
//           ))}
//         </div>
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default Projects;

const Projects = () => {
  return (
    <div className="container mx-auto p-4 text-darkBlue">
      <h1 className="text-4xl font-bold text-center my-8">My Projects</h1>
      <p className="text-center">Projects will be displayed here.</p>
    </div>
  );
};

export default Projects;
