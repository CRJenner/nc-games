import { useEffect, useState } from "react";
import { fetchReviews } from "../api";
import Review from "./Review";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviews().then((reviews) => {
      console.log(reviews);
      return setReviews(reviews.reviews);
    });
  }, [setReviews]);

  return (
    <div className="review-container">
      <h3>Showing all Reviews</h3>
      <div className="review-list">
        {console.log(reviews)}
        {reviews.map((review) => {
          return <Review key={review.review_id} review={review} />;
        })}
      </div>
    </div>
  );
};

export default Reviews;
