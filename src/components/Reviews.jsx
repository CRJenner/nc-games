import { useEffect, useState } from "react";
import * as api from "../api";
import Review from "./Review";
import ScrollToTop from "./ScrollToTop";

const Reviews = ({ reviews, setReviews }) => {
  const [sortBy, setSortBy] = useState("created_at");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    api.fetchReviews(sortBy).then((reviews) => {
      setReviews(reviews);
      setIsLoading(false);
    });
  }, [sortBy, setReviews]);
  const handleSortBy = (event) => {
    const { value } = event.target;
    setSortBy(value);
  };

  if (isLoading) return <p>...Loading...</p>;

  return (
    <div className="review-container">
      <h3>Showing all Reviews</h3>
      <p>Select an option to sort by:</p>
      <select name="sortBy" value={sortBy} onChange={handleSortBy}>
        <option value="created_at">Date</option>
        {/* <option value="comment_count">Comment Count</option> */}
        <option value="votes">Votes</option>
      </select>
      <div className="review-list">
        {reviews.map((review) => {
          return <Review key={review.review_id} review={review} />;
        })}
      </div>
      <ScrollToTop/>
    </div>
  );
};

export default Reviews;
