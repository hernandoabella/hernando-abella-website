import { motion } from "framer-motion";

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

  // Define an array of passions and interests
  const passionsAndInterests = [
    "Web development",
    "Mobile app development",
    "Open-source projects",
    "Problem-solving",
    "Learning new technologies",
    // Add more passions and interests as needed
  ];

  // Define an array of soft skills
  const softSkills = [
    "Communication",
    "Teamwork",
    "Adaptability",
    "Problem-solving",
    "Creativity",
    // Add more soft skills as needed
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="mb-5 text-2xl font-semibold">About Me</h2>
      <p className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-lg p-4 mb-6">
        I love empowering individuals to learn new technologies effortlessly,
        fostering growth and success in their tech journey.
      </p>

      {/* Skills Section */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-3">Skills</h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-lg p-2"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

      {/* Passion and Interests Section */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-3">Passion and Interests</h3>
        <div className="flex flex-wrap gap-2">
          {passionsAndInterests.map((interest, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-lg p-2"
            >
              {interest}
            </div>
          ))}
        </div>
      </div>

      {/* Soft Skills Section */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-3">Soft Skills</h3>
        <div className="flex flex-wrap gap-2">
          {softSkills.map((softSkill, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-lg p-2"
            >
              {softSkill}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default About;
