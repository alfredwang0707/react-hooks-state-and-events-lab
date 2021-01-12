import React, {useState} from "react";
import Item from "./Item";


function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("default")

  function handleCategoryClick (event) {
    // console.log(event.target.value)
    setSelectedCategory(event.target.value)
  }
  //need a logic to compare selected items 
  // console.log(items)
   const filteredItems = items.filter( (item) =>{
     if (selectedCategory === "default" )
      return true
      else
      return item.category === selectedCategory
   })
   console.log(filteredItems)
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleCategoryClick}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map( (item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
