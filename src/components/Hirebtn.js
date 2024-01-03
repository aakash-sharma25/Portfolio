import React from "react";
import "../App.css";
import { FaLocationArrow } from "react-icons/fa6";

const Hirebtn = (props) => {
  console.log(props.link);
  return (
    <a href={props.link} target="_blank" rel="noopener noreferrer">
      {" "}
      <button
        id="button"
        className=" text-white p-3 rounded-lg bg-blue-600 hover:bg-blue-800 hover:text-white shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]"
      > {props.name} <FaLocationArrow /></button>{" "}
     
    </a>
  );
};

export default Hirebtn;
