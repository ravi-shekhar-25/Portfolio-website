import React from "react";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
        <div className="container p-10 flex flex-col md:flex-row justify-between items-center gap-3">
            <span><Image src="/images/logo_final.png" alt="image" width={100} height={100}/></span>
            <p className="text-slate-600 inline-flex items-center ">Designed with <FaHeart className="animate-pulse items-center size-8 pl-1 pr-1 text-red-700 " /> by Ravi Shekhar</p>
            <p className="text-slate-600">© {new Date().getFullYear()} All rights reserved.</p>

        </div>
        {/*<div className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">*/}
        {/*   <p className="p-3 justify-between text-center "> Designed with Love by Ravi Shekhar </p>*/}
        {/*</div>*/}
    </footer>
  );
};

export default Footer;
