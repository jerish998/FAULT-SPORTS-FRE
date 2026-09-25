import React, { useState } from "react";
import "./VolleyballCourt.css";

const VolleyballCourt = () => {
  const [selectedZone, setSelectedZone] = useState(null);

  const handleZoneClick = (zone) => {
    setSelectedZone(zone);
  };

  return (
    <div className="volleyball-page">

      {/* Header */}
      <div className="volleyball-header">
        <div>
          <h2>Volleyball Court</h2>
          <p>18m × 9m Court</p>
        </div>

        {selectedZone && (
          <div className="selected-zone">
            Selected: <strong>{selectedZone}</strong>
          </div>
        )}
      </div>

      {/* Court */}
      <div className="volleyball-court">

        {/* Court Boundary */}
        <div className="court-boundary">

          {/* Team A */}
          <button
            className={`court-half team-a ${
              selectedZone === "Team A" ? "selected" : ""
            }`}
            onClick={() => handleZoneClick("Team A")}
          >
            <span className="team-label">TEAM A</span>

            {/* Attack Line */}
            <div className="attack-line"></div>
          </button>

          {/* Net */}
          <div className="net">
            <span>NET</span>
          </div>

          {/* Team B */}
          <button
            className={`court-half team-b ${
              selectedZone === "Team B" ? "selected" : ""
            }`}
            onClick={() => handleZoneClick("Team B")}
          >
            <span className="team-label">TEAM B</span>

            {/* Attack Line */}
            <div className="attack-line"></div>
          </button>

          {/* Center Line */}
          <div className="center-line"></div>

          {/* Service Zones */}
          <div className="service-zone service-a">
            Service Zone
          </div>

          <div className="service-zone service-b">
            Service Zone
          </div>

          {/* Court Dimensions */}
          <div className="dimension-length">
            <span>18 m</span>
          </div>

          <div className="dimension-width">
            <span>9 m</span>
          </div>

        </div>

        {/* Net Posts */}
        <div className="net-post left-post"></div>
        <div className="net-post right-post"></div>
      </div>

      {/* Court Information */}
      <div className="court-info">

        <div className="info-card">
          <span>Length</span>
          <strong>18 m</strong>
        </div>

        <div className="info-card">
          <span>Width</span>
          <strong>9 m</strong>
        </div>

        <div className="info-card">
          <span>Attack Zone</span>
          <strong>3 m</strong>
        </div>

        <div className="info-card">
          <span>Net</span>
          <strong>2.43 m</strong>
        </div>

      </div>

      {/* Booking */}
      {selectedZone && (
        <div className="volleyball-booking">

          <div>
            <span>Selected Area</span>
            <strong>{selectedZone}</strong>
          </div>

          <button
            onClick={() =>
              alert(`Booking ${selectedZone}`)
            }
          >
            Book Court
          </button>

        </div>
      )}

    </div>
  );
};

export default VolleyballCourt;
