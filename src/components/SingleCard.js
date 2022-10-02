import React from "react";

import "./SingleCard.css";

const cardBack = "/img/cover.png";

export default function SingleCard({ card, handleChoice, flipped, disabled }) {
  const handleClick = () => {
    if (!disabled) handleChoice(card);
  };

  return (
    <div className="card">
      <div className={flipped ? "flipped" : null}>
        <img src={card.src} className="front" alt="card front" />
        <img
          src={cardBack}
          onClick={handleClick}
          className="back"
          alt="card back"
        />
      </div>
    </div>
  );
}
