import React ,{useState}from 'react'
import Style from './home.module.css'
import axios from 'axios';
const CreateUsers = () => {
  let[name,setName]=useState("");
  let[salary,setSalary]=useState("");
  let[company,setCompany]=useState("");
  let handel=(e)=>{
    //e.preventDefault()
    console.log(name,salary,company);
    let payload={name,salary,company}
    axios.post("http://localhost:3000/data",payload)
    .then(()=>{
      console.log("Data has been added");
    })
    .catch(()=>{
      console.log("something went wrong");
    })
  }
  return (
    <div id={Style.Div}>
        <form action="" id={Style.form} >
            <label htmlFor="Name">Employee Name:</label>
            <input type="text" value={name} onChange={e=>{setName(e.target.value)}} /><br />
            <label htmlFor="Salary">Employee Salary:</label>
            <input type="text" value={salary} onChange={e=>{setSalary(e.target.value)}} /><br/>
            <label htmlFor="Company">Company Name:</label>
            <input type="text" value={company} onChange={e=>{setCompany(e.target.value)}}/><br />
            <button onClick={handel}>submit</button>
        </form>  
    </div>
  )
}
export default CreateUsers