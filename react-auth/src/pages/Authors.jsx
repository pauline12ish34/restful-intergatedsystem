import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Authors() {

const [authors,setAuthors]=useState([]);

useEffect(()=>{

    const getAuthors=()=>{
        const token = localStorage.getItem("token")
        axios.get("http://localhost:7000/api/v1/authors",{
            headers:{
                authorization:token
            }
        })
        .then((res)=>{
            setAuthors(res.data);
        }).catch(err=>console.error(err))
    }
    
    getAuthors()
},[])

console.log(authors)

  return (
    <div>
      <table className='table table-bordered'>
        <tr>
            <th>#</th>
            <th>title</th>
            <th>name</th>
        </tr>

        {authors.map((author,index)=>(         
            <tr key={author._id}>
                <td>{index+1}</td>
                <td>{author.title}</td>
                <td>{author.author_name}</td>
            </tr>
        ))}
        
      </table>

    </div>
  )
}
