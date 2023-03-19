import { useEffect, useState, } from "react";
//import { fetchUsers } from "../api";
import { Link } from "react-router-dom";

const Users = () => {
  // const initialState = "jessjelly";
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://chloe-jenner-nc-games-be.cyclic.app/api/users`)
      .then((response) => response.json())
      .then(({ users }) => {
        console.log(users)
        setUsers(users);
        setError(null);
      })
      .catch((error) => {
        setError({ error });
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (error) {
    return <p>Sorry please refresh, there is an error</p>;
  }
  if (loading) {
    return <p>...Loading ...</p>;
  }

  const handleChange = () => {
    setUsers(users)
  };

  return (
    <div className="grid-container">
      {users.map((user) => {
        return (
          <Link to="/">
            <div key={user} onClick={handleChange} className="grid-item">
              <h2>{user.username}</h2>
              <img
                src={user.avatar_url}
                alt="profile avatar"
                width="100"
                height="100"
              />
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Users;
