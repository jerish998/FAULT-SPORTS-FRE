import React, { useState } from "react";
import "./BadmintonCourt.css";

const BadmintonCourt = () => {
  const [selectedArea, setSelectedArea] = useState(null);

  const handleCourtClick = (area) => {
    setSelectedArea(area);
  };

  return (
    <div className="badminton-page">
      <div className="court-header">
        <h1>Badminton Court</h1>
        <p>Select an area of the court</p>
      </div>

      <div className="court-wrapper">
        <div className="court">

          {/* Back boundary */}
          <div className="court-back-line" />

          {/* Left service area */}
          <button
            className="court-area left-area"
            onClick={() => handleCourtClick("Left Service Area")}
          >
            <span>Left</span>
          </button>

          {/* Right service area */}
          <button
            className="court-area right-area"
            onClick={() => handleCourtClick("Right Service Area")}
          >
            <span>Right</span>
          </button>

          {/* Center line */}
          <div className="center-line" />

          {/* Short service line */}
          <div className="short-service-line" />

          {/* Net */}
          <div className="net">
            <span>NET</span>
          </div>

          {/* Long service line */}
          <div className="long-service-line" />

          {/* Court posts */}
          <div className="net-post left-post" />
          <div className="net-post right-post" />

          {/* Singles sidelines */}
          <div className="singles-line left-single-line" />
          <div className="singles-line right-single-line" />
        </div>
      </div>

      <div className="court-info">
        {selectedArea ? (
          <p>
            Selected: <strong>{selectedArea}</strong>
          </p>
        ) : (
          <p>Select an area on the court</p>
        )}
      </div>
    </div>
  );
};

export default BadmintonCourt;
