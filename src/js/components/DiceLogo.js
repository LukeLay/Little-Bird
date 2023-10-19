import React from 'react';

const DiceLogo = (props) => {

  return ( 
      <img className="DiceLogo" src={`public/img/dice/${props.dice}.png`} alt="Logo" width={props.w} height={props.h} style={{opacity: "0.25"}} draggable="false"/>
  );
}

export default DiceLogo;
