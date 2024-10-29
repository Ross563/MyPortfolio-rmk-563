import React from "react";
import avatarImg from "../../assets/meNoBg.png";
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div className="text-white flex w-full justify-center gap-1 items-start pt-10 pl-10 mb-0 pr-10 pb-0 md:p-20">
      <div className="md:w-2/4 md:pt-10 ">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl mt-4 tracking-tight ">
          I am a Full Stack Developer...
        </p>
        <button className="mt-5 md:md-10 text-white py02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          <a href="#Footer"> Contact Me</a>
        </button>
      </div>
      <div>
        <img
          className=" h-[50vh] rounded-full bg-[rgb(148,189,246)]"
          src={avatarImg}
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
