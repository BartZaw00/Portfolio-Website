import React, { useState } from "react";
import "./tooltip.css";

const Tooltip = ({ content, position }) => {
  return (
    <div className="c-tooltip scale-up-bl" style={{ top: position.y, left: position.x }}>
      <span className="c-tooltip__header">Description:</span>
      <span className="c-tooltip__description">{content}</span>
      <br />
      <span className="c-tooltip__message">Click to check website!</span>
    </div>
  );
};

export default Tooltip;
