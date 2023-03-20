import { Link } from "react-router-dom";
const Welcome = () => {
  return (
    <div>
      <h2>Welcome to THE place where all your favourite games are reviewed.</h2>
    <p> For all your board game reviews from traditional to newer models</p>
    <p>Pick your place to be below:</p>
    <div >
    <Link to="/users">
    <button  ><img className="loginButton"src={'https://cdn-icons-png.flaticon.com/512/5087/5087579.png'} alt="to go to users" /></button>
    </Link>
    <Link to="/reviews">
    <button  ><img className="loginButton"src={'https://beautywithinn.com/wp-content/uploads/2019/03/7e4838c4-3643-4d2d-9b33-69154b1b9b51.jpg'} alt="to go to reviews" /></button>
    </Link>
    <Link to="/categories">
    <button  ><img className="loginButton"src={'https://www.shutterstock.com/image-photo/category-word-written-on-wood-260nw-1336568840.jpg'} alt="to go to categories" /></button>
    </Link>
    </div>
  </div>)
};



 
export default Welcome;
