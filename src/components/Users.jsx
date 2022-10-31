import { useEffect, useState } from "react";
import { fetchUsers } from "../api";
import Profile from "./Profile";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchUsers().then(
      (usersFromApi) => {
        usersFromApi.users.map((user) => {
          return setUsers(user);
          //console.log(profile);
        });
      },
      [users]
    );
  });
  return (
    <div className="profile_avatar">
      <h2>{users.username}</h2>
      <img src={users.avatar_url} alt="Profile avatar" />
    </div>
  );

  //  render each user
};

export default Users;
