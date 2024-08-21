import React from "react";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { TbBrandCpp } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import Projects from "./Projects";

import blog from "./Elements/Images/blog-app.png";
import note from "./Elements/Images/Note-keep.png";
import gadget from "./Elements/Images/gadget.png";
// import gym from "./Elements/Images/gym.png";
// import gif from "./Elements/Images/gif.png";
import car from "./Elements/Images/car.png";

const Skills = () => {
  return (
    <div id="skills" className="mx-auto">
      <div
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="500"
        className="flex flex-wrap gap-10  my-[100px] justify-center items-center"
      >
        <div className="text-3xl">Skills</div>
        <div className="text-3xl "> | </div>
        <div className="flex flex-wrap skill text-3xl gap-10 p-2 justify-center items-center text-slate-600 ">
          <FaReact className=" transition ease-in-out delay-75 hover:scale-150  hover:text-blue-600 hover:cursor-pointer  " />
          <IoLogoJavascript className=" transition ease-in-out delay-75 hover:scale-150  hover:text-blue-600 hover:cursor-pointer  " />
          <FaNodeJs className=" transition ease-in-out delay-75 hover:scale-150  hover:text-blue-600 hover:cursor-pointer " />
          <SiExpress className=" transition ease-in-out delay-75 hover:scale-150  hover:text-blue-600 hover:cursor-pointer " />
          <DiMongodb className=" transition ease-in-out delay-75 hover:scale-150  hover:text-blue-600 hover:cursor-pointer " />
          <TbBrandCpp className=" transition ease-in-out delay-75 hover:scale-150  hover:text-blue-600 hover:cursor-pointer " />
          <FaJava className=" transition ease-in-out delay-75 hover:scale-150  hover:text-blue-600 hover:cursor-pointer " />
          <FaHtml5 className=" transition ease-in-out delay-75 hover:scale-150  hover:text-blue-600 hover:cursor-pointer " />
          <IoLogoCss3 className=" transition ease-in-out delay-75 hover:scale-150  hover:text-blue-600 hover:cursor-pointer " />
          <SiTailwindcss className=" transition ease-in-out delay-75 hover:scale-150  hover:text-blue-600 hover:cursor-pointer " />
        </div>
      </div>
      <div className="font-bold text-blue-500 text-3xl text-center my-10">
        <h1>PROJECTS</h1>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-[50px] w-[80%] mx-auto ">
        <Projects
          image={car}
          title="Rent It"
          decprition="The MERN Stack Car Rental Website is a user-friendly web application designed for seamless car rentals. Users can register, login, browse available cars, make reservations, and securely complete payments. The platform ensures security with protected routes for users and admins. Administrators have tools to add new cars, update details, and manage reservations, ensuring efficient fleet management. Featuring a responsive design, the website provides an excellent experience across all devices. This application offers a streamlined solution for car rentals, catering to the needs of both users and administrators effectively. "
          Githublink="https://github.com/aakash-sharma25/Rent_Car"
          Projectlink="https://rent-car-c2nq.onrender.com/"
        />

        <Projects
          image={gadget}
          title="Gadget Galaxy"
          decprition="The MERN Stack E-commerce Project is a dynamic web application designed for users to explore and purchase a variety of products. The application offers secure registration and login, with pages protected by authentication to ensure a personalized shopping experience. Admins have their own protected routes, allowing them to manage the store efficiently by adding, updating, and deleting products. They can also monitor and update the status of products in real-time. With a responsive design and user-friendly interface, this e-commerce platform provides seamless browsing."
          Githublink="https://github.com/aakash-sharma25/Gadget-Galaxy"
          Projectlink="https://gadget-galaxy-fnh1.onrender.com/"
        />

        <Projects
          image={blog}
          title="Blog App"
          decprition="The MERN Stack Blog Project is a web application that allows users to register, login, and post their own blogs. Users can create, edit, and delete their blog posts, as well as view and interact with blogs posted by other users. The application provides a user-friendly interface and responsive design, ensuring seamless access from various devices. With this project, users can easily share their thoughts and engage with a community of bloggers. "
          Githublink="https://github.com/aakash-sharma25/Blog-App"
          Projectlink="https://tech-diaries.onrender.com/all-blogs"
        />

        {/* <Projects
          image={news}
          title="News App"
          decprition="The React.js-powered news website fetches news from an API and displays them in different categories. Users can explore top news stories across various topics like politics, sports, entertainment, and technology. The website includes a search function for finding specific articles, pagination for easy navigation, and a responsive design for optimal viewing on different devices. Overall, it offers a user-friendly and dynamic platform for staying updated with the latest news."
          Githublink="https://github.com/aakash-sharma25/News-App"
          Projectlink="https://www.linkedin.com/posts/aakash25_frontenddeveloper-webdeveloper-webdevelopment-activity-7084109736635236353-KJU8?utm_source=share&utm_medium=member_desktop"
        /> */}

        {/* <Projects
          image={weather}
          title="Weather App"
          decprition="he React.js-powered weather website fetches weather data from an API and displays it based on the user's input city. It provides real-time updates on temperature, humidity, wind speed, atmospheric pressure, and weather conditions for the specified location. The website features a user-friendly interface with a search bar for easy navigation. Overall, it provides users with instant access to accurate weather information in a concise and visually appealing format."
          Githublink=" "

          Projectlink="https://weatherwatch-app.netlify.app/"

        /> */}

        {/* <Projects
          image={gym}
          title="Fitness Spot"
          decprition="GifHub is a ReactJS-based website that offers a seamless gif experience. It features a random gif generator that surprises users with a continuous stream of animated gifs from various categories. Additionally, users can enter specific tags or keywords to generate personalized gifs based on their input. GifHub's intuitive interface and minimalist design make it easy to navigate and share favorite gifs on social media. Get ready to explore the exciting world of gifs with GifHub!."
          Githublink="https://github.com/aakash-sharma25/GYM-Website"
          Projectlink="https://the-fitness-spot.netlify.app//"
        /> */}
        <Projects
          image={note}
          title="Note App"
          decprition="The note-keeping website is a simple and efficient tool built with HTML, CSS, and JavaScript. It utilizes the local storage feature of web browsers to securely store notes directly on the user's device. Users can create and save their notes, which will persist even if they refresh or close the browser. The website also includes features like archiving notes, allowing users to organize their active and archived notes separately. Additionally, users have the option to delete any unwanted notes. With its clean and responsive design, this website offers a user-friendly interface for managing notes effectively."
          Githublink="https://github.com/aakash-sharma25/Note-keep"
          Projectlink="https://aakash-sharma25.github.io/Note-keep/"
        />
        {/* <Projects
          image={gif}
          title="Random GIF"
          decprition="GifHub is a ReactJS-based website that offers a seamless gif experience. It features a random gif generator that surprises users with a continuous stream of animated gifs from various categories. Additionally, users can enter specific tags or keywords to generate personalized gifs based on their input. GifHub's intuitive interface and minimalist design make it easy to navigate and share favorite gifs on social media. Get ready to explore the exciting world of gifs with GifHub!."
          Githublink=" "
          Projectlink="https://gif-loader.netlify.app/"
        /> */}
      </div>
      <div className="flex gap-4 items-center justify-center my-10">
        <p>
          For more project visit
          {/* <Button name="Github" link="https://github.com/aakash-sharma25"/> */}
        </p>{" "}
        <a
          href="https://github.com/aakash-sharma25"
          // className="p-2 m-2 bg-blue-500 border-1 rounded-md text-white hover:bg-blue-600"
        >
          <button
            id="button"
            className="transition ease-in-out delay-150 p-3 rounded-lg hover:bg-blue-500 hover:text-white shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]"
          >
            Github <FaGithub />{" "}
          </button>
        </a>
      </div>
    </div>
  );
};

export default Skills;
