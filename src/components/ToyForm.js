import React, { useState } from "react";

function ToyForm({ setStateToys}) {

  const [stateName, setStateName] = useState('')
  const [stateImage, setStateImage] = useState('')

  

  function handleSubmit(e, newToy) {
    console.log(newToy)
           e.preventDefault()
           fetch("http://localhost:3001/toys", {
            method: 'POST',
            headers: {
              'Content-Type' : 'application/json',
              },
            body: JSON.stringify(newToy)
      })
      .catch(error => console.log(error))
      setStateToys(prev => [...prev, newToy])
      setStateName('')
      setStateImage('')
  }

  return (
    <div className="container">
      <form className="add-toy-form"
            onSubmit={ (e) => handleSubmit(e, {
              name: stateName,
              Image: stateImage
            })}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={stateName}
          onChange={ (e) => setStateName(e.target.value)}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={stateImage}
          onChange={ (e) => setStateImage(e.target.value)}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
