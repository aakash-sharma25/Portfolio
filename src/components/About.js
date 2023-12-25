import React from 'react'

const About = () => {
  return (
    <div className='max-w-[1000px] mx-auto mt-[400px]' id='about'>

        <div className='flex gap-20 items-center about '>
            <img 
            data-aos="fade-up" data-aos-easing="linear" data-aos-duration="200"
             src='https://img.freepik.com/free-vector/colourful-illustration-programmer-working_23-2148281410.jpg?w=2000' alt=''className='aboutimage'/>

            <div 
            data-aos="fade-right" data-aos-easing="linear" data-aos-duration="200"
            >

            <h1 className='text-xl text-blue-600 py-2'>ABOUT ME </h1>
            <h1 className='text-2xl py-2'>A dedicated Full-Stack Developer</h1>
            <p  className='text-[#808080] text-lg'>
            I'm a Passionate and Self-taught Computer Science student Graduating in 2025 aspiring to become a full-stack developer (Mern Stack). 
            Dedicated to creating innovative solutions that positively impact people's lives.
            Skilled in web development, practicing Data Structures and Algorithms.
            Committed to excellence, staying updated with the latest technologies.
             Seeking opportunities to contribute and make a lasting impact in the field of software engineering.
            </p>
            </div>

        </div>
    </div>
  )
}

export default About