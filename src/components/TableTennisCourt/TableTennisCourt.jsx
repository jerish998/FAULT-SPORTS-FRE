import React, { useState } from "react";
import "./TableTennisCourt.css";

const TableTennisCourt = () => {
  const [selectedArea, setSelectedArea] = useState(null);

  const handleSelect = (area) => {
    setSelectedArea(area);
  };

  return (
    <div className="table-tennis-page">
      {/* Header */}
      <div className="table-tennis-header">
        <span className="table-tennis-badge">Table Tennis</span>

        <h1>Table Tennis Court</h1>

        <p>Select a side of the table</p>
      </div>

      {/* Table */}
      <div className="table-wrapper">
        <div className="table-tennis-table">

          {/* Outer table border */}
          <div className="table-border" />

          {/* Center line */}
          <div className="table-center-line" />

          {/* Net */}
          <div className="table-net">
            <span>NET</span>
          </div>

          {/* Net posts */}
          <div className="table-net-post left-net-post" />
          <div className="table-net-post right-net-post" />

          {/* Player areas */}
          <button
            className="table-area player-one"
            onClick={() => handleSelect("Player 1")}
          >
            <span>Player 1</span>
          </button>

          <button
            className="table-area player-two"
            onClick={() => handleSelect("Player 2")}
          >
            <span>Player 2</span>
          </button>

          {/* Singles center marks */}
          <div className="center-mark top-mark" />
          <div className="center-mark bottom-mark" />
        </div>
      </div>

      {/* Selection */}
      <div className="table-info">
        {selectedArea ? (
          <p>
            Selected: <strong>{selectedArea}</strong>
          </p>
        ) : (
          <p>Select a side of the table</p>
        )}
      </div>

      {/* Game Information */}
      <div className="game-info">
        <div>
          <span>Game Type</span>
          <strong>Singles</strong>
        </div>

        <div>
          <span>Table</span>
          <strong>Table 01</strong>
        </div>

        <div>
          <span>Status</span>
          <strong className="available">Available</strong>
        </div>
      </div>
    </div>
  );
};

export default TableTennisCourt;