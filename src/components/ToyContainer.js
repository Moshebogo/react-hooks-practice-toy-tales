import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({stateToys, setStateToys}) {

  return (
    <div id="toy-collection">{stateToys.map( toy => {
      return <ToyCard key={toy.id}
                      name={toy.name}
                      id={toy.id}
                      image={toy.image}
                      likes={toy.likes}
                      stateToys={stateToys}
                      setStateToys={setStateToys}
      />
    })}</div>
  );
}

export default ToyContainer;
