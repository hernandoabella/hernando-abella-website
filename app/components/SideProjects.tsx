import React from "react";

const SideProjects = () => {
  const projects = [
    {
      title: "JS-APPS",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget nunc sit amet leo vehicula lacinia.",
      link: "https://example.com/project1"
    },
    {
      title: "Project 2",
      description: "Praesent auctor ante sit amet diam scelerisque, sed hendrerit dolor ultricies. Nulla id magna eget odio tempus ullamcorper.",
      link: "https://example.com/project2"
    },
    {
      title: "Project 3",
      description: "Praesent auctor ante sit amet diam scelerisque, sed hendrerit dolor ultricies. Nulla id magna eget odio tempus ullamcorper.",
      link: "https://example.com/project2"
    },
    // Add more projects as needed
  ];

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h2 className="mb-5 text-2xl font-semibold">Side Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="p-4 border rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-500 mb-4">{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Learn more</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideProjects;
