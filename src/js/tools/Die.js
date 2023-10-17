import React, { useState } from 'react';

const Die = (props) => {
  const [currentRoll, setCurrentRoll] = useState(0);

  const rollDie = () => {
    const newRoll = Math.floor(Math.random() * parseInt(props.sides)) + 1;
    setCurrentRoll(newRoll);
  };

  return (
    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
      <div className="die" style={{height: "72px", width: "72px", backgroundColor: "var(--bs-dark)", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
        <span style={{fontWeight: "bold", fontSize: "36px"}}>{currentRoll}</span>
      </div>
      <button className="btn btn-info" onClick={rollDie} style={{height: "36px", width: "72px"}}>D{props.sides}</button>
    </div>
  );
};

export default Die;
