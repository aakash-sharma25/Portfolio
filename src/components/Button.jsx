import React from 'react'
import "../App.css"
import { FiDownload } from "react-icons/fi";

const Button = (props) => {
  console.log(props.link);
  return ( <a href={props.link} target="_blank" rel="noopener noreferrer">
    <button id='button' className='transition ease-in-out delay-150 p-3 rounded-lg hover:bg-blue-500 hover:text-white shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]'>
       {props.name} <FiDownload/>
    </button></a>
  )
}

export default Button