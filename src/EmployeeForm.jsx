import axios from "axios";
import { useState } from "react"
function EmployeeForm(){
      const [formdata,setFormdata] = useState({
            name:"",
            dept:"",
            email:"",
            password:""
      });
      function handleChange(e){
            setFormdata({
                  ...formdata,
                  [e.target.name]:e.target.value
            });
      }
      async function hogaya(e){
            e.preventDefault();
            const response = await axios.post("http://localhost:8080",formdata).then((response)=>{
                  console.log(response.data);
            }).catch((error)=>{
                  console.log(error);
            });

            setFormdata({
                  name:"",
                  dept:"",
                  email:"",
                  password:""
            })
      }
      return(
            <>
                  <h1>Employee Registration Form</h1>
            <form onSubmit={hogaya}>
                  <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formdata.name}
                  onChange={handleChange}/>

                  <input
                  type="text"
                  name="dept"
                  placeholder="Enter your department"
                  value={formdata.dept}
                  onChange={handleChange}/>
                  
                  <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formdata.email}
                  onChange={handleChange}
                  />

                  <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={formdata.password}
                  onChange={handleChange}
                  />
                  <button type="submit">Register</button>
            </form>
            </>
      )
}
export default EmployeeForm