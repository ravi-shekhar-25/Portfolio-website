"use client";
import React, {useRef} from "react";
import ProjectCard from "./ProjectCard";
import {motion, useInView} from "framer-motion";
import {ComputerDesktopIcon} from "@heroicons/react/24/solid";

const projectsData = [
  {
    id: 1,
    title: "Personal Portfolio Website",
    description: "A detailed portfolio platform showcasing all my works",
    image: "/images/Project-11.png",
    gitUrl: "https://github.com/ravi-shekhar-25/Portfolio-website",
    previewUrl: "https://github.com/ravi-shekhar-25/Portfolio-website",
  },
  {
    id: 2,
    title: "Comprehensive Website for Farmers Need",
    description: "A unified digital portal offering essential resources, expert insights, and tools for modern farmers",
    image: "/images/Project-12.png",
    gitUrl: "https://github.com/ravi-shekhar-25/Web-Technology-Project",
    previewUrl: "https://ravi-shekhar-25.github.io/Web-Technology-Project/",
  },
  {
    id: 3,
    title: "Real-Estate Price Prediction",
    description: "A machine learning model to predict real estate prices based on various parameters",
    image: "/images/Project-13.png",
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Real-Estate Price Prediction",
    description: "A machine learning model to predict real estate prices based on various parameters",
    image: "/images/project-3.png",
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  // const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // const handleTagChange = (newTag) => {
  //   setTag(newTag);
  // };

  // const filteredProjects = projectsData.filter((project) =>
  //     project.tag.includes(tag)
  // );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
      <section id="projects">
        <div className="w-full flex justify-center mt-8 mb-8 md:mb-12">
          <div className="flex flex-row items-center gap-2">
            <ComputerDesktopIcon className="size-10 text-blue-500"/>
            <h2 className="text-center text-4xl font-bold text-white">
              My Projects
            </h2>
          </div>
        </div>

        {/*<div className="text-white flex flex-row justify-center items-center gap-2 py-4">*/}
        {/*  <ProjectTag*/}
        {/*      onClick={handleTagChange}*/}
        {/*      name="All"*/}
        {/*      isSelected={tag === "All"}*/}
        {/*  />*/}
        {/*  <ProjectTag*/}
        {/*      onClick={handleTagChange}*/}
        {/*      name="Web"*/}
        {/*      isSelected={tag === "Web"}*/}
        {/*  />*/}
        {/*  <ProjectTag*/}
        {/*      onClick={handleTagChange}*/}
        {/*      name="Mobile"*/}
        {/*      isSelected={tag === "Mobile"}*/}
        {/*  />*/}
        {/*</div>*/}
        <ul ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {projectsData.map((project, index) => (
              <motion.li
                  key={index}
                  variants={cardVariants}
                  initial="initial"
                  animate={isInView ? "animate" : "initial"}
                  transition={{duration: 0.3, delay: index * 0.4}}
              >
                <ProjectCard
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    imgUrl={project.image}
                    gitUrl={project.gitUrl}
                    previewUrl={project.previewUrl}
                />
              </motion.li>
          ))}
        </ul>
      </section>
  );
};

export default ProjectsSection;