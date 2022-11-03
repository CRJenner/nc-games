import { useEffect, useState } from "react";
import * as api from "../api";

const CommentVotes = ({ comment }) => {
  const votes = comment.votes;
  const comment_id = comment.comment_id;

  const [voteIncrement, setVotesIncrement] = useState(0);
  const [err, setErr] = useState(null);

  useEffect(() => {
    api.patchCommentVotes().then((countVotes) => {
      setVotesIncrement(countVotes);
    });
  }, []);

  const HandleIncrement = () => {
    setVotesIncrement((currentVotes) => currentVotes + 1);
  };

  const HandleDecrement = () => {
    setVotesIncrement((currentVotes) => currentVotes - 1);
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
