import React, { Component } from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import CharactersCard from './components/caractersCard'
import Footer from './components/footer'
import characters from "./character.json";
import './App.css';


//sets state to 0 or empty
class App extends Component {
  state = {
    characters,
    clickedCharacters: [],
    score: 0
  };

//when you click on a card ... the characters is taken out of the array
  imageClick = event => {
    const currantCharacters = event.target.alt;
    const charactersAlreadyClicked =
      this.state.clickedCharacters.indexOf(currantCharacters) > -1;

//if you click on a characters that has already been selected, the game is reset and cards reordered
    if (charactersAlreadyClicked) {
      this.setState({
        characters: this.state.characters.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedCharacters: [],
        score: 0
      });
        alert("You lose. Play again?");

//if you click on an available characters, your score is increased and cards reordered
    } else {
      this.setState(
        {
          characters: this.state.characters.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedCharacters: this.state.clickedCharacters.concat(
            currantCharacters
          ),
          score: this.state.score + 1
        },

//if you get all 12 characters correct you get a congrats message and the game resets        
        () => {
          if (this.state.score === 12) {
            alert("Yay! You Win!");
            this.setState({
              characters: this.state.characters.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedCharacters: [],
              score: 0
            });
          }
        }
      );
    }
  };

//the order of components to be rendered: navbar, Hero, CharacterCard, footer 
  render() {
    return (
      <>
      <p></p>
      <Navbar score={this.state.score}/>
      <Hero/>
      <section className="section is-warning wrapper">
        
        {this.state.characters.map(character => (
        <CharactersCard
        imageClick={this.imageClick}
        id={character.id}
        key={character.id}
        image={character.image}
        />
          ))}   
        
      </section>
      <Footer/>
      </>
    );
  }
}
export default App;