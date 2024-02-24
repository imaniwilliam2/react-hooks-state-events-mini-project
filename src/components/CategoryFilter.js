import React, {useState} from "react";

function CategoryFilter({ categories, filterTasks}) {

  const [selectedCategory, setSelectedCategory] = useState("All")

  const handleClick = (category) => {
    setSelectedCategory(category)
    filterTasks(category)
  }



  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => (
        <button
        key={category}
        className={selectedCategory === category ? "selected" : ""}
        onClick={() => handleClick(category)}
        >{category}</button>
      ))}
    </div>
  );
}

export default CategoryFilter;
