import { useState } from "react";
import * as api from "../api";

function Votes({ review }) {
  const { review_id, votes } = review;

  const [voteIncrement, setVotes] = useState(0);

  const HandleIncrement = () => {
    setVotes((currentVotes) => currentVotes + 1);
    api.patchVoteCounts(review_id, 1);
  };
  const HandleDecrement = () => {
    setVotes((currentVotes) => currentVotes - 1);
    api.patchVoteCounts(review_id, -1);
  };

  return (
    <div className="voting">
      <p>Votes: {votes + voteIncrement}</p>
      <button className="vote_button" onClick={HandleIncrement}>
        +
      </button>
      <button className="vote_button" onClick={HandleDecrement}>
        -
      </button>
    </div>
  );
}

export default Votes;
