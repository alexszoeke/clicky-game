import React from "react";
import "./CharacterCard.css";

const CharacterCard = (props) => (
  <div className="card">
    <div className="img-container">
      <img alt={props.id} src={props.image} />
    </div>

    <span onClick={() => props.shuffleCharacters(props.id)} className="shuffle">
      
    </span>
  </div>
);

export default CharacterCard;
