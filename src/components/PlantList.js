import React from "react";
import PlantCard from "./PlantCard";

// include passed prop in parameter
// TAKE IN THE ADVANCED DELIVERABLE PROPS AND KEEP PASSING THEM

const PlantList = ({plants}) => {

return (
    <ul className="cards">
      {/* render PlantCards components in here 
       we have an array. We will .map over the array and return <PlantCard  */}
       {plants.map((element, index) => {
        // destructure element into keys
        const{id, name, image, price} = element // destructuring to easier identify 
        return (

          // pass properties of element by DESTRUCTURED name to PlantCard
          // *JUMP TO PLANT CARD*

        <PlantCard  // what the plant card will contain the parent element did the mapping 
          key={index}
          id ={id}
          name={name}
          image={image}
          price={price} />
        )
       })}
       
       
      
    </ul>
  );
}

export default PlantList;
