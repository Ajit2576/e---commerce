import React from 'react'
import { RiLock2Line } from 'react-icons/ri';
import { FaRegEye } from 'react-icons/fa6';
import { FaRegEyeSlash } from 'react-icons/fa6';

const FormInput = ({showPassword, togglePasswordVisibility, handleChange, name, placeholder, value, type}) => {

  

  return (
    <div style={{ position: "relative" }}>
     <input
        type={showPassword ? 'text' : type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />

      <span style={{ position: "absolute", left: "10px", top: "18px", fontSize: "19px", color: "#525258"}}>
        <RiLock2Line />
      </span>

      <span style={{ position: "absolute", right: "20px", top: "18px", fontSize: "18px", color: "#525258"}} onClick={togglePasswordVisibility}>
        {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
      </span>
    </div>
  )
}

export default FormInput
