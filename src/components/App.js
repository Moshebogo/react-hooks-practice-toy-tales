  import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [stateToys, setStateToys] = useState([])

  useEffect( () => {
    fetch("http://localhost:3001/toys")
    .then(resp => resp.json())
    .then(toys =>setStateToys(toys))
  }, [])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  return (
    <>
      <Header />
    {showForm ? <ToyForm setStateToys={setStateToys}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer stateToys={stateToys}
                    setStateToys={setStateToys}
      />
    </>
  );
}

export default App;
