import { useState } from "react"
import { useNavigate } from "react-router-dom";
import "../stylings/login.css";

const Signup =(signup)=>{
    const [name,setName]= useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("")
    const navigate = useNavigate();

    const signUp = async(event)=>{
        event.preventDefault();
      try {
        const res = await fetch(
          "https://url-shortener-backend-goh6.onrender.com/signup",
          {
            method:"POST",
            body:JSON.stringify({
              name,
              email,
              password
            }
            ),
            headers: {
              "Content-Type": "application/json",
            }
          }
        );

        const data = await res.json();
        localStorage.setItem("x-auth-token",data.Authtoken);
        navigate("/homepage")

      } catch (error) {
        console.log(error)
      }
    }
    return(
        <div className="container-lg">
            <form onSubmit={(event)=>signUp(event)} className="group" >
            <h2> Signup to continue...</h2>
            <div className="input-group mb-3 row">
              
            
            <div className="input-group-prepend col-md-3">
              <span className="input-group-text" id="inputGroup-sizing-default">
                    Enter your name
              </span>
            </div>
            <div className="col-md-9">
            <input 
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            </div>
            <br/>
            <br/>

           <div className="input-group-prepend col-md-3">
              <span className="input-group-text" id="inputGroup-sizing-default">
                Enter a valid E-mail
              </span>
            </div>
            <div className="col-md-9">
            <input
              type="email"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            </div>
            <br/>
            <br/>
            <div className="input-group-prepend col-md-3">
              <span className="input-group-text" id="inputGroup-sizing-default">
                create a password
              </span>
            </div>
            <div className="col-md-9">
            <input
              type="password"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            </div>
            </div>
            <div className="centerPlace">
              <button type="submit" className="btn btn-success">Submit</button>
              <button type="button" className="btn btn-info" onClick={()=>navigate("/login")}>Already Have a account?</button>
            </div>
            

            </form>

            <br/>
            
        </div>
        
    )
}
export default Signup