import React from "react"
import {Routes,Route,Link} from "react-router-dom";
import Home from "./components/Home"
import User from "./components/User"
import Users from "./components/Users"
import Example from "./components/Examplecss";

function App() {

  return (
    <div className="App">
      <li>
      <Link to="/">Home</Link>
      </li>
      <li>
      <Link to="/Users">Users</Link>
      </li>
      <li>
        <Link to="/example">ModuleCss Example</Link>
      </li>
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
