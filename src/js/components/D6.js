import React, { useState } from 'react';

const D6 = () => {

    const [currentRoll, setCurrentRoll] = useState(null);

    const rollDie = () => {
      const newRoll = Math.floor(Math.random() * 6) + 1;
      setCurrentRoll(newRoll);
    };
  
    return (
      <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
        
        <div className="die">{currentRoll}</div>
        <button onClick={rollDie}>Roll Die</button>
        
      </div>
    );
  };

export default D6;