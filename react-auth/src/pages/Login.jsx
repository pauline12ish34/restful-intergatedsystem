import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import imag from '../../public/login.svg'
function Login() {

    const [data,setData] = useState({
        email:"",
        password:"",
    })

    const navigate = useNavigate()

    const handleChange=(e)=>{
        setData({
            ...data,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.post("http://localhost:7000/api/v1/users/login",data)
        .then(resp =>{
            alert("You are logged in")
            localStorage.setItem("token",resp.data.token)
            navigate("/authors")
        })
        .catch(err => console.error(err))
    }

  return (
    <div>


        <div className="container">
            <div className="row align-items-center m-2 h-100">
           <div className="col-md-7 ">
               <img src={imag} className="w-100" alt="lost it on the way"  />
           </div>
           <div className="col-md-5">
            <h2 className='fw-bold mb-5'>Login to continue</h2>
               <form action="post" onSubmit={handleSubmit}>
                   <input type="text" name="email" onChange={handleChange} className="p-2 w-75 rounded border h-5 mb-2" placeholder='email'/>
                   <input type="password" name="password" onChange={handleChange} className='p-2 w-75 rounded border h-5 mb-2' id="" placeholder='password' />
                   <input type="submit" value="Login"  className='d-block bg-secondary text-white mt-5 mx-5 w-50 form-control-lg' />
               </form>
           </div>

            </div>
        </div>
   </div>
  )
}

export default Login
