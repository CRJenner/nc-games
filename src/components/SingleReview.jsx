import { useParams } from "react-router-dom";
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
      `https://chloes-project-nc-games.herokuapp.com/api/reviews/${review_id}`
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setReviews(response.review);
        setIsLoading(false);
      });
  }, [setReviews]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <div className="review">
        <h2>{review.title}</h2>
        <img
          src={review.review_img_url}
          alt="image of review"
          className="review_img"
        />
        <p>Comment count: {review.comment_count}</p>
        <p>Comments: {review.review_body}</p>
        <p>Posted by {review.owner} </p>
        <p>{review.created_at}</p>
        <Votes review={review} />
      </div>
      <Comments review_id={review_id} />
    </div>
  );
};

export default SingleReview;
