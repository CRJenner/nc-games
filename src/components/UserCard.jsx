import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/Users";

const UserCard = ({user}) => {
    const {user:loggedInUser, setUser} = useContext(UserContext)
console.log(loggedInUser)
    return (
        <Link to="/">
          <div key={user}  className="grid-item" onClick={()=> setUser(user)}>
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
}

export default UserCard