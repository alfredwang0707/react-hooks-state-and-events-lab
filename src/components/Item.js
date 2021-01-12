
import React, {useState} from "react"

function Item({ name, category }) {
  const [incart, setCart] = useState(false)

  function addToCartClick(){
    setCart( (incart) => !incart)
  }
  return (
    // <li className="in-cart">
    <li className={incart ?  "in-cart" : "not-in-cart"}>
    {/* check if its truthy, ":" else  null? empty? */}
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addToCartClick}>Add to Cart</button>
    </li>
  );
}

export default Item;
