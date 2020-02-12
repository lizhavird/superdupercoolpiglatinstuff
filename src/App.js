import React from 'react'
import './App.css'
class App extends React.Component {

  constructor(props){
    super(props)
    // the state object holds information that can be displayed to the user and updated throughout the program
    this.state = {
      // 'phrase' is the text entered by the user - right now there are some test words hard coded to make the process of testing your code a bit faster and easier
      // ACTION ITEM: when you are ready for your full user experience, delete the test words so phrase is assigned an empty string
      phrase: 'every through yummy squeal queen fry',
      // 'phraseTranslated' is what the user will see appear on the page as Pig Latin, it starts as the preset message and updates when your user clicks the 'submit' button
      phraseTranslated: 'This is where your translated sentence will appear.'
    }
  }
  // The 'myPigLatinCodeHere' function is where you will put your logic to convert the sentence entered by the user to Pig Latin.
  myPigLatinCodeHere = () => {
    // the variable 'userInput' will contain the text input from the user
    // no need to change this variable
    let userInput = this.state.phrase
    // as you modify and create Pig Latin-ified words, push them into 'translatedWordsArray'
    // no need to change this variable
    let translatedWordsArray = []




    
    // taking the user input and spliting the text into an array of words
    let splitUserInput = userInput.toLowerCase().split(" ")
    // now that we have an array of words, we can map over the array and access each word
    //splitLetter = [e, v, e, r, y]
    let newArray = []
    let noFirstLetter = []
    let firstLetter
    let vowelsOnly = ["a", "e", "i", "o", "u"]
    let const1 = []
    let const2 = []
    let const3 = []
// VOWELS
    for (let i=0; i<splitUserInput.length; i++) {
      let splitLetter = splitUserInput[i].split("")
      if
      (splitLetter[0] === "a" ||
      splitLetter[0] === "e" ||
      splitLetter[0] === "i" ||
      splitLetter[0] === "o" ||
      splitLetter[0] === "u")
      {
          newArray.push(splitLetter.join(""), "way ")
     } else if
      (splitLetter[0] === "q" && splitLetter[1] === "u") {
          splitLetter.shift() //delete the first char
          splitLetter.shift() //delete the first char again!
          newArray.push(splitLetter.join(""), "quay ")
    } else if
     (splitLetter[1] === "q" && splitLetter[2] === "u") {
         splitLetter.shift() //delete the first char
         splitLetter.shift() //delete the first char again!
         splitLetter.shift()
         newArray.push(splitLetter.join(""), "squay ")
   } else if
    (splitLetter[0]==="y") {
      splitLetter.shift()
      newArray.push(splitLetter.join(""),"yay ")
    } else {
        if
        (splitLetter[1] !== "a" &&
         splitLetter[1] !== "e" &&
         splitLetter[1] !== "i" &&
         splitLetter[1] !== "o" &&
         splitLetter[1] !== "u" &&
         splitLetter[1] !== "y" &&
         splitLetter[2] !== "a" &&
         splitLetter[2] !== "e" &&
         splitLetter[2] !== "i" &&
         splitLetter[2] !== "o" &&
         splitLetter[2] !== "u" &&
         splitLetter[2] !== "y" ) {
         const1 = splitLetter[0]
         const2 = splitLetter[1]
         const3 = splitLetter[2]
        splitLetter.shift()
        splitLetter.shift()
        splitLetter.shift()
        newArray.push(splitLetter.join(""), const1, const2, const3, "ay ")
        }
        else if
        (splitLetter[1] !== "a" &&
         splitLetter[1] !== "e" &&
         splitLetter[1] !== "i" &&
         splitLetter[1] !== "o" &&
         splitLetter[1] !== "u" &&
         splitLetter[1] !== "y") {
           const1=splitLetter[0]
           const2=splitLetter[1]
           splitLetter.shift()
           splitLetter.shift()
           newArray.push(splitLetter.join(""), const1, const2, "ay ")
         }
         else {
           const1=splitLetter[0]
           splitLetter.shift()
           newArray.push(splitLetter.join(""), const1, const2, "ay ")
         }
    }
//CONST
      // ACTION ITEM: use 'currentWord' as a starting point for your code
      // your code here!
      // Remember: console.log is your friend :
      // ACTION ITEM: change the value of currentWord in the push method to the name of whatever variable you made containing your Pig Latin'd word
}
translatedWordsArray.push(newArray.join(""))




    // joining the array back to a string of translated words
    // no need to change this variable
    let translatedWords = translatedWordsArray.join(" ")
    // the setState method will take your information from 'translatedWords' and update the state object that is displayed to the user
    // no need to change this method
    this.setState({ phraseTranslated: translatedWords })
    // done!
  }
  setUpPreventDefault = (e) => {
    // this method prevents react from refreshing the page unnecessarily
    // no need to modify this method
    e.preventDefault()
    this.myPigLatinCodeHere()
  }
  handleChange = (e) => {
    // this method takes the input and saves the value in this.state.phrase so we can use the input in our program
    // no need to modify this method
    this.setState({ phrase: e.target.value })
  }
  restartGame = () => {
    // this method restarts the game by setting the original state
    // ACTION ITEM: when you are ready for your full user experience, delete the test words in phrase so that is assigned an empty string
    this.setState({
      phrase: 'through every squeal queen fry',
      phraseTranslated: 'This is where your translated sentence will appear.'
    })
  }
  render() {
    // the render method is where we put information on the page
    // inside the return is all our JSX tags
    return (
      <div>
        <h1>Pig Latin Translator</h1>
        <main class="center">
          <h1>
            <span class="glitch" data-text="help•">

            </span>
          </h1>
        </main>
          <div id="pigImage">
<img src="https://media1.tenor.com/images/15144b477c14f2c5f9eb9816f0b8c3d1/tenor.gif?itemid=14274502"/>
<br />
<br/>

          </div>






          <div className="box">
            <h4>Enter phrase to be translated:</h4>
            <div className="info">
            {/* user input field - every DOM event that happens in the input will call the handleChange method and update state */}
              <input
                id="inputPhrase"
                onChange={ this.handleChange }
                value={ this.state.phrase }
              />
              <br />
              {/* button that called the setUpPreventDefault method */}
              <button onClick={ this.setUpPreventDefault }>Submit</button>
              {/* button that resets the game */}
              <button onClick={ this.restartGame }>Clear</button>
            </div>
            {/* where the translated phrase will display */}
            <p>{ this.state.phraseTranslated }</p>

          </div>
        <footer>
          Coded by Heya and Liz 🌱
          <a href="https://gifgifmagazine.com/wp-content/uploads/2018/11/elvis-prase-sapunica.gif">Boom</a>
        </footer>
      </div>
    )
  }
}
export default App
