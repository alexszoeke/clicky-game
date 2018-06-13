import React from "react";
import "./CharacterCard.css";

const CharacterCard = (props) => (
  <div>
    <span onClick={() => props.handleOnClick(props.id)} className="clicked">
      <div className="card">
        <div className="img-container">
          <img alt={props.id} src={props.image} />
        </div>
        </div>
      </span>
    </div>
);

export default CharacterCard;
