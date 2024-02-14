import React from "react";
import aboutImg from "../../public/images/aboutImg.svg";
import { REACT_LOGO, PARCEL_LOGO, TAILWINDCSS_LOGO } from "../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFontAwesome } from "@fortawesome/free-brands-svg-icons";
import REACT_ROUTER_LOGO from "../../public/images/REACT_ROUTER_LOGO.svg";

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center mt-2">
      <div className="w-3/4 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-5">About Us</h1>
        <h2 className="w-full font-semibold text-xl text-gray-800 text-center mb-5">
          Welcome to Food Haven - Reacting to Your Hunger, One Byte at a Time!
          🌶️
        </h2>
        <div className="flex items-center justify-center mb-5">
          <p className="font-semibold mr-4">Powered by:</p>
          <div className="flex items-center">
            <img className="h-6 mr-2" src={PARCEL_LOGO} alt="Parcel Logo" />
            <img className="h-6 mr-2" src={REACT_LOGO} alt="React Logo" />
            <img
              className="h-6 mr-2"
              src={REACT_ROUTER_LOGO}
              alt="React Router Logo"
            />
            <img
              className="h-5 mr-2"
              src={TAILWINDCSS_LOGO}
              alt="Tailwind CSS Logo"
            />
            <FontAwesomeIcon className="text-2xl" icon={faFontAwesome} />
          </div>
        </div>
        <img
          className="w-full md:max-w-md mb-5"
          src={aboutImg}
          alt="About Image"
        />
        <p className="text-center mb-8">
          At Food Haven, we blend cutting-edge technology with the art of
          dining to create a culinary haven like no other. Explore a world of
          flavors with us!
        </p>
        <h1 className="text-2xl font-bold mb-5">Our Tech-Forward Approach 🌐🔧</h1>
        <div className="mb-5">
          <h2 className="font-semibold">1. Technology That Powers Us</h2>
          <p>
            Discover our robust tech stack built with the latest tools and
            technologies, ensuring efficient, secure, and lightning-fast food
            delivery.
          </p>
        </div>
        <div className="mb-5">
          <h2 className="font-semibold">2. Code Craftsmanship</h2>
          <p>
            Dive into our GitHub repository to witness the meticulous
            craftsmanship behind every line of code that powers Food Haven.
          </p>
        </div>
        <div className="mb-5">
          <h2 className="font-semibold">3. Seamless Integration</h2>
          <p>
            Experience seamless navigation and real-time data fetching, thanks
            to our integration of React Router and custom API hooks.
          </p>
        </div>
        <h1 className="text-2xl font-bold mb-5">
          Culinary Delights at Your Doorstep 🌮🌍
        </h1>
        <div className="mb-5">
          <h2 className="font-semibold">1. Global Cuisines, Local Touch</h2>
          <p>
            Embark on a culinary journey with our diverse range of cuisines,
            carefully curated to satisfy every palate.
          </p>
        </div>
        <div className="mb-5">
          <h2 className="font-semibold">2. Responsive UI with Tailwind CSS</h2>
          <p>
            Enjoy a visually appealing and user-friendly experience, thanks to
            the magic of Tailwind CSS.
          </p>
        </div>
        <div className="mb-5">
          <h2 className="font-semibold">3. Personalized Search Experience</h2>
          <p>
            Find your favorite restaurants effortlessly with our personalized
            search feature, designed for convenience.
          </p>
        </div>
        <h1 className="text-2xl font-bold mb-5">Join the Food Haven Experience 🎉</h1>
        <p>
          Join our community of food enthusiasts and indulge in the fusion of
          flavor and technology at Food Haven!
        </p>
        <p>
          Experience the best of both worlds with Food Haven - where technology
          meets taste in perfect harmony! 🌐🍽️🚀
        </p>
      </div>
    </div>
  );
};
export default About;
