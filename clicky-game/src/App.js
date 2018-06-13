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
    message: "Click on any image to begin!",
    clicked: []
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

  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      message: "You guessed correctly!"
     });
    //  if (newScore >= this.state.topScore) {
    //    this.setState({ topScore: newScore });
    //  } else if (newScore === 12) {
    //    this.setState({ message: "You Won!" });
    //  }
     this.handleShuffle();
  };

  handleReset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      rightWrong: "You guessed incorrectly! Time to start over",
      clicked: []
    });
    this.handleShuffle();
  };

  handleShuffle = () => {
    let shuffledCharacters = this.shuffleCharacters(characters);
    this.setState({ characters: shuffledCharacters });
  };





  render() {
    return ( 
      
      <Title currentScore = {this.currentScore}
    topScore = {this.topScore}
    message = {this.message}
      >
       <Wrapper > 
       {this.state.characters.map(character => ( 
         <FriendCard id = {character.id}
          key = {character.id}
          image = {character.image}
          handleOnClick={this.handleOnClick}
          handleIncrement={this.handleIncrement}
          handleReset={this.handleReset}
          handleShuffle={this.handleShuffle}
          />
        ))} 
        </Wrapper> 
      </Title>
    );
  }
}

export default App;