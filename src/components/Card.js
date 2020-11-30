import React, { useEffect } from "react";

const Card = (props) => {

    //gets a random integer
    const getRandomInt = (max) => {
        return Math.floor(Math.random() * Math.floor(max));
    }

    //on first mount, we want to change this to every time. 
    useEffect(() => {

        //randomise order in DOM
        document.getElementById(props.number).style.order = getRandomInt(9);

    });

    return (
        <button onClick={() => props.handleGameLogic(props.number)} className = "bg-primary p-2 m-2" id = {props.number}>
            Card {props.number}
        </button>
    );
};

export default Card;

