import React from 'react'
import "../App.css"
const Drawer = ({setopen}) => {
  return (
    <div className='py-5 transition-all '>
         <ul className='flex flex-col gap-10 '>
                <li  className='hover:text-blue-500'>
                    <a  href='# 'onClick={()=> setopen(false)}>Home</a>
                </li>
                <li className='hover:text-blue-500'>
                    <a  href='#about' onClick={()=> setopen(false)}>About</a>
                </li>
                <li className='hover:text-blue-500'>
                    <a  href='#project'onClick={()=> setopen(false)}>Project</a>
                </li>
                <li className='hover:text-blue-500'>
                    <a  href='#contact'onClick={()=> setopen(false)}>Contact Me</a>
                </li>
            </ul>
    </div>
  )
}

export default Drawer