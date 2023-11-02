import React from 'react';

const BackGroundImage = (props) => {
  return (
    <>
      {/* First image (your main image) */}
      <img
        src={props.image}
        alt={props.image}
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: "-1",
          opacity: "1",
        }}
        onError={(e) => {
          e.target.src = "public/img/xanathars-guide-to-everything-cover-art.png"; // Set a placeholder image on error
        }}
      />

      {/* Second image (blurred, fills the entire height and width) */}
      <img
        src={props.image}
        alt={props.image}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: "-2",
          filter: "blur(10px)", // Apply a blur effect
          opacity: "0.5", // Adjust opacity as needed
        }}
      />
    </>
  );
}

export default BackGroundImage;
