const Review = ({ review }) => {
  const {
    //designer,
    owner,
    // review_body,
    //review_img_url,
    title,
    //category,
    created_at,
    review_id,
    comment_count,
  } = review;

  return (
    <li key={review_id} className="review-card">
      <div className="review-info">
        <h2>{title}</h2>
        <p>Comments: {comment_count}</p>
        <p>Posted by {owner} </p>
        <p>{created_at}</p>
      </div>
    </li>
  );
};

export default Review;
