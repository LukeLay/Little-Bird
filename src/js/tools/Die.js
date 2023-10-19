import React, { useState } from 'react';
import DiceLogo from '../components/DiceLogo';

const Die = (props) => {
  const [currentRoll, setCurrentRoll] = useState(null);
  const [isFlipped, setIsFlipped] = useState(false);

  const rollDie = () => {
    setCurrentRoll(null);
    const newRoll = Math.floor(Math.random() * parseInt(props.sides)) + 1;
    

    // Trigger the flip animation by toggling the isFlipped state
    setIsFlipped(true);

    // Reset the flip state after the animation duration (1 second)
    setTimeout(() => {
      setIsFlipped(false);
      setCurrentRoll(newRoll);
    }, 1000);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "4px",
        margin: "4px",
        border: "2px solid var(--bs-info)",
        borderRadius: "16px"
      }}
      onClick={rollDie}
    >
      <div
        className="die"
        style={{
          padding: "8px",
          height: "72px",
          width: "72px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          transform: isFlipped ? "rotateX(720deg) rotateY(720deg)" : "rotateX(0deg) rotateY(0deg)",
          transformStyle: "preserve-3d", // Enable 3D transformations
          animation: isFlipped ? "flip 1s forwards" : "none", // Use a CSS animation
        }}
      >
        <DiceLogo dice={`D${props.sides}`} w="72px" h="72px" />
        
          

        {props.sides == 2 
        ? (
          <span
            style={{
              fontWeight: "bold",
              fontSize: "36px",
              position: "absolute",
              zIndex: "1",
              userSelect: "none",
              color: currentRoll === 1 ? "var(--bs-blue)" : currentRoll == props.sides ? "var(--bs-orange)" : "inherit"
            }}
          >
            {currentRoll !== null ? (currentRoll === 1 ? "H" : "T") : null}
          </span>

          
        ) : (
          <span
          style={{
            fontWeight: "bold",
            fontSize: currentRoll === 1 ? "24px" : currentRoll == props.sides ? "48px" : "36px",
            position: "absolute",
            zIndex: "1",
            userSelect: "none",
            color: currentRoll === 1 ? "var(--bs-danger)" : currentRoll == props.sides ? "var(--bs-warning)" : "inherit"
          }}
        >{currentRoll}
        </span>

        )

        }

      </div>
    </div>
  );
};

export default Die;
