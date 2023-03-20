import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import Style from './home.module.css'
import axios from 'axios'


const Edit = () => {
  let[name,setName]=useState("");
  let[salary,setSalary]=useState("");
  let[company,setCompany]=useState("");
  let {index}=useParams();
  let navigate=useNavigate()
  console.log({index});

  useEffect(()=>{
    axios.get(`http://localhost:3000/user/${index}`)
    .then((response)=>{
      console.log(response.data);
      console.log(response.data.name);
      setName(response.data.name)
      setSalary(response.data.salary)
      setCompany(response.data.company)
    })
  },[index])
  let formhandel=(e)=>{
    e.preventDefault()
    let payload={name,salary,company}
    axios.put(`http://localhost:3000/user/${index}`,payload)
    .then(()=>{
      console.log("DATA HAS BEEN UPDATED");
      navigate("/")
    })

  }

  return (
    <div>
      <h1>Edit</h1>
      <form action=''onSubmit={formhandel}>
            <label htmlFor="Name">Employee Name:</label>
            <input type="text" value={name} onChange={e=>{setName(e.target.value)}} /><br />
            <br /><br />
            <label htmlFor="Salary">Employee Salary:</label>
            <input type="text" value={salary} onChange={e=>{setSalary(e.target.value)}} /><br />
            <br /><br />
            <label htmlFor="Company">Company Name:</label>
            <input type="text" value={company} onChange={e=>{setCompany(e.target.value)}}/><br />
            <br /><br />
            <button type='submit' >submit</button>

        </form>
    </div>
    
  )
}

export default Edit