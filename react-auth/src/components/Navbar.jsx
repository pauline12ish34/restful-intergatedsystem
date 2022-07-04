import React from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom";
import './Navbar.css'


function Navbar() {
  return (
    <div className='bg-secondary h-incr  w-100'>
      <div className="d-flex flex-row justify-content-between m-5">
        <div>
          <Link to={"/"} className='text-white text-decoration-none' >{" "} Home </Link>
        </div>
        <div>
          <Link to={"/about"} className='text-white text-decoration-none'> {" "} About {" "}
          </Link>
        </div>
        <div>
          {" "}
          <Link to={"/contact"} className='text-white text-decoration-none'>
            {" "}
            contact
          </Link>
        </div>


        <div className='ml-4'>
          <div className='d-inline border border-white rounded m-3 '>
            {" "}
            <Link to={"/signUp"} className='text-white text-decoration-none'>
              {" "}
              sign up
            </Link>
          </div>
          <div className='d-inline border border-white rounded'>
            {" "}
            <Link to={"/login"} className='text-white text-decoration-none'>
              {" "}
              Login
            </Link>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Navbar
