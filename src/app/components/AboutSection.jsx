"use client";

import React from "react";
import Image from "next/image";
import {UserIcon} from "@heroicons/react/24/solid";
import {Divider, Typography} from "@mui/material";
import {EnvelopeIcon, MapPinIcon, PhoneIcon} from "@heroicons/react/24/outline";
import Link from "next/link";

const AboutSection = () => {

    return (
        <section className="text-white" id="about">
            <Divider
                sx={{
                    borderColor: "#33353F",
                    '&::before, &::after': {
                        borderColor: '#33353F',
                    },
                    my: 4,
                }}
            >
                <div className="w-full flex justify-center">
                    <div className="flex flex-row items-center gap-2">
                        <UserIcon className="size-10"/>
                        <h1 className="text-4xl font-bold">About Me</h1>
                    </div>
                </div>
            </Divider>

            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image src="/images/aboutImage.png" alt="image" width={450} height={450}
                       className={`rounded-2xl  shadow-lg shadow-warmGray-600 filter grayscale hover:grayscale-0 
                       transition duration-500 cursor-pointer transform hover:scale-105`} />

                <div className="mt-8 md:mt-0 text-left flex flex-col h-full">
                    <Typography variant="h4" className="text-primary-400">
                        I&apos;m Ravi Shekhar
                    </Typography>
                    <br/>
                    <Typography variant="body1" className="">
                        A full stack web developer with a passion for creating
                        interactive and responsive web applications. I have experience
                        working with JavaScript, React, Node.js, Express, Next.js, SQL, Tailwind CSS,
                        HTML, CSS, and Git. I am a quick learner and I am always
                        looking to expand my knowledge and skill set. I am a team player and
                        I am excited to work with others to create amazing applications.
                    </Typography>
                    <br/>
                    <Link href={"tel:+919155227756"}
                          className={"cursor-pointer hover:text-lime-400"}>
                        <div className="flex flex-row items-center gap-1.5">
                            <PhoneIcon className="size-5 text-lime-500"/>
                            <span className="ml-1.5">
                            +91-9155227756
                        </span>
                        </div>
                    </Link>
                    <Link href={"mailto:ravishekharrkm@gmail.com"}
                          className={"cursor-pointer hover:underline hover:text-indigo-400"}>
                        <div className="flex flex-row items-center mt-2 gap-1.5">
                            <EnvelopeIcon className="size-5 text-blue-500"/>
                            <span className="ml-1.5">
                            ravishekharrkm@gmail.com
                        </span>
                        </div>
                    </Link>
                    <div className="flex flex-row items-center mt-2 gap-1.5">
                        <MapPinIcon className="size-5 text-yellow-500"/>
                        <span className="ml-1.5">Muzaffarpur, Bihar, India</span>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutSection;
