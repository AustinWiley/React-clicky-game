import React, { Component } from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import CharactersCard from './components/caractersCard'
import Footer from './components/footer'
import characters from "./character.json";
import './App.css';


// class App extends Component {
//   render() {
//     return (
//       <>
//       <Navbar/>
//       <Hero/>
//       <section class="section">
//         <div class="container">
//         {this.state.characters.map(characters => (
//         <CharactersCard
//         imageClick={this.imageClick}
//         id={characters.id}
//         key={characters.id}
//         image={characters.image}
//         />
//           ))}

//         </div>
//       </section>
//       <Footer/>
//       </>
//     );
//   }
// }

// export default App;

console.log('here are the characters')
console.log(characters)

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
//if you get all 12 characters corrent you get a congrats message and the game resets        
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

//the order of components to be rendered: navbar, jumbotron, friendcard, footer 
  render() {
    return (
      <>
      <p></p>
      <Navbar score={this.state.score}/>
      <Hero/>
      <section className="section is-warning">
        <div className="container wrapper">

        {this.state.characters.map(character => (
        <CharactersCard
        imageClick={this.imageClick}
        id={character.id}
        key={character.id}
        image={character.image}
        />
          ))}
         
        </div>
      </section>
      <Footer/>
      </>
    );
  }
}
export default App;