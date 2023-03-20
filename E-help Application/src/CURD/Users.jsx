import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Style from './home.module.css'

const Users = () => {
  let [data,setData]=useState([])


  useEffect(()=>{
  axios.get("http://localhost:8004/user")
  .then(res=>{setData(res.data)
  },[data])
  })

  return (
    <div id={Style.users}>
      {data.map((x)=>{
        return(
          <div id={Style.main}>
            <p>Name:<span>{x.name}</span></p>
             <p>Salary:<span>{x.salary}</span></p>
             <p>Company:<span>{x.company}</span></p>
             <div id={Style.bt}>
             <Link to={`/edit/${x.id}`}>Edit</Link>
             <Link to={""}>Delete</Link>

             </div>
            
             {/* <button>Delete</button> */}
           </div>
        )
      })}
      </div>

             
  )
}

export default Users