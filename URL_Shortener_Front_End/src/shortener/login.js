import { useState } from "react"
import { useNavigate } from "react-router-dom";
import "../stylings/login.css";
function Login(){

    const [email,setEmail]= useState();
    const [password,setPassword]=useState();
    const navigate = useNavigate();


    const login=async(event)=>{
        event.preventDefault();

        const res = await fetch(
            "https://url-shortener-backend-goh6.onrender.com/login",
            {
                method:"POST",
                body:JSON.stringify({
                    email,
                    password
                }),
                headers:{
                    "Content-Type": "application/json",
                }
            }
        );

        const data = await res.json();
        alert(data.message)
        localStorage.setItem("x-auth-token",data.token);
        navigate("/homepage")
    }
    return(
        <div className="container-lg">
            <form onSubmit={(event)=>{login(event)}} className="group">
            <h2>Login to continue...</h2>


            <div className="input-group mb-3">

           <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroup-sizing-default">
                Enter your E-mail
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />


            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroup-sizing-default">
                Enter your password
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />

            </div>
            
            <div className="centerPlace" >
              <button type="submit" className="btn btn-success">Submit</button>
              <br/>
              <br/>
              <button type="button" className="btn btn-info" onClick={()=>navigate("/")}>New to here?</button>
            </div>
            </form>            
            </div>
    )
}

export default Login;