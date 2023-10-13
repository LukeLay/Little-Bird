import React, { useState, useEffect } from 'react';

const LogoComponent = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 1500); // Adjust the time (in milliseconds) for the total duration of the animation

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      style={{
        display: visible ? 'flex' : 'none',
        justifyContent: 'center',
        alignItems: 'center',
        height: '95vh',
      }}
    >
      {visible && (
        <img
          src="public/img/littlebird_tp.png"
          alt="Logo"
          style={{
            animation: 'fadeInAndShimmer 1.5s linear forwards',
          }}
        />
      )}
    </div>
  );
};

export default LogoComponent;
