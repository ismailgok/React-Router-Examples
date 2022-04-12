import React from "react"
import {Routes,Route,Link} from "react-router-dom";
import Home from "./components/Home"
import User from "./components/User"
import Users from "./components/Users"
import Example from "./components/Examplecss";
import style from "./App.module.css"

function App() {

  return (
    <div className={style.container}>
      <div className={style.nav}>
        
      <li className={style.list}>
      <Link to="/" className={style.link}>Home</Link>
      </li>
      <li className={style.list}>
      <Link to="/Users" className={style.link}>Users</Link>
      </li>
      <li className={style.list}>
        <Link to="/example" className={style.link}>ModuleCss Example</Link>
      </li>
      
      </div>
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/users" element={<Users />} />
       <Route path="/user/:id" element={<User />} /> 
       <Route path="/example" element={<Example />} /> 
     </Routes> 
    </div>
  );
}

export default App;
