import React, {useState} from "react";

function CategoryFilter({categories}) {
  const [selectedCategory, setSelectedCategory]= useState('All');

  function handleCategoryClick(category) {
    setSelectedCategory(category);
    console.log(category);

   

  }
  return (
    <div className="category-filter">
        {categories.map((category)=>(
          <button key={category} className={selectedCategory===category ? 'selected': ''} onClick={()=> handleCategoryClick(category)}> {category}</button>
        ))}
        </div> 
        
    
     
      
      )}

export default CategoryFilter;
