// src/App.jsx
import { useState, useEffect } from "react";

import * as petService from "./services/petService";
import PetList from "./components/PetList";
import PetDetail from "./components/PetDetail";
import PetForm from "./components/PetForm";

const App = () => {
  const [pets, setPets] = useState([]);
  const [selected, setSelected] = useState(null);
  const [openForm, setOpenForm] = useState(false);

  useEffect(() => {
    async function getPets() {
      try {
        const pets = await petService.index();
        console.log(pets, "----------------------pets");
        setPets(pets);//set the pets state to the pets array
      } catch (err) {

        console.log(err);
      }
    }
    getPets();

  }, []);

  async function handleAddPet(petData) {
    try {
      const newPet = await petService.create(petData);
      setPets([...pets, newPet]);
    }catch (err) {
      console.log(err, "----------------------error");
    }
  }
  
  //openform function
  const handleOpenform = () => {
    setOpenForm(!openForm);
  }

  return (
    <>
      <PetList pets={pets} setSelected={setSelected} handleOpenform={handleOpenform} isFormOpen={openForm} />
      {openForm ? (<PetForm handleAddPet={handleAddPet} />) :<PetDetail selected={selected} setSelected={setSelected} />}
    </>
  );
};

export default App;
