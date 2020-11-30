import './App.css';
import Scoreboard from "./components/Scoreboard"
import Card from "./components/Card"
import React, { useState, useEffect } from "react";


function App() {  

  //can have a function called resetgame, and we can pass it to the thingy and call it onclick if the thing was low enough 

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <h1 className="text-center">Memory Cards</h1>
        </div>
      </div>

      <Scoreboard />

      <div className="row d-flex">
        <Card number = {1} />
        <Card number = {2} />
        <Card number = {3} />
        <Card number = {4} />
        <Card number = {5} />
        <Card number = {6} />
        <Card number = {7} />
        <Card number = {8} />
        <Card number = {9} />
      </div>
    </div>
  );
}

export default App;
