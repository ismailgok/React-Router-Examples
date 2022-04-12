import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
function User() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data))
      .finally(setIsLoading(false));
  }, [id]);

  return (
    <div>
      <h1>User Details</h1>
      {isLoading && <div>Loading...</div>}
      <div>
        {!isLoading && JSON.stringify(user)}
        <br />
        <br />
        <Link to={`/user/${parseInt(id) + 1}`}>Next User ({user.id + 1})</Link>
      </div>
    </div>
  );
}

export default User;
