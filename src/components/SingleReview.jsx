import { useParams } from "react-router-dom";
import { formatDate } from "../api";
import { useEffect, useState } from "react";

import Votes from "./Votes";
import Comments from "./Comments";

const SingleReview = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [review, setReviews] = useState([]);
  const { review_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://chloe-jenner-nc-games-be.cyclic.app/api/reviews/${review_id}`
    )
      .then((response) => response.json())
      .then((response) => {
        setReviews(response.review);
        setIsLoading(false);
      });
  }, [setReviews, review_id]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <div className="review">
        <h2>{review.title}</h2>
        <img
          src={review.review_img_url}
          alt="game review"
          className="review_img"
        />
        <p>Comment count: {review.comment_count}</p>
        <p>Comments: {review.review_body}</p>
        <p>Posted by {review.owner} </p>
        <p>{formatDate(review.created_at)}</p>
        <Votes review={review} />
      </div>
      <Comments review_id={review_id} />
    </div>
  );
};

export default SingleReview;
