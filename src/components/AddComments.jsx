import { useState } from "react";
import * as api from "../api";

const AddComments = ({ review_id, comments, setComments }) => {
  const [input, setInput] = useState("");

  const user = "tickle122";

  const handleAddComment = (event) => {
    event.preventDefault();
    event.currentTarget.disabled = true;
    console.log("button clicked");

    const newCommentAdded = {
      author: user,
      body: input,
      votes: 0,
      created_at: api.formatDate(new Date()),
    };
    api.postComments(input, user, review_id);
    setInput("");
    setComments((currentComments) => {
      return [newCommentAdded, ...currentComments];
    });
  };

  return (
    <form onSubmit={handleAddComment}>
      <input
        id="comment_body"
        type="text"
        value={input}
        onChange={(event) => setInput(event.currentTarget.value)}
        placeholder="Type comment here"
      />
      <button disabled={!input} type="submit" className="submitButton">
        Add Comment
      </button>
    </form>
  );
};

export default AddComments;
