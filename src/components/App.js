import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  // console.log(itemData)
  const [darkMode, setDarkmode] = useState(false)
  //set darkmode as false at beginning
  //need to funciton to handle event click
  //when clicked chnage to opposite

  function handleDarkModeClick(){
    setDarkmode( (darkMode) => !darkMode)
  }
  // this data will be passed down to the ShoppingList as a prop
  // console.log(items)

  return (
    <div className={"App " + (darkMode ? "dark" : "light")}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkModeClick}>
          {darkMode ? "dark" : "light"}
        </button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
}
//when click, page re-render
export default App;
