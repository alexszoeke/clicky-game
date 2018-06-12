import React, {
  Component
} from "react";
import FriendCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import characters from "./characters.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    characters,
    currentScore: 0,
    topScore: 0,
    message: "Click on any image to begin!"
  };

  shuffleCharacters = (array) => {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  handleOnClick = (id) => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ 
        clicked: this.state.clicked.concat(id)
      });
    } else {
      this.handleReset();
    }
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return ( 
      <Title >
       <Wrapper > 
       {this.state.characters.map(character => ( 
         <FriendCard id = {character.id}
          key = {character.id}
          image = {character.image}
          />
        ))} 
        </Wrapper> 
      </Title>
    );
  }
}

export default App;