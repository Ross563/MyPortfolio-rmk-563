import React from "react";
import AboutImg from "../../assets/developerAnimated.png";
import { IoArrowForward } from "react-icons/io5";
const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl my-0 mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-80" src={AboutImg} alt="About img" />

          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Frontend development
                </h1>
                <p className="text-sm mt-4 md:text-md leading-tight">
                  I’m skilled in React, HTML, CSS, TypeScript and JavaScript. I
                  create clean, responsive web applications focused on great
                  user experiences.
                </p>
              </span>
            </div>

            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Backend development
                </h1>
                <p className="text-sm mt-4 md:text-md leading-tight">
                  I'm skilled in NodeJS, ExpressJS, MongoDB ans SQL. I create
                  efficient applications from front to back with solid Backend
                  functionality.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
