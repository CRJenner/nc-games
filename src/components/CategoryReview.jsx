import { useEffect } from "react";
import { useParams } from "react-router-dom";
//import { useState } from "react";
import Review from "./Review";

const CategoryReview = ({ reviews, setReviews }) => {
  const { category } = useParams();

  useEffect(() => {
    fetch(
      `https://chloe-jenner-nc-games-be.cyclic.app/api/reviews?category=${category}`
    )
      .then((response) => response.json())
      .then(({ reviews }) => {
        setReviews(reviews);
      });
  }, [setReviews, category]);

  return (
    <div className="review-container">
      ,<h3> Showing all of the reviews that are related to {category}</h3>
      <div className="review-list">
        {reviews.map((review) => {
          return <Review key={review.review_id} review={review} />;
        })}
      </div>
    </div>
  );
};
export default CategoryReview;
