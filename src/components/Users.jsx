import { useEffect, useState } from "react";
import { fetchUsers } from "../api";
import Profile from "./Profile";

const Users = () => {
  const [users, setUsers] = useState([]);
  console.log(users);
  useEffect(() => {
    fetchUsers().then((users) => {
      setUsers(users.users);
      //console.log(profile);
    });
  }, [users]);
  return (
    <div className="profile_avatar">
      {users.map((user) => {
        return (
          <div>
            <h2>{user.username}</h2>
            <img
              src={user.avatar_url}
              alt="profile avatar"
              classname="profile_avatar"
            />
          </div>
        );
      })}
    </div>
  );

  //  render each user
};

export default Users;
