import { useState, useEffect } from "react";
import * as api from "../api";

function Sorting() {
  // const [order, setOrder] = useState("");
  const [sortBy, setSortBy] = useState("created_at");
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    api.fetchReviews(sortBy).then((data) => {
      console.log(data);
      setReviews(data);
    });
  }, [sortBy]);

  const handleSortBy = (event) => {
    const { value } = event.target;
    setSortBy(value);
  };

  // const handleOrder = (event) => {
  //   event.preventDefault();
  //   const { value } = event.target;
  //   setOrder(value);
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    api.fetchReviews(sortBy).then((data) => {
      setReviews(data);
    });
  };

  return (
    <>
      <main onSubmit={handleSubmit} className="Sort_button">
        <select name="sortBy" value={sortBy} onChange={handleSortBy}>
          <option value="created_at">Date</option>

          <option value="comment_count">Comment Count</option>
          <option value="votes">Votes</option>
        </select>

        <button className="Sort button">SORT</button>
      </main>
    </>
  );
}

export default Sorting;
