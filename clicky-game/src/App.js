import React, { Component } from "react";
import FriendCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import characters from "./characters.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    characters
  };

  // removeFriend = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   const characters = this.state.characters.filter(character => character.id !== id);
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ friends });
  // };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Title> 
      <Wrapper>
        
        {this.state.characters.map(character => (
          <FriendCard
            id={character.id}
            key={character.id}
            image={character.image}
          />
        ))}
      </Wrapper>
      </Title>
    );
  }
}

export default App;
