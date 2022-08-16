import React , {useState} from "react";

// TAKE PROPS AS PARAMETERS , USE TO RENDER THINGS THAT ALREADY EXIST 
// THATS IT FOR DELIVERABLE ONE, JUMP TO PLANT PAGE 

// DELIVERABLE 3, MARK PLANT AS SOLD OUT 

const PlantCard = ({id, name, image, price}) => {
const [isInStock, setIsInStock] = useState(true)

// make a handler function to toggle state 
const handleToggleStock = () => {
  setIsInStock(isInStock => !isInStock)

}

  return (
    <li className="card" id={id}>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p> {/*end of deliverable 1 */}
      {isInStock ? ( // TRACK THE BOOLEAN state and give call the handler function on Click
        <button onClick={handleToggleStock} className="primary">In Stock</button>
      ) : (
        <button onClick={handleToggleStock}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
// deliverable 3 is done, jump to Plant page 