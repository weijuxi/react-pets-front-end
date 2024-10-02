import { useState } from 'react';

export default function PetForm(props) {
    const [formData, setFormData] = useState({
        name: "",
        breed: "",
        age: 0
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.handleAddPet(formData);
        setFormData({
            name: "",
            breed: "",
            age: 0
        });
    }

    return (
        <div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name"> Name </label>
            <input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label htmlFor="age"> Age </label>
            <input
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
            />
            <label htmlFor="breed"> Breed </label>
            <input
              id="breed"
              name="breed"
              value={formData.breed}
              onChange={handleChange}
            />
            <button type="submit">Add New Pet</button>
          </form>
        </div>
      );
}   //end of PetForm component