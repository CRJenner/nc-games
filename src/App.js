import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { useContext, useState } from "react";

import Header from "./components/Header";
import Users from "./components/Users";
import Reviews from "./components/Reviews";
import Navbar from "./components/Navbar";
import AllCategories from "./components/AllCategories";
import CategoryReview from "./components/CategoryReview";
import SingleReview from "./components/SingleReview";
import Welcome from "./components/Welcome"
import { UserContext } from "./contexts/Users";

function App() {
  const {user} = useContext(UserContext)
  const [reviews, setReviews] = useState([]);
  
  return (
      <div className="App">
        <Navbar />
        <Link to='/users'><h2>logged in as: {user.username}</h2></Link>
        <Header />
          <Routes>
            <Route
              path="/"
              element={<Welcome/>}
            />
            <Route
              path="/reviews"
              element={<Reviews setReviews={setReviews} reviews={reviews} />}
            />
            <Route path="/users" element={<Users />}></Route>
            <Route path="/categories" element={<AllCategories />} />
            <Route
              path="/categories/:category"
              element={
                <CategoryReview setReviews={setReviews} reviews={reviews} />
              }
            />
            <Route path="/reviews/:review_id" element={<SingleReview />} />
          </Routes>
      </div>
  );
}

export default App;
