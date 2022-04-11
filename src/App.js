import React from "react"
import {Routes,Route,Link} from "react-router-dom";
import Home from "./components/Home"
import User from "./components/User"
import Users from "./components/Users"

function App() {




  return (
    <div className="App">
      <li>
      <Link to="/">Home</Link>
      </li>
      <li>
      <Link to="/Users">Users</Link>
      </li>
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/users" element={<Users />} />
       <Route path="/user/:id" element={<User />} />
     </Routes> 
    </div>
  );
}

export default App;
