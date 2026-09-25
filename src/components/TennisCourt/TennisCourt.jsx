import React, { useState } from "react";
import "./TennisCourt.css";

const TennisCourt = () => {
  const [selectedArea, setSelectedArea] = useState(null);

  const handleCourtClick = (area) => {
    setSelectedArea(area);
  };

  return (
    <div className="tennis-page">
      <div className="tennis-header">
        <span className="tennis-badge">Tennis</span>

        <h1>Tennis Court</h1>

        <p>
          Select an area of the court
        </p>
      </div>

      <div className="tennis-court-wrapper">
        <div className="tennis-court">

          {/* Court boundary */}
          <div className="court-boundary" />

          {/* Singles court */}
          <div className="singles-left" />
          <div className="singles-right" />

          {/* Service boxes */}
          <div className="service-line-left" />
          <div className="service-line-right" />

          {/* Center service line */}
          <div className="service-center-line" />

          {/* Net */}
          <div className="tennis-net">
            <span>NET</span>
          </div>

          {/* Net posts */}
          <div className="tennis-post left-post" />
          <div className="tennis-post right-post" />

          {/* Clickable areas */}
          <button
            className="tennis-area top-left"
            onClick={() => handleCourtClick("Top Left")}
          >
            Top Left
          </button>

          <button
            className="tennis-area top-right"
            onClick={() => handleCourtClick("Top Right")}
          >
            Top Right
          </button>

          <button
            className="tennis-area bottom-left"
            onClick={() => handleCourtClick("Bottom Left")}
          >
            Bottom Left
          </button>

          <button
            className="tennis-area bottom-right"
            onClick={() => handleCourtClick("Bottom Right")}
          >
            Bottom Right
          </button>

        </div>
      </div>

      <div className="tennis-info">
        {selectedArea ? (
          <p>
            Selected area: <strong>{selectedArea}</strong>
          </p>
        ) : (
          <p>Select an area on the court</p>
        )}
      </div>
    </div>
  );
};

export default TennisCourt;

