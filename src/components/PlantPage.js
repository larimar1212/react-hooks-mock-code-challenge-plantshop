import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";


// When the app starts, I can see all plants.
// I can add a new plant to the page by submitting the form.
// I can mark a plant as "sold out".
// I can search for plants by their name and see a filtered list of plants.

// states to manage go here, plants is for the dara from the server, searchTerm is for a text
// input that will be used to **filter the displayed data 

const PlantPage = () => {
const [plants, setPlants] = useState([]) // setting useState to default
const [searchTerm, setSearchTerm] = useState('') // nothing by default 
// USE STATE AcTUALLY 

// useeffect hook to load inital data 
useEffect(() => {
  const fetchPlants = async () => {
    let req = await fetch('http://localhost:6001/plants') 
    let res = await req.json()
    setPlants(res) // function making the fetch useState 
  }
  fetchPlants()

}, []) 

// For deliverable 1, we need the data to render. The desintation for the data is PlantCard, which is a child
  // of PlantList. The reason we don't fetch data in PlantList is because we have other components that need
  // to update the data, and PlantPage is the lowest common ancestor of these components.
  // Pass the data as a prop to PlantList. * JUMP TO PLANTLIST *
// end of deliverable one when plant page renders 


  // 2. I can add a new plant to the page by submitting the form.

  // The form is going to need a handler function (that uses the setter function for plants) 
  // in order to add a new plant to the array. The fetch request will occur in NewPlantForm, but
  // we need to pass the handler here since the state is managed here.

  const handleAddPlant = (newPlant) => { // add new plant
    const updatedPlants = [...plants, newPlant] // return new array with newPlant
    setPlants(updatedPlants) // callback state, to the new array 
  }

  // NOW NEEDS TO BE PASSED AS A PROP AND THEN JUMP TO NEW PLANTFORM

/* BACK FROM PLANTFORM * It's time for deliverable 3.

  // 3. I can mark a plant as "sold out".
  // Ok, this one should be quick. The in stock button is in the PlantCard component. It can manage that state
  // itself, no prop passing necessary. The database doesn't even track if things are in stock or not.
  // * JUMP TO PLANT CARD *

  // Stock toggles, time for deliverable 4:

  // 4. I can search for plants by their name and see a filtered list of plants.

  // this implies we will use a filter method and pass a filtered array instead of plants to PlantList
  // the state for searchTerm is ^ up there */
  
  // setup filtered array, pass state setter to search, *JUMP TO SEARCH
  const searchedPlants = plants.filter((plant) => {
    return plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  })





  return (
    <main>
      <NewPlantForm handleAddPlant={handleAddPlant} /> 
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <PlantList plants={searchedPlants}/> 
    </main>
  );
}

export default PlantPage;
