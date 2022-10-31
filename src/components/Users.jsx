import { useEffect, useState } from "react";
import { fetchUsers } from "../api";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers().then((usersFromApi) => {
      usersFromApi.users.map((user) => {
        const name = user.username;
        const image = user.avatar_url;
        const details = { name, image };
        console.log(details);
        return { name: "user.username", image: "user.avatar_url" };
      });
      setUsers(users);
    });
  }, [users]);

  return <div> users={users}</div>;

  //  render each user
};

export default Users;
