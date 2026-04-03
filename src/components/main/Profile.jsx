import React from "react";
import { useState } from "react";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFileDownload } from "react-icons/fa";

const Profile = () => {
  return (
    <div>
      <div>
        <div className="mb-2">
          <img
            src="picture.jpg"
            className="h-36 min-w-36 w-36 rounded-full object-cover"
          />
        </div>
        <p className="text-4xl font-bold mb-2">Rhem Giou Salvador</p>
        <p className="text-neutral-400 text-xl mb-4 font-semibold">
          Full Stack Web Developer
        </p>
        <p className="text-neutral-500 mb-4 ">📍 Rizal, Philippines 🇵🇭</p>
        <p className="text-neutral-300 text-sm mb-4 flex-wrap">
          Crafting intelligent systems. I turn AI concepts into real-world
          products.
        </p>
      </div>
      <div className="flex flex-row flex-wrap items-center gap-x-5 gap-y-4">
       <a href="src/assets/resume/resume.pdf" target="_blank" rel="noopener noreferrer">
  <div className="border rounded-md px-3 py-1 flex gap-x-2 items-center cursor-pointer">
    <FaFileDownload /> <p>Resume</p>
  </div>
</a>
        <div className="flex flex-row gap-x-2">
          <a href="https://github.com/lindtseyyy" target="_blank" rel="noopener noreferrer">
  <FaGithub color="#e5e5e5" size={24} className="cursor-pointer" />
</a>
<a href="https://mail.google.com/mail/?view=cm&fs=1&to=giousalvador@gmail.com" target="_blank" rel="noopener noreferrer">
  <MdEmail color="#e5e5e5" size={24} className="cursor-pointer" />
</a>
<a href="https://www.facebook.com/rhemgiou" target="_blank" rel="noopener noreferrer">
  <FaFacebook color="#e5e5e5" size={24} className="cursor-pointer" />
</a>
<a href="https://www.linkedin.com/in/rhemsalvador" target="_blank" rel="noopener noreferrer">
  <FaLinkedin color="#e5e5e5" size={24} className="cursor-pointer" />
</a>
<a href="https://www.instagram.com/_rhemmm/" target="_blank" rel="noopener noreferrer">
  <FaInstagramSquare
            color="#e5e5e5"
            size={24}
            className="cursor-pointer"
          />
</a>
          
        </div>
      </div>
    </div>
  );
};

export default Profile;
