import { useState } from "react";
import * as api from "../api";

const CommentVotes = ({ comment }) => {
  const votes = comment.votes;
  const comment_id = comment.comment_id;

  const [voteIncrement, setVotes] = useState(0);

  const HandleIncrement = () => {
    setVotes((currentVotes) => currentVotes + 1);
    api.patchCommentVotes(comment_id, 1);
  };

  const HandleDecrement = () => {
    setVotes((currentVotes) => currentVotes - 1);
    api.patchCommentVotes(comment_id, -1);
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
};

export default CommentVotes;
