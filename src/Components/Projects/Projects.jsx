import React from "react";
import ProjectCard from "./ProjectCard";
import taskImg from "../../assets/Screenshot 2024-10-29 075644.png";
import bookingImg from "../../assets/Screenshot 2024-10-29 080218.png";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          bannerImg={bookingImg}
          title="AirBnb clone"
          main="this is a booking app with Authentication and Authorization feature. You can search for places and book after logging in."
          demoLink="https://airbnb-rmk563-ui.vercel.app/"
          codeLink="https://github.com/Ross563/airbnb-clone"
        />
        <ProjectCard
          bannerImg={taskImg}
          title="Task Manager"
          main="this is a mini Task Manager app using ReactJS for the frontend and NodeJS with ExpressJS for the backend. Integrated MongoDB for database management to handle tasks. Implemented CRUD featurs and also Search Task feature."
          demoLink="https://mini-task-manager-ui.vercel.app/"
          codeLink="https://github.com/Ross563/mini-task-manager"
        />
      </div>
    </div>
  );
};

export default Projects;
