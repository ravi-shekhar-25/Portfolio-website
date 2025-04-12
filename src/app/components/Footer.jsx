"use client";
import React from "react";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import {motion} from "framer-motion";

const MotionHeart = motion(FaHeart);
const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
        <div className="p-10 flex flex-col md:flex-row justify-between items-center gap-3">
            <span><Image src="/images/logo_final.png" alt="image" width={100} height={100}/></span>
            <p className="text-slate-600 inline-flex items-center ">Designed with
                <MotionHeart
                    className="items-center p-2 size-10 text-red-700 shadow-red-400"
                    initial={{scale: 1}}
                    animate={{
                        scale: [1, 1.5, 1],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
                by Ravi Shekhar
            </p>
            <p className="text-slate-600">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
    </footer>
  );
};

export default Footer;
