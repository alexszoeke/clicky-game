import React from "react";
import "./Title.css";

const Title = (props) => 
<div>
    <div className="nav-bar">
        <ul>
        <h1>
        <li className="brand">
        Clicky Game
        </li>
        
        <li>
        {props.message}
        </li>

        <li>
        Current Score: {props.currentScore} | Top Score: {props.topScore}
        </li>
        </h1>
        </ul>
    </div>
    <header className="header">
    <p>Clicky Game</p>
    </header>

    <div className="container">
        {props.children}
    </div>
</div>



// <div className="jumbotron">

// </div>
// <div className="container-fluid">
// <h1 className="title">{props.children}</h1>
// </div>

export default Title;
