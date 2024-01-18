import React from "react";
import { useParams } from "react-router-dom";

const SubCategory = () => {
  const { category_name } = useParams();
  console.log(category_name);
  return (
    <div>
      <h2>SubCategory</h2>
      <p>Category ID: {category_name}</p>
    </div>
  );
};

export default SubCategory;
