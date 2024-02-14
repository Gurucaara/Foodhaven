import React from "react";
import github from "../../public/images/github.svg";
import instagram from "../../public/images/instagram.svg";
import linkedin from "../../public/images/linkedin.svg";
import twitter from "../../public/images/twitter.svg";
import userSolid from "../../public/images/user-solid.svg";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left">
          <p className="text-sm mb-2">
            &copy; {new Date().getFullYear()} Gurucaara
          </p>
          <p className="text-sm">All rights reserved</p>
        </div>
        <div className="flex mt-4 md:mt-0">
          <a
            href="https://github.com/gurucaara"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 mr-4 transition-colors duration-300"
          >
            <img className="w-6" src={userSolid} alt="About Image" />
          </a>
          <a
            href="https://github.com/gurucaara"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 mr-4 transition-colors duration-300"
          >
            <img className="w-6" src={github} alt="About Image" />
          </a>
          <a
            href="https://www.instagram.com/gurucaara/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 mr-4 transition-colors duration-300"
          >
            <img className="w-6" src={instagram} alt="About Image" />
          </a>
          <a
            href="https://twitter.com/pururana24"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 mr-4 transition-colors duration-300"
          >
            <img className="w-6" src={twitter} alt="About Image" />
          </a>
          <a
            href="https://www.linkedin.com/in/puru-rana/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 mr-4 transition-colors duration-300"
          >
            <img className="w-6" src={linkedin} alt="About Image" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
