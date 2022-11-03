import * as api from "../api";
import { formatDate } from "../api";
import { useState, useEffect } from "react";
import AddComments from "./AddComments";
import CommentVotes from "./CommentVotes";

const Comments = ({ review_id }) => {
  const [comments, setComments] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    api
      .getComments(review_id)
      .then((comment) => {
        setIsLoading(true);
        setComments(comment.comments);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err.response) {
          setErr("status:" + err.response.status);
        } else if (err.request) {
          setErr(err.request);
        } else {
          setErr("Error", err.message);
        }
      });
  }, [comments]);

  if (isLoading) return <p>Loading...</p>;
  if (comments.length === 0) {
    return (
      <>
        <p>Be the first to comment!</p>
        <AddComments
          review_id={review_id}
          comments={comments}
          setComments={setComments}
        />
      </>
    );
  }

  return (
    <>
      <AddComments
        review_id={review_id}
        comments={comments}
        setComments={setComments}
      />
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
                <p>at {formatDate(comment.created_at)}</p>
              </div>
              <CommentVotes comment={comment} />
            </li>
          );
        })}
      </div>
    </>
  );
};
export default Comments;
