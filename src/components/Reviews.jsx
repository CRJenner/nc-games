import { useEffect, useState } from "react";
import { fetchReviews } from "../api";
import Review from "./Review";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
<<<<<<< HEAD
    fetchReviews().then(({ reviews }) => {
      setReviews(reviews);
=======
    fetchReviews().then((reviews) => {
      setReviews(reviews.reviews);
>>>>>>> f1b6a6cbc3f0f11df5e1da55373ea4836b1a9aad
      setIsLoading(false);
    });
  }, [setReviews]);

  if (isLoading) return <p>...Loading...</p>;

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
