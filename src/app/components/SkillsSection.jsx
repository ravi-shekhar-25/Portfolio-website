import React from 'react';
import {LightBulbIcon} from "@heroicons/react/24/solid";
import Image from "next/image";
import {Divider, Tooltip} from "@mui/material";

const skillsData = [
    {
        id: 1,
        title: "HTML",
        description: "<h1> Hello </h1>",
        image: "https://img.icons8.com/color/48/000000/html-5.png",
    },
    {
        id: 2,
        title: "CSS",
        description: "h1{color:white}",
        image: "https://img.icons8.com/color/48/000000/css3.png",
    },
    {
        id: 3,
        title: "Javascript",
        description: "console.log(\"Hello\")",
        image: "https://img.icons8.com/color/48/000000/javascript.png",
    },
    {
        id: 4,
        title: "NodeJS",
        description: "console.log(\"Hello\")",
        image: "https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000",
    },
    {
        id: 5,
        title: "ReactJS",
        description: "console.log(\"Hello\")",
        image: "https://img.icons8.com/color/48/000000/react-native.png",
    },
    {
        id: 6,
        title: "Next.js",
        description: "console.log(\"Hello\")",
        image: "https://img.icons8.com/color/48/000000/nextjs.png",
    },
    {
        id: 7,
        title: "Python",
        description: "print(\"Hello\")",
        image: "https://img.icons8.com/color/48/000000/python.png",
    },
    {
        id: 25,
        title: "C",
        description: "printf(\"Hello\")",
        image: "https://img.icons8.com/?size=100&id=40670&format=png&color=000000",
    },
    {
        id: 8,
        title: "C++",
        description: "cout <<\"Hello\"",
        image: "https://img.icons8.com/?size=100&id=TpULddJc4gTh&format=png&color=000000",
    },
    {
        id: 9,
        title: "MongoDB",
        description: "MongoDB",
        image: "https://img.icons8.com/color/48/000000/mongodb.png",
    },
    {
        id: 10,
        title: "MySQL",
        description: "SELECT \"Hello\",\"World\"",
        image: "https://img.icons8.com/color/48/000000/mysql.png",
    },
    {
        id: 11,
        title: "Typescript",
        description: "console.log(\"Hello\")",
        image: "https://img.icons8.com/color/48/000000/typescript.png",
    },
    {
        id: 12,
        title: "VS Code",
        description: "VS Code",
        image: "https://img.icons8.com/?size=100&id=9OGIyU8hrxW5&format=png&color=000000",
    },
    {
        id: 13,
        title: "TailwindCSS",
        description: "TailwindCSS",
        image: "https://img.icons8.com/color/48/000000/tailwindcss.png",
    },
    {
        id: 14,
        title: "Numpy",
        description: "Numpy",
        image: "https://img.icons8.com/color/48/000000/numpy.png",
    },
    {
        id: 15,
        title: "Pandas",
        description: "Pandas",
        image: "https://img.icons8.com/color/48/000000/pandas.png",
    },
    {
        id: 16,
        title: "Matplotlib",
        description: "Matplotlib",
        image: "/images/matplotlib.png",
    },
    {
        id: 17,
        title: "Jupyter",
        description: "Jupyter",
        image: "https://img.icons8.com/?size=100&id=J0SgMWzAxqFj&format=png&color=000000",
    },
    {
        id: 18,
        title: "Google Collab",
        description: "Google Collab",
        image: "https://img.icons8.com/?size=100&id=lOqoeP2Zy02f&format=png&color=000000",
    },
    {
        id: 19,
        title: "Git/GitHub",
        description: "GitHub",
        image: "https://img.icons8.com/?size=100&id=20906&format=png&color=000000",
    },
    {
        id: 20,
        title: "Material UI",
        description: "Material UI",
        image: "https://img.icons8.com/color/48/000000/material-ui.png",
    },
    {
        id: 21,
        title: "ExpressJS",
        description: "ExpressJS",
        image: "https://img.icons8.com/?size=100&id=2ZOaTclOqD4q&format=png&color=000000",
    },
    {
        id: 22,
        title: "Excel",
        description: "Excel",
        image: "https://img.icons8.com/?size=100&id=117561&format=png&color=000000",
    },
    {
        id: 23,
        title: "Canva",
        description: "Canva",
        image: "https://img.icons8.com/?size=100&id=iWw83PVcBpLw&format=png&color=000000",
    },
    {
        id: 24,
        title: "Figma",
        description: "Figma",
        image: "https://img.icons8.com/?size=100&id=zfHRZ6i1Wg0U&format=png&color=000000",
    },
    {
        id: 26,
        title: "IntelliJ Idea",
        description: "IntelliJ",
        image: "https://img.icons8.com/?size=100&id=61466&format=png&color=000000"
    }

]


const SkillsSection = () => {
    return (
        <section id="skills">
            <Divider
                sx={{
                    borderColor: "#33353F",
                    '&::before, &::after': {
                        borderColor: '#33353F',
                    },
                    my: 8,
                }}
            >
                <div className="flex justify-center">
                    <div className="flex flex-row items-center gap-2">
                        <LightBulbIcon className="size-10 text-yellow-700"/>
                        <h1 className={"text-4xl text-center font-bold text-white "}>
                            My <span>Skills</span>
                        </h1>
                    </div>
                </div>
            </Divider>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 items-center gap-4">
                {skillsData.map((skill) => (
                    <div key={skill.id} className="shadow rounded-lg bg-white p-2 text-center">
                        <Tooltip title={skill.description} placement="top" followCursor={true} arrow={true}>
                            <Image src={skill.image} alt={skill.title} width={60}
                                   height={60}
                                   className="mx-auto mb-2" />
                            <p className={"font-semibold"}>{skill.title}</p>
                        </Tooltip>
                    </div>

                ))}
            </div>
        </section>
    );
};

export default SkillsSection;