
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./shortener/Homepage";
import Login from "./shortener/login";
import Signup from "./shortener/signup";


function App() {

 return(
  
  <Routes>
    
    <Route path="/" element={<Signup/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/homepage" element={<Homepage/>}/>
   

  </Routes>
 )
}

export default App;
