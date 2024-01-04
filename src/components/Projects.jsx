import React from "react";
import { FaLink } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Projects = (props) => {
  return (
    <div
      data-aos="zoom-in"
      data-aos-easing="linear"
      data-aos-duration="100"
      id="project"
      className="flex flex-col w-[50%]  flex-wrap gap-x-10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-5"
    >
      <div className="hover:scale-105 transition ease-in-out delay-150">
        {props.link !== " " ? (
          <a href={props.link}>
            <img src={props.image} alt="" />
          </a>
        ) : (
          <img src={props.image} alt="" />
        )}
      </div>

      <div className="">
        <h2 className="text-xl mt-3 text-blue-500 ">{props.title} :</h2>

        <p className="mt-3 mb-3">{props.decprition}</p>
      </div>

      {props.Projectlink !== " " && (
        <div>
          <a
            href={props.Projectlink}
            className=" transition ease-in-out delay-150 flex gap-2 text-blue-500"
          >
            Project Demo <FaLink className="text-black" />
          </a>
        </div>
      )}
      {props.Githublink !== " " && (
        <div>
          <a
            href={props.Githublink}
            className=" transition ease-in-out delay-150 flex gap-2 text-blue-500"
          >
            Githublink <FaGithub className="text-black" />
          </a>
        </div>
      )}
    </div>
  );
};

export default Projects;
