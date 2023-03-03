import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/login.css';

import { useState } from 'react';
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom';
const Login = () => {
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let navigate = useNavigate()

    let handleSubmit = (e) => {
        e.preventDefault()
        let data = { email, password }
        console.log(data);
            axios.post('http://localhost:4000/login',data)
                .then((res) => {

                    if(res.data.message == 'Login Successfull')
                    {
                        navigate('/home')
                    }
                    else{
                        alert(res.data.message)
                    } 
                })
    }


    return (

        <div className="login">
            <div className="login-box">

                <div className="text-center">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                        style={{ width: '185px', marginTop: '-60px' }} alt="logo" />
                </div>

                <h2>Login</h2>
                <form action="" onSubmit={handleSubmit}>
                    <div className="user-box">
                        <input type="email"
                            placeholder="Enter your email"
                            name="email"
                            value={email} onChange={(e) => setEmail(e.target.value)} />
                        <label>Username</label>
                    </div>
                    <div className="user-box">
                        <input type="password"
                            placeholder="Enter your password"
                            name="password"
                            value={password} onChange={(e) => setPassword(e.target.value)} />
                        <label>Password</label>
                    </div>

                    <a href="#" className='btn w-100'>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <button className='signUpbtn btn btn-outline'>Login</button>
                    </a>

                    <div className="signUp_button mt-3">
                        <p className='text-light'>Are you a new User?<Link to='/signUp' className="btn btn-outline-success ms-4">Sign Up</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>


        // <div className="login-box w-25">

        //     <h1 className='text-center'>Login Page</h1>
        //     <div className="login_form ">
        //         <form action="" onSubmit={handleSubmit}>
        //             <div className="email">
        //                 <input type="email"
        //                     className="form-control mb-2"
        //                     placeholder="Enter your email"
        //                     name="email"
        //                     value={email} onChange={(e) => setEmail(e.target.value)} />
        //             </div>
        //             <div className="password">
        //                 <input type="password"
        //                     className="form-control mb-2"
        //                     placeholder="Enter your password"
        //                     name="password"
        //                     value={password} onChange={(e) => setPassword(e.target.value)} />

        //             </div>
        //             <div className="options mt-2 ">
        //                 <button className="btn btn-primary w-100">Login</button>
        //             </div>
        //             <div className="signUp_button">
        //                 <p className='mt-2'>Are you a new User?   <Link to='/signUp' className="btn btn-outline-primary">SignUp</Link>
        //                 </p>
        //             </div>
        //         </form>
        //     </div>





        // </div>
    );
}

export default Login;