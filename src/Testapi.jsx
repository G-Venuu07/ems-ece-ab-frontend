import axios from "axios"
function Api(){

      async function getMessage(){
            const response = await axios.get("http://localhost:8080")
                  .then((response)=>{
                        console.log(response.data);
                  })
                  .catch((error)=>{
                        console.log(error);
                  });
      }
      return(
            <>
                  <button onClick={getMessage}>
                        Call Backend
                  </button>
            </>
      )
}
export default Api