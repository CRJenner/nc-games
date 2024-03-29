import { useEffect } from "react";
import { useState } from "react";
import CategoryCard from "./CategoryCard";

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
      <h2>Scroll down to see the options</h2>
      <div className="category-list">
        {categories.map((category) => {
          return <CategoryCard key={category.slug} category={category} />;
        })}
      </div>
    </div>
  );
}

export default AllCategories;
