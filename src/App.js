import React, { Component } from 'react';
import './App.css';
import NavBar from "./components/navbar.js";
import PictureButton from "./components/pictureButton.js";
import data from "./data.js";

let memoryArr = [];
let shuffledArr = data;
class App extends Component {
  state ={
    score:0,
    highScore:0,
    people:data,
    clickedPeople:[]
  }

  shuffleImages = ()=>{

    let holdArray = this.state.people.sort(() => Math.random() - 0.5);


    shuffledArr = holdArray;
    console.log(shuffledArr);

  };

  handleIncrement = (event) =>{

    let name = event.target.getAttribute("data-person");
    console.log("name:" + name);

    //see if they have been clicked before
    let found = false
    for(let i = 0; i < this.state.clickedPeople.length; i++){
      let person = this.state.clickedPeople[i];
      console.log(person + " : " + name);
      if((person === name)){
        found = true
        }
    }

    console.log(found);
    if(!found){
      memoryArr.push(name);
      this.setState({clickedPeople: memoryArr});
      this.setState({score: this.state.score +1});
    }else{
      this.handleRoundEnd();
    }
    console.log(memoryArr);
  };

handleRoundEnd = () =>{

    if(this.state.score > this.state.highScore){
        this.setState({highScore: this.state.score});
    }
    this.shuffleImages();
    memoryArr = [];
    this.setState({score:0, people: data,clickedPeople:[]});
};

  render() {
    
    return (
      <div>

        <NavBar score={this.state.score}>Score: {this.state.score}    High Score:{this.state.highScore}</NavBar>
        <div>
          {shuffledArr.map(person => (
            <PictureButton onClick={this.handleIncrement} key={person.id} image={person.img}>{person.name}</PictureButton>
          ))}  
        </div> 

      </div>
    );
  }
}

export default App;
