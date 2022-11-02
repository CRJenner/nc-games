import { Link } from "react-router-dom";
import * as api from "../api";
import { useState } from "react";

const Review = ({ review }) => {
  const {
    //designer,
    owner,
    // review_body,
    //  review_img_url,
    title,
    //category,
    created_at,
    review_id,
    comment_count,
    votes,
  } = review;

  const [voteIncrement, setVotes] = useState(0);
  const [err, setErr] = useState(null);

  const HandleIncrement = () => {
    setVotes((currentVotes) => currentVotes + 1);
    api.patchVoteCounts(review_id, 1);
  };

  const HandleDecrement = () => {
    setVotes((currentVotes) => currentVotes - 1);
    api.patchVoteCounts(review_id, -1);
  };

  return (
    <li key={review_id} className="review-card">
      <div className="review-info">
        <h2>{title}</h2>
        <p>Comments: {comment_count}</p>
        <p>Posted by {owner} </p>
        <p>{created_at}</p>
      </div>
      <div className="vote">
        <p>Votes: {votes + voteIncrement}</p>
        <button className="vote_button" onClick={HandleIncrement}>
          +
        </button>
        <button className="vote_button" onClick={HandleDecrement}>
          -
        </button>
      </div>
      <Link to={`/reviews/${review_id}`}>
        <button className="review-button">Read this review</button>
      </Link>
    </li>
  );
};

export default Review;
