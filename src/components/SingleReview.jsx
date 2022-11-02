import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

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
    <div className="review">
      <h2>{review.title}</h2>
      <p>Comment count: {review.comment_count}</p>
      <p>Comments: {review.review_body}</p>
      <p>Posted by {review.owner} </p>
      <p>Comments: {review.votes}</p>
      <p>{review.created_at}</p>
    </div>
  );
};

export default SingleReview;
