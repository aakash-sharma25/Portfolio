import React from "react";

export default function Experience() {
  return (
    <div className="max-w-[1000px] mx-auto my-20 ">
      <div className=" flex flex-col items-center justify-center ">
        <h1 className="text-4xl text-blue-500">Experience</h1>
        <div className=" flex gap-5 my-10">
          <div className=" border-l-2 h-[450px] border-s-black"></div>
          <div className="w-[300px] h-[400px] flex flex-col gap-5">
            <h3 className=" text-blue-600">- August 2023</h3>
            <div className=" w-[100%] h-[100%] flex flex-col gap-3 p-2 flex-1 ">
              <p className="text-xl ">SDE INTERN (<a className=" text-blue-500 underline" href="https://ioxpert.com/">IOXPERT</a>) - <span className=" text-sm italic">Internsihip</span> </p>
              <p className="text-sm">
                - 🖥️ Developed expertise in frontend frameworks such as React.js
                and Next.js while working on various projects.{" "}
              </p>
              <p className="text-sm">
                - ⚡ Converted an existing full-stack Angular project into a
                Next.js project, resulting in improved performance and enhanced
                user experience.
              </p>
              <p className="text-sm">
                - 🌟 Contributed to the creation and implementation of key
                functionalities for multiple projects.
              </p>
              <p className="text-sm">
                - 🏆 Received positive feedback and recognition from the team
                for consistently meeting project goals and deadlines.
              </p>
            </div>
            <h3 className=" text-blue-600">- On Going</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
