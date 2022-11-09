import * as api from "../api";

const DeleteComment = ({ id }) => {
  const removeComment = () => {
    api.removeComment(id).catch((err) => {
      console.log(err);
    });
  };
  return (
    <button className="deleteButton" onClick={removeComment}>
      Delete Comment
    </button>
  );
};

export default DeleteComment;
