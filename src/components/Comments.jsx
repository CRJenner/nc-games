import * as api from "../api";
import { useState, useEffect } from "react";

const Comments = ({ review_id }) => {
  const [comments, setComments] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    api.getComments(review_id).then((comment) => {
      console.log(comment);
      setComments(comment.comments);
      setIsLoading(false);
    });
  }, [setComments]);

  if (isLoading) return <p>...Loading...</p>;

  return (
    <div className="comment_list">
      <h4>A collection of Comments</h4>
      {comments.map((comment) => {
        return (
          <li key={comment.comment_id} className="Comment_Card">
            <div className="comment_info">
              <p>Comment posted: {comment.body}</p>
              <div>
                <p>Posted by: {comment.author}</p>
              </div>
              <p>at {comment.created_at}</p>
            </div>
            <p>Votes: {comment.votes}</p>
          </li>
        );
      })}
    </div>
  );
};
export default Comments;
