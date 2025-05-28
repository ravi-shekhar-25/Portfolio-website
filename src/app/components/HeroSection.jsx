"use client";
import React from "react";
import Image from "next/image";
import {TypeAnimation} from "react-type-animation";
import {motion} from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
    return (
        <section className="py-8 md:py-16 lg:py-24">
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <motion.div
                    initial={{opacity: 0, scale: 0.5}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 0.5}}
                    className="col-span-8 place-self-center text-center sm:text-left justify-self-start">

                    <h1 className="text-white mb-4 text-3xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
                        <span
                            className="text-transparent bg-clip-text bg-gradient-to-r from-primary-200 to-primary-600">
                          Hi, I&apos;m{" "}
                        </span>
                        <br></br>
                        <span
                            className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-500 to-primary-600">
                            Ravi Shekhar
                        </span>
                    </h1>
                    <h1 className="text-2xl mb-4 text-white font-bold">
                        I am into
                        <TypeAnimation
                            sequence={[
                                " Full Stack Web Developement",
                                1000,
                                " Data Analysis",
                                1000,
                                " Data Science",
                                1000,
                            ]}
                            className="text-primary-500"
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                        Computer Science and Engineering Undergraduate from Rajiv Gandhi Institute of Petroleum
                        Technology <b>(An Institute of National Importance along the lines of IITs)</b>.
                    </p>
                    <div>
                        <Link
                            href="/#contact"
                            className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
                        >
                            Message Me
                        </Link>
                        <Link href="https://drive.google.com/file/d/1JuYRmJEkGj4XSJ9YInTFotY3tCGgoH7t/view?usp=sharing"
                              target="_blank"
                              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3">
                            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                                 Download Resume
                            </span>
                        </Link>
                    </div>
                </motion.div>
                <motion.div
                    initial={{opacity: 0, scale: 0.5}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 0.5}}
                    className="col-span-4 place-self-center mt-4 lg:mt-0"
                >
                    <div className=" rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                        <Image
                            src="/images/photo.png"
                            alt="hero image"
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            width={450}
                            height={450}
                        />
                    </div>
                </motion.div>
            </div>
            <div className="px-4 py-7 socials flex flex-row gap-2">
                <Link href="https://github.com/ravi-shekhar-25" target="_blank">
                    <Image src="/assets/github.svg" alt="Github Icon" width={50} height={50}/>
                </Link>
                <Link href="https://www.linkedin.com/in/ravi-shekhar25/" target="_blank">
                    <Image src="/assets/linkedin.svg" alt="Linkedin Icon" width={50} height={50}/>
                </Link>
                <Link href="https://www.instagram.com/shekhar_025/" target="_blank">
                    <Image src="/assets/instagram.svg" alt="Instagram Icon" width={50} height={50}/>
                </Link>
                <Link href="https://www.facebook.com/profile.php?id=100087018645883" target="_blank">
                    <Image src="/assets/facebook.svg" alt="Facebook Icon" width={50} height={50}/>
                </Link>
            </div>
        </section>
    );
};

export default HeroSection;
