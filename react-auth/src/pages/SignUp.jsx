import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import imag from '../../public/register.jpeg'

function SignUp() {
    const [user,setUser] = useState({
        names:"",
        email:"",
        password:"",
        isAdmin:false
    })

    const navigate = useNavigate()

    const handleChange=(e)=>{
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(user)

        axios.post("http://localhost:7000/api/v1/users/new",user)
        .then(resp => {
            alert("User created successfully")
            navigate("/login")
        }).catch(err => console.error(err))
    }

  return (
    <div>

        <div className="container">
            <div className="row align-items-center m-2 h-100">
           <div className="col-md-6 ">
               <img src={imag} alt="lost it on the way"  />
           </div>
           <div className="col-md-6">
            <h2 className='fw-bold my-5'>Create account</h2>
               <form onSubmit={handleSubmit}>
                   <input type="text"  name='names' value={user.names} onChange={handleChange} className="p-2 w-75 rounded border h-5 mb-2" placeholder='name' required  />
                   <input type="text"  name="email" value={user.email} onChange={handleChange} className="p-2 w-75 rounded border h-5 mb-2" placeholder='email' required/>
                   <input type="password" name='password' value={user.password} onChange={handleChange} className='p-2 w-75 rounded border h-5 mb-2' id="" placeholder='password' required />
                   {/* <input type="text" className="p-2 w-75 rounded border h-5 mb-2" placeholder='role' /> */}
                   <input type="submit" value="Register"  className='d-block bg-secondary text-white mt-5 mx-5 w-50 form-control-lg' />
               </form>
           </div>

            </div>
        </div>
   </div>
  )
}

export default SignUp
