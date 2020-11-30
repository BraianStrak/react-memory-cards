const Scoreboard = (props) => {

    return (
        <div className = "row">
            <div className= "col">
                <p>Score: {props.score}</p>
                <p>Best: {props.hiScore}</p>
            </div>
        </div>
    );
};

export default Scoreboard;