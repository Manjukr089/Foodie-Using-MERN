import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from "react";
import axios from "axios"
import { Link, useNavigate } from "react-router-dom";
const SignUp = () => {

    let [name, setName] = useState("")
    let [mobile_Number, setMobile_Number] = useState("")
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let [confirm_password, setConfirm_password] = useState("")
    let navigate = useNavigate()

    let signUp = (e) => {

        e.preventDefault()
        //! Data to be posted
        let data = { name, mobile_Number, email, password, confirm_password }
        //! To check password & confirm password is same or not
        if (name && email && (password === confirm_password)) {
            axios.post('http://localhost:4000/signUp', data)
                .then((res) => {
                    alert(res.data.message)
                    navigate('/')
                    console.log(data);
                })
        }
        else {
            alert("Invalid credentials")
        }
        // console.log(data.current.value);
    }
    return (

         <div className="login-box ">
            
            <h2>Sign Up Page</h2>
            <p className='text-light'>Are you a new User?</p>
            <form action="" onSubmit={signUp}>
                <div className=" user-box">
                    <input type="name" 
                    placeholder="Enter your name"
                    name="name"
                    onChange={(e) => setName(e.target.value)} />
                    
                </div>
                <div className="user-box">
                    <input type="number"
                    placeholder="Enter your Mobile Number"
                    name="mobile_Number"
                     onChange={(e) => setMobile_Number(e.target.value)}  />
                </div>
                <div className="user-box">
                <input type="email" 
                    placeholder="Enter your email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}  />
                </div>
                <div className="user-box">
                <input type="password" 
                    placeholder="Enter the password"
                    name="password" 
                    onChange={(e) => setPassword(e.target.value)}  />
                </div>
                <div className="user-box">
                <input type="password" 
                    placeholder="Confirm the password"
                    name="confirm_password"
                    onChange={(e) => setConfirm_password(e.target.value)}  />
                </div>
                <div>
                <a href="#" className='btn w-100'>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    
                   <button className='signUpbtn btn btn-outline'>Sign Up</button>
                </a>
                </div>
                
                <div className="login_button mt-3">
                    <p className='text-light font-family-serif'>Already a User? <Link to="/" className="btn btn-outline-success ms-5">Login</Link></p>
                </div>
            </form>
        </div> 

        //         <div className="signUp container w-25">

        //             <h1 className='fw-bold'>Sign Up Page</h1>
        //             <p>Are you a new User?</p>
        //             <form action="" onSubmit={signUp}>
        //                 <div className=" form-group">
        //                     <input type="name" 
        //                     className="form-control mb-2"
        //                     placeholder="Enter your name"
        //                     name="name"
        //                     onChange={(e) => setName(e.target.value)} />

        //                 </div>
        //                 <div className="mobile_Number form-group">
        //                     <input type="number"
        //                     className="form-control mb-2"
        //                     placeholder="Enter your Mobile Number"
        //                     name="mobile_Number"
        //                      onChange={(e) => setMobile_Number(e.target.value)}  />
        //                 </div>
        //                 <div className="email form-group">
        //                 <input type="email" 
        //                     className="form-control mb-2"
        //                     placeholder="Enter your email"
        //                     name="email"
        //                     onChange={(e) => setEmail(e.target.value)}  />
        //                 </div>
        //                 <div className="password form-group">
        //                 <input type="password" 
        //                     className="form-control mb-2"
        //                     placeholder="Enter the password"
        //                     name="password" 
        //                     onChange={(e) => setPassword(e.target.value)}  />
        //                 </div>
        //                 <div className="confirm_password form-group">
        //                 <input type="password" 
        //                     className="form-control mb-2"
        //                     placeholder="Confirm your password"
        //                     name="confirm_password"
        //                     onChange={(e) => setConfirm_password(e.target.value)}  />
        //                 </div>
        //                 <div className="signUp_button mt-2 ">
        //                     <button className="btn btn-primary w-100">Sign Up</button>
        //                 </div>
        //                 <div className="login_button ">
        //                     <p className='mt-2'>Already a User? <Link to="/" className="btn btn-outline-primary">Login</Link>
        // </p>
        //                 </div>
        //             </form>
        //         </div>
    );
}

export default SignUp;