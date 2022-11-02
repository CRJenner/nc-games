import { useEffect, useState } from "react";
import { fetchReviews } from "../api";
import Review from "./Review";

const Reviews = ({ reviews, setReviews }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    fetchReviews().then(({ reviews }) => {
      setReviews(reviews);
      setIsLoading(false);
    });
  }, [setReviews]);

  if (isLoading) return <p>...Loading...</p>;

  return (
    <div className="review-container">
      <h3>Showing all Reviews</h3>
      <div className="review-list">
        {reviews.map((review) => {
          return <Review key={review.review_id} review={review} />;
        })}
      </div>
    </div>
  );
};

export default Reviews;
