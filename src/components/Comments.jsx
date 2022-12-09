import * as api from "../api";
import { formatDate } from "../api";
import { useState, useEffect } from "react";
import AddComments from "./AddComments";
import CommentVotes from "./CommentVotes";
import DeleteComment from "./DeleteComment";

const Comments = ({ review_id }) => {
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api
      .getComments(review_id)
      .then((comment) => {
        setIsLoading(true);
        setComments(comment.comments);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  }, [comments, review_id]);

  if (isLoading) return <p>Loading...</p>;
  if (error)
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

                <p>Posted by: {comment.author}</p>

                <p>at {formatDate(comment.created_at)}</p>
              </div>
              <CommentVotes comment={comment} />
              <DeleteComment
                id={comment.comment_id}
                review_id={review_id}
                comments={comments}
              />
            </li>
          );
        })}
      </div>
    </>
  );
};
export default Comments;
