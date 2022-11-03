import { useState } from "react";
import * as api from "../api";

const AddComments = ({ review_id, comments, setComments }) => {
  const [input, setInput] = useState("");

  const user = "tickle122";
  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleAddComment = (event) => {
    event.preventDefault();
    const newCommentAdded = {
      author: user,
      body: input,
      votes: 0,
      created_at: api.formatDate(new Date()),
    };
    api.postComments(input, user, review_id);
    setInput("");
    setComments([...comments, newCommentAdded]);
  };

  return (
    <form onSubmit={handleAddComment}>
      <input
        id="comment_body"
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Type comment here"
      />
      <button type="submit" className="submitButton">
        Add Comment
      </button>
    </form>
  );
};

export default AddComments;
