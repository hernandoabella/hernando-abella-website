import React from "react";

function About() {
  // Define an array of skills
  const skills = [
    "JavaScript",
    "React",
    "Node.js",
    "Express.js",
    "HTML",
    "CSS",
    "MongoDB",
    "SQL",
    "Git",
    "AWS",
    "Docker",
    // Add more skills as needed
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold mb-3">About me</h2>
      <p>
        I love empowering individuals to learn new technologies effortlessly,
        fostering growth and success in their tech journey.
      </p>

      {/* Skills Section */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-3">Skills</h3>
        <ul className="flex flex-wrap gap-3 text-gray-600 dark:text-gray-300 list-inside">
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default About;
