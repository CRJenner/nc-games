import { useEffect } from "react";
import { useState } from "react";
import * as api from "../api";
import Review from "./Review";

function OrderVotes() {
  const [isLoading, setIsLoading] = useState(true);

  const [highVote, setHighVote] = useState([]);

  const sort = "votes";
  const order = "DESC";

  useEffect(() => {
    setIsLoading(true);
    api.fetchReviews(sort, order).then(({ data }) => {
      console.log(data);
      console.log(data.reviews);
      highVote(data.reviews);
      setIsLoading(false);
    });
  }, [setHighVote]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <h3 className="collection-title">Highest Voted:</h3>
      <div className="collection-container">
        {highVote.slice(0, 2).map((review) => {
          return <Review key={review.review_id} review={review} />;
        })}
      </div>
    </>
  );
}

export default OrderVotes;
