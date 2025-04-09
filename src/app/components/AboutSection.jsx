"use client";
import React, {useState, useTransition} from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import {UserIcon} from "@heroicons/react/24/outline";

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2 ">
                <li>Python</li>
                <li>C/C++</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>MERN Stack</li>
                <li>SQL</li>
                <li>NextJs</li>
                <li>Git/GitHub</li>
                <li>Typescript</li>
                <li>Tailwind CSS</li>
            </ul>
        ),
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className="list-disc pl-2">
                <li>AWS Cloud Practitioner</li>
                <li>Google Professional Cloud Developer</li>
            </ul>
        ),
    },
];

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [_isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section className="text-white" id="about">
            <div className="w-full flex justify-center">
                <div className="flex flex-row items-center gap-2">
                    <UserIcon className="size-10"/>
                    <h1 className="text-4xl font-bold">About Me</h1>
                </div>
            </div>

            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image src="/images/aboutImage.png" alt="image" width={500} height={500}/>
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <p className="text-base lg:text-lg">
                        I am a full stack web developer with a passion for creating
                        interactive and responsive web applications. I have experience
                        working with JavaScript, React, Node.js, Express, Next.js, SQL, Tailwind CSS,
                        HTML, CSS, and Git. I am a quick learner and I am always
                        looking to expand my knowledge and skill set. I am a team player and
                        I am excited to work with others to create amazing applications.
                    </p>
                    <div className="flex flex-row justify-start mt-8">
                        <TabButton
                            selectTab={() => handleTabChange("skills")}
                            active={tab === "skills"}
                        >
                            {" "}
                            Skills{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("certifications")}
                            active={tab === "certifications"}
                        >
                            {" "}
                            Certifications{" "}
                        </TabButton>
                    </div>
                    <div className="mt-8">
                        {TAB_DATA.find((t) => t.id === tab).content}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
