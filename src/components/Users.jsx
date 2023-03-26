import { useEffect, useState, } from "react";
//import { fetchUsers } from "../api";
import { fetchUsers } from "../api";
import UserCard from "./UserCard";

const Users = () => {
  // const initialState = "jessjelly";
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   setLoading(true)
   fetchUsers().then((apiUsers)=>{
    console.log(apiUsers )
    setUsers(apiUsers)
    setLoading(false)
   })
  }, [])

  return  loading ? (
    <h1> loading...</h1>
    ):(
      <div><h2>Select your avatar</h2>
    <div className="grid-container">
      {users.map((user) => {
                   return  <UserCard key = {user.username} user={user} />

      })}
    </div>
    </div>
  );
};

export default Users;
