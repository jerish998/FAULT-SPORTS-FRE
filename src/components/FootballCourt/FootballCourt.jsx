import React, { useState } from "react";
import "./FootballCourt.css";

const FootballCourt = () => {
  const [selectedZone, setSelectedZone] = useState(null);

  const handleZoneClick = (zone) => {
    setSelectedZone(zone);
  };

  return (
    <div className="football-page">

      {/* Header */}
      <div className="football-header">
        <div>
          <h2>Football Court</h2>
          <p>105m × 68m</p>
        </div>

        {selectedZone && (
          <div className="football-selected">
            Selected: <strong>{selectedZone}</strong>
          </div>
        )}
      </div>

      {/* Field */}
      <div className="football-container">

        <div className="football-field">

          {/* =====================================
              LEFT HALF
          ====================================== */}

          <button
            className={`football-half left-half ${
              selectedZone === "Left Half" ? "selected" : ""
            }`}
            onClick={() => handleZoneClick("Left Half")}
          >
            <span className="half-label">LEFT HALF</span>
          </button>

          {/* =====================================
              RIGHT HALF
          ====================================== */}

          <button
            className={`football-half right-half ${
              selectedZone === "Right Half" ? "selected" : ""
            }`}
            onClick={() => handleZoneClick("Right Half")}
          >
            <span className="half-label">RIGHT HALF</span>
          </button>

          {/* =====================================
              FIELD MARKINGS
          ====================================== */}

          {/* Halfway Line */}
          <div className="halfway-line"></div>

          {/* Center Circle */}
          <div className="center-circle">
            <div className="center-spot"></div>
          </div>

          {/* Left Penalty Area */}
          <div className="penalty-area left-penalty">
            <div className="goal-area">
              <div className="penalty-spot"></div>
            </div>

            <div className="penalty-arc"></div>
          </div>

          {/* Right Penalty Area */}
          <div className="penalty-area right-penalty">
            <div className="goal-area">
              <div className="penalty-spot"></div>
            </div>

            <div className="penalty-arc"></div>
          </div>

          {/* =====================================
              GOALS
          ====================================== */}

          <div className="football-goal left-goal">
            <div className="goal-net"></div>
          </div>

          <div className="football-goal right-goal">
            <div className="goal-net"></div>
          </div>

          {/* =====================================
              CORNER ARCS
          ====================================== */}

          <div className="corner corner-tl"></div>
          <div className="corner corner-tr"></div>
          <div className="corner corner-bl"></div>
          <div className="corner corner-br"></div>

          {/* =====================================
              FIELD LABELS
          ====================================== */}

          <div className="field-label left-label">
            GOAL
          </div>

          <div className="field-label right-label">
            GOAL
          </div>

          {/* =====================================
              DIMENSIONS
          ====================================== */}

          <div className="field-length">
            <span>105 m</span>
          </div>

          <div className="field-width">
            <span>68 m</span>
          </div>

        </div>

      </div>

      {/* =====================================
          FIELD INFORMATION
      ====================================== */}

      <div className="football-info">

        <div className="football-info-card">
          <span>Field Length</span>
          <strong>105 m</strong>
        </div>

        <div className="football-info-card">
          <span>Field Width</span>
          <strong>68 m</strong>
        </div>

        <div className="football-info-card">
          <span>Penalty Area</span>
          <strong>16.5 m</strong>
        </div>

        <div className="football-info-card">
          <span>Goal</span>
          <strong>7.32 × 2.44 m</strong>
        </div>

      </div>

      {/* =====================================
          BOOKING
      ====================================== */}

      {selectedZone && (
        <div className="football-booking">

          <div>
            <span>Selected Area</span>
            <strong>{selectedZone}</strong>
          </div>

          <button
            onClick={() =>
              alert(`Booking ${selectedZone}`)
            }
          >
            Book Football Court
          </button>

        </div>
      )}

    </div>
  );
};

export default FootballCourt;
