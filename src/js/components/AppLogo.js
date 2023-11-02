import React from 'react';

const AppLogo = (props) => {
  const imageStyle = {
    transform: props.flipped ? 'scaleX(-1)' : 'scaleX(1)', // Flip the image horizontally if "flipped" is true
  };

  return (
    <div className="Applogo">
      <img
        src="public/img/littlebird_tp.png"
        alt="Logo"
        width={props.w}
        height={props.h}
        style={imageStyle} // Apply the transform style
      />
    </div>
  );
}

export default AppLogo;
