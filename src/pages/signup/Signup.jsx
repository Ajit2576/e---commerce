import React, { useState } from 'react';
import './signup.css';
import { FaRegUser } from 'react-icons/fa';
import { MdMailOutline } from "react-icons/md";
import FormInput from '../../components/FormInput';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

function Signup() {
    const location = useLocation()

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        conformPassword: ''
    })

    const [showPassword, setShowPassword] = useState(false);
    const [showPassword1, setShowPassword1] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword((prevShowPassword) => !prevShowPassword);
    };
    const togglePasswordVisibility1 = () => {
      setShowPassword1((prevShowPassword) => !prevShowPassword);
    };

    //Form Validation
    const [passMatch, setPassMatch] = useState(false);
    const [emailValid, setEmailValid] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.email !== "ajit@gmail.com" && formData.password !== "test123"){
            setEmailValid(true)
            const timer = setTimeout(() => {
                setEmailValid(false)
            }, 2000)
        }
        else{
            alert("Login Successfully")
        }


        if (formData.password !== formData.conformPassword){
            setPassMatch(true)
            const timer = setTimeout(() => {
                setPassMatch(false)
            }, 2000)
        }

    }


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

  return (

    <div className='signup-main'>
      <div className="signup-main-container">
        <div className="signup-container">
            {location.pathname === "/login" ? <h1>Login now</h1>  : location.pathname === "/register" ? <h1>Register Now!</h1> : <h1>Forgot Password</h1> }
            {location.pathname === "/login" ? <p>Enter your credentials to acces your account.</p> : location.pathname === "/register" ? <p>You can signup with you social account below</p> : <p>Enter your email address to request password reset.</p>}
        </div>

            <form className='sign-form' action="#" onSubmit={handleSubmit}>
               {location.pathname === "/register" && <div style={{ position: "relative" }}>
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                />
                    <span className="inp-icon-1">
                        <FaRegUser />
                    </span> </div>}

                <div style={{ position: "relative" }}>
                    <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                />
                    <span className="mail-icon">
                        <MdMailOutline /> 
                    </span>
                    {emailValid && <p>Invalid Credentials</p>}
                </div>
                
                {
                location.pathname !== "/forgot" &&
                <FormInput 
                    showPassword={showPassword} 
                    value={formData.password} 
                    togglePasswordVisibility={togglePasswordVisibility} 
                    handleChange={handleChange} 
                    password={"password"} 
                    placeholder={"Password"}  
                    name={"password"} 
                    type={"password"}/>
                }
                {passMatch && <p>error</p>}
                
                {location.pathname === "/register" &&
                <FormInput 
                    showPassword={showPassword1} 
                    value={formData.conformPassword} 
                    togglePasswordVisibility={togglePasswordVisibility1} 
                    handleChange={handleChange} 
                    password={"conformPassword"} 
                    placeholder={"Confrom Password"} 
                    name={"conformPassword"} 
                    type={"password"}/>
                }

                {location.pathname === "/login" &&
                <div className='password-options'>
                    <p><input type='checkbox' className='largerCheckbox'></input> Remember me</p>
                    <Link to={"/forgot"}>Forgot Password?</Link>
                </div>
                }

                {location.pathname === "/login" ? <button>Sign In</button> : location.pathname === "/register" ? <button>Sign Up</button> : <button>Send Request</button>}

                {location.pathname === "/login" ? <p>Don't have an account?<Link to="/register" > Register here</Link></p> : location.pathname === "/register" ? <p>Already have an account?<Link to="/login"> Login here</Link></p> : <p>Remember your password? <Link to={"/login"}>Login</Link></p>}

            </form>
        </div>
    </div>
  )
}

export default Signup
