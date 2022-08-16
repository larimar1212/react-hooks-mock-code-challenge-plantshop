import React, {useState} from "react";

// this is for the form and state

const defaultPlant = {
  name: '',
  image: '',
  price: '',
}

// add prop that was passed 
const NewPlantForm = ({handleAddPlant}) =>  {
  // newPlant is an object we will store in state, something controlled componenets 
const [newPlant, setNewPlant] = useState(defaultPlant)

//event handlet that fetches on submut
const handleSubmit = async (e) => {
  e.preventDefault()
  await fetch('http://localhost:6001/plants', {
    method: 'POST',
    headers: {
      'Content-Type' : 'applicatrion/json'
    },

    body: JSON.stringify(newPlant) // we pass in newPlant whose values are derived from form change
  
  })
  .then(req => req.json()) // to render in the DOM, we take the result of the promise 
  .then(res => {
    handleAddPlant(res) // + use handler function to add a new plant 
    setNewPlant(defaultPlant) // then reset form to default value 
  })
}

// next, we need a handler function for change events that will occur in the input fields of the form
  // since we're using an OBJECT to store values in state, we use this cool notation to update an object's
  // existing properties: {...object, [key]: 'new value'} and we refer to the keys using the input name attributes
  // if you really wanted to, you could make 3 handler functions and 3 states.

  const handleChange = (e) => {
    setNewPlant({...newPlant,
    [e.target.name]: e.target.value
    })
  }

  return (

    <div className="new-plant-form">
      <h2>New Plant</h2>
      {/* the form gets the handleSubmit function */}

      <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        name="name" 
        placeholder="Plant name" 
        value={newPlant.name} 
        onChange={handleChange}
        />
    {/* each input gets a value based on state and a handleChange function */}
       <input 
       type="text" 
       name="image" 
       placeholder="Image URL"
       value={newPlant.image} 
       onChange={handleChange}
       />
        <input 
        type="number" 
        name="price" 
        step="0.01" 
        placeholder="Price"
        value={newPlant.price}
        onChange={handleChange} 
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

// That is ALL of deliverable 2. It persists. It renders. * JUMP TO PLANTPAGE *

export default NewPlantForm;
