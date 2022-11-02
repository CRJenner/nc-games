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
    <div>
      <h4>A collection of Comments</h4>
      <div>
        {comments.map((comment) => {
          return (
            <li key={comment.comment_id} className="Comment_Card">
              <div className="comment_info">
                <p>Posted by: {comment.owner}</p>
                <p>at {comment.created_at}</p>
              </div>
              <p>{comment.body}</p>
              <p>Votes: {comment.votes}</p>
            </li>
          );
        })}
      </div>
    </div>
  );
};
export default Comments;
