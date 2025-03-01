import React from "react";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <span><Image src="/images/logo_final.png" alt="image" width={100} height={100} /></span>
        <p className="text-slate-600">© {new Date().getFullYear()}All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
