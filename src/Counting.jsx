import { useState } from "react"
function Counting(){
      const [count,setCount]=useState(0);
      
      return(
            <>
                  <h1>Counting Application</h1>
                  <button onClick={()=>{setCount(count+1)}}>Inc</button>
                  <button onClick={()=>{setCount(count-1)}}>Dec</button>
                  <button onClick={()=>{setCount(0)}}>Reset</button>
                  <h2>Count:{count}</h2>
            </>
      )
}
export default Counting