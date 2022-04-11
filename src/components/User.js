import {useEffect,useState} from 'react'
import {useParams, Link} from "react-router-dom"
import axios from "axios"
function User() {
    const {id } = useParams();
    const [Loading, setLoading] = useState(true)
    const [user,setUser] = useState({})

    // useEffect(() => {
    //     fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    //     .then(res => setUser(res.data.json()))
    //     .finally(setLoading(false))

    // },[id])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => res.json())
        .then(data => setUser(data))
        .finally(setLoading(false))

    },[id])



    return(
        <div>
            <h1>User Details</h1>
            {Loading && <div>Loading...</div>}
        <div>
          <code> {!Loading &&  JSON.stringify(user)}</code>
          <br />
          <br />
          <Link to={`/user/${ parseInt(id) + 1}`}>Next User ({user.id + 1})</Link>
        </div>
        </div>
    );
}

export default User