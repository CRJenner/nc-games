import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useMemo } from "react";
import { UserContext } from "./components/UserContext";

import Header from "./components/Header";
import Users from "./components/Users";
import Reviews from "./components/Reviews";
import Navbar from "./components/Navbar";
import AllCategories from "./components/AllCategories";
import CategoryReview from "./components/CategoryReview";
import SingleReview from "./components/SingleReview";
import Welcome from "./components/Welcome"

function App() {
  const [loggedIn, setLoggedIn] = useState("Guest");
  const [reviews, setReviews] = useState([]);
  //const [loggedInUser, setser] = useState("tickle122");
  const value = useMemo(
    () => ({ loggedIn, setLoggedIn }),
    [loggedIn, setLoggedIn]
  );
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Header />
        <UserContext.Provider value={value}>
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
        </UserContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
