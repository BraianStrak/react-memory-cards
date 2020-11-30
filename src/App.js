import './App.css';
import Scoreboard from "./components/Scoreboard"
import Card from "./components/Card"
import React, { useState } from "react";


function App() {  
  const [cardsArr, addCard] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const pushCard = (number) => {
    addCard((oldArr) => [...oldArr, number]);
  };

  const handleHighScore = (number) => {
    if(highScore < number){
      setHighScore(number);
    }
  }

  const reset = () => {
    setScore(0);
    addCard([]);
  }

  const handleGameLogic = (cardNumber) => {
    if (!cardsArr.includes(cardNumber)) {
      pushCard(cardNumber);
      setScore(score+1);
    } else {
      handleHighScore(score);
      reset();
    }
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <h1 className="text-center">Memory Cards</h1>
        </div>
      </div>

      <Scoreboard score = {score} hiScore = {highScore}/>

      <div className="row d-flex">
        <Card number = {1} handleGameLogic={handleGameLogic} />
        <Card number = {2} handleGameLogic={handleGameLogic} />
        <Card number = {3} handleGameLogic={handleGameLogic} />
        <Card number = {4} handleGameLogic={handleGameLogic} /> 
        <Card number = {5} handleGameLogic={handleGameLogic} />
        <Card number = {6} handleGameLogic={handleGameLogic} />
        <Card number = {7} handleGameLogic={handleGameLogic} />
        <Card number = {8} handleGameLogic={handleGameLogic} />
        <Card number = {9} handleGameLogic={handleGameLogic} />
      </div>
    </div>
  );
}

export default App;
