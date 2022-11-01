import { useEffect, useState } from "react";
import { fetchUsers } from "../api";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);
  console.log(users);
  useEffect(() => {
    fetchUsers().then((users) => {
      setUsers(users.users);
      //console.log(profile);
    });
  }, [users]);

  function handleChange() {
    setUsers(users.users);
  }

  return (
    <div className="grid-container">
      {users.map((user) => {
        return (
          <Link to="/home">
            <div onClick={handleChange} className="grid-item">
              <h2>{user.username}</h2>
              <img
                src={user.avatar_url}
                alt="profile avatar"
                classname="profile_avatar"
                width="100"
                height="100"
              />
            </div>
          </Link>
        );
      })}
    </div>
  );

  //  render each user
};

export default Users;
