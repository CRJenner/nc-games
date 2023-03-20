import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  const { slug, description } = category;
  return (
    <Link to={`/categories/${slug}`}>
      <li key={slug} className="category-card">
        <div className="category-details">
          <h4>{slug}</h4>
          <p>{description}</p>
        </div>
      </li>
    </Link>
  );
};

export default CategoryCard;
