import axios from 'axios'
import {useEffect,useState} from 'react'
import {Link} from "react-router-dom"


function Users() {
    const [isLoading, setIsLoading] = useState(true)
    const [users,setUsers] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(res => res.json())
        .then(data => setUsers(data))
        .finally(setIsLoading(false))
    },[])



  return (
    <div>
        <h1>Users</h1>
        {
          isLoading && <div>Loading...</div>
        }
        <ul>
          {
              users.map((user) => (
                <li key={user.id}><Link to={`/user/${user.id}`}>{user.name}</Link></li>
              ))
          }
        </ul>
    </div>
  )
}

export default Users