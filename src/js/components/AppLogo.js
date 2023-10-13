import React from 'react';

const AppLogo = (props) => {
  return (
    <div className="Applogo">
      <img src="public/img/littlebird_tp.png" alt="Logo" width={props.w} height={props.h} />
    </div>
  );
}

export default AppLogo;
