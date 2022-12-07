import { useEffect } from "react";
import { useState } from "react";
import Category from "./Category";

function AllCategories() {
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://chloe-jenner-nc-games-be.cyclic.app/api/categories`)
      .then((response) => response.json())
      .then(({ category }) => {
        setCategories(category);
        setIsLoading(false);
      });
  }, [setCategories]);

  if (isLoading) return <p>...Loading...</p>;

  return (
    <div className="category-container">
      <div className="category-list">
        {categories.map((category) => {
          return <Category key={category.slug} category={category} />;
        })}
      </div>
    </div>
  );
}

export default AllCategories;
