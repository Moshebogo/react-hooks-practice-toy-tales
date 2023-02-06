import React, { useState } from "react";

function ToyCard({ name, image, likes, handleDelete, stateToys, setStateToys, key, id}) {

  let [stateLikes, setStateLikes] = useState(likes)

function handleDelete(name, id) {
  console.log(id)
  fetch('http://localhost:3001/toys/' + id, {
    method: 'DELETE',
    headers: {
      'Content-Type' : 'application/json,'
    },
    body: JSON.stringify()
  })
  setStateToys( stateToys.filter( toy => toy.name !== name))
}  


function incrementLikes(id) {
  setStateLikes( stateLikes++)
  console.log(stateLikes)
  fetch('http://localhost:3001/toys/' + id,{
    method: 'PATCH',
    headers: {
      'Content-Type' : 'application/json',
    },
    body: JSON.stringify({likes: `${stateLikes}`})
  })
}

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{stateLikes} Likes </p>
      <button className="like-btn"
              onClick={ (e) => incrementLikes(id)}>Like {"<3"}</button>
      <button className="del-btn"
              onClick={ (e) => handleDelete(name, id)}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
