import React, { useState } from "react";

function ReturnToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // You can use "auto" for instant scroll
    });
  };

  // Add a scroll event listener to check whether to show the button
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  });

  return (
    <button
      className={`btn btn-primary ${isVisible ? "visible" : "invisible"}`}
      style={{
        position: "fixed",
        bottom: "8px",
        right: "32px",
        // right: "50%", // Center horizontally
        // transform: "translateX(50%)", // Center horizontally
        opacity: 0.5,
        zIndex: 9999 // Ensure it's above other content
      }}
      onClick={scrollToTop}
    >
      Return To Top
    </button>
  );
}

export default ReturnToTopButton;
