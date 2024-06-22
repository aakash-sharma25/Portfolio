import React from "react";
import Button from "./Button";
import "./../App.css";
import Social from "./Social";
import Hirebtn from "./Hirebtn";
//

const Content = () => {
  return (
    <div
      id="intro"
      className="max-w-[1000px] gap-y-10  mx-auto flex right-0 relative justify-between top-[250px] items-center"
    >
      <div>
        <div
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="500"
          className="text-4xl flex flex-col gap-y-10 name"
        >
          <h1>
            Hello, I'm{" "}
            <span className="text-blue-500 font-bold">Aakash Sharma</span>.
          </h1>
          <div>
            <h1> A passionate Frontend Web Developer</h1>
            <p> and Exploring MERN Stack</p>
          </div>
        </div>

        <div className="flex gap-10 mt-10 ">
          <div className="hire">
            <Hirebtn
              name="Contact me"
              link="https://www.linkedin.com/in/aakash25/"
            />
          </div>
          <Button
            name="Download Resume"
            link="https://drive.google.com/file/d/1xK47L3esvDtyDqp9rfyfpJ9ZWqN4xhsC/view?usp=sharing"
          />
        </div>
        <div className="mt-10 cursor-pointer">
          <Social />
        </div>
      </div>

      <div
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="500"
        className="image"
      ></div>
    </div>
  );
};

export default Content;
