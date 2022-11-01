import { useEffect } from "react";
import { useState } from "react";
import Category from "./Category";

function AllCategories() {
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://chloes-project-nc-games.herokuapp.com/api/categories`)
      .then((response) => response.json())
      .then(({ category }) => {
        setCategories(category);
        setIsLoading(false);
      });
  }, [setCategories]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="category-container">
      <div className="category-list">
        {categories.map((category) => {
          console.log(category);
          return <Category key={category.slug} category={category} />;
        })}
      </div>
    </div>
  );
}

export default AllCategories;
