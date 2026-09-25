import React, { useState } from "react";
import "./BasketballCourt.css";

const BasketballCourt = () => {
  const [selectedZone, setSelectedZone] = useState(null);

  const handleZoneClick = (zone) => {
    setSelectedZone(zone);
  };

  return (
    <div className="basketball-wrapper">
      <h2>Basketball Court</h2>

      <div className="basketball-court">

        {/* Left Basket */}
        <div className="basket-hoop left-hoop">
          <div className="backboard"></div>
          <div className="rim"></div>
        </div>

        {/* Left Key */}
        <div className="key left-key">
          <div className="free-throw-circle"></div>
        </div>

        {/* Left 3 Point Arc */}
        <div className="three-point left-three"></div>

        {/* Center */}
        <div className="center-line"></div>
        <div className="center-circle">
          <div className="center-dot"></div>
        </div>

        {/* Right Key */}
        <div className="key right-key">
          <div className="free-throw-circle"></div>
        </div>

        {/* Right 3 Point Arc */}
        <div className="three-point right-three"></div>

        {/* Right Basket */}
        <div className="basket-hoop right-hoop">
          <div className="backboard"></div>
          <div className="rim"></div>
        </div>

        {/* Clickable Zones */}
        <button
          className="court-zone left-zone"
          onClick={() => handleZoneClick("Left Half")}
        >
          Left Half
        </button>

        <button
          className="court-zone center-zone"
          onClick={() => handleZoneClick("Center")}
        >
          Center
        </button>

        <button
          className="court-zone right-zone"
          onClick={() => handleZoneClick("Right Half")}
        >
          Right Half
        </button>
      </div>

      {selectedZone && (
        <div className="selected-zone">
          Selected Zone: <strong>{selectedZone}</strong>
        </div>
      )}
    </div>
  );
};

export default BasketballCourt;