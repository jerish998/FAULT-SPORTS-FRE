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
      </div>

      <div className="court-wrapper">
        <div className="court">

          {/* Outer court */}
          <div className="court-lines"></div>

          {/* Singles sidelines */}
          <div className="singles-line left-single-line"></div>
          <div className="singles-line right-single-line"></div>

          {/* Long service lines */}
 

          {/* Short service lines */}
          <div className="short-service-line left-short-service"></div>
          <div className="short-service-line right-short-service"></div>

          {/* Middle / service dividing lines */}
          <div className="middle-line left-middle-line"></div>
          <div className="middle-line right-middle-line"></div>

          {/* Clickable areas */}
          <button
            className="court-area left-area"
            onClick={() => handleCourtClick("Left Service Area")}
          >
            <span>Left</span>
          </button>

          <button
            className="court-area right-area"
            onClick={() => handleCourtClick("Right Service Area")}
          >
            <span>Right</span>
          </button>

          {/* Net */}
          <div className="net"></div>

          {/* Net posts */}
          <div className="net-post left-post"></div>
          <div className="net-post right-post"></div>

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