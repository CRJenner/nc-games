import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Header from "./components/Header";
// import Welcome from "./components/Welcome";
// import Users from "./components/Users";
import Reviews from "./components/Reviews";
import Navbar from "./components/Navbar";
import AllCategories from "./components/AllCategories";
import CategoryReview from "./components/CategoryReview";

function App() {
  const [reviews, setReviews] = useState([]);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Reviews setReviews={setReviews} reviews={reviews} />}
          />
          <Route path="/categories" element={<AllCategories />} />
          <Route
            path="/categories/:category"
            element={
              <CategoryReview setReviews={setReviews} reviews={reviews} />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
