import React, { Component } from 'react';
import './App.css';
import Word from './Word'
import Letter from './Letter'

class App extends Component {

  state = {
    word: 'CHAAAAAAAARLES',
    letters: new Array( 26 ).fill( 1 ).map( ( _, i ) => String.fromCharCode( 65 + i ) ),
    usedLetters: [],
    win: false
  }

  handleLetterClick = index => {
    const { letters, usedLetters } = this.state
    const newUsedLetters = usedLetters;
    newUsedLetters.push(letters[index]);
    this.setState({ usedLetters: newUsedLetters })
  }

  displayedWord() {
    const { word, usedLetters } = this.state
    var displayedWord = word;
    for (let i = 0; i < displayedWord.length; i++){
      let char = displayedWord[i];
      char = (usedLetters.includes(char)) ? char : '_';
      displayedWord = displayedWord.replace(displayedWord[i], char);
    }

    return displayedWord;
  }

  render() {
    const { letters, usedLetters, win } = this.state
    return (
      <div className="pendu"> 

        {letters.map((letter , index) => (
          <Letter 
            letter={letter}
            key={index} 
            index={index}
            used={`${usedLetters.includes(letter) ? 'used' : ''}`}
            onClick={this.handleLetterClick} 
            />
        ))}

        <Word word={this.displayedWord()}  />
      </div>
    )
  }

}

export default App;
