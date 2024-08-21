import React from 'react'
import Button from './Button'
import Hirebtn from './Hirebtn'

const Contact = () => {
  return (
    <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500"
    id='contact' className='max-w-[1000px] mx-auto mt-[100px] flex flex-col gap-y-20 justify-center items-center'>
        <div className='flex flex-col gap-y-10 justify-center items-center text-blue-500'>
            <h1 className='text-4xl'>Get In Touch</h1>
            <p className='contact max-w-[50%] text-lg text-center text-gray-500'>Dropping a line to say g'day, 
            ask for my resume or see if we can build something amazing together? 
            I'd love to hear from you!</p>
        </div>
        <div className='flex gap-x-10'>
            <Hirebtn  name="Conatct Me" link="https://www.linkedin.com/in/aakash25/" />
            <Button name="Download Resume" link="https://drive.google.com/file/d/13gA0b_lmvgdZ9QAr44YFlKwnVPlNlzCJ/view?usp=drive_link"/>
        </div>
    </div>
  )
}

export default Contact