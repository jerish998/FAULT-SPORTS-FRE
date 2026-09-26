import React, { useState } from "react";
import "./SwimmingPool.css";

const lanes = Array.from({ length: 10 }, (_, index) => ({
  id: index + 1,
  name: `Lane ${index + 1}`,
}));

const SwimmingPool = () => {
  const [selectedLane, setSelectedLane] = useState(null);

  const handleLaneClick = (lane) => {
    setSelectedLane(lane);
  };

  return (
    <div className="swimming-page">

      <div className="pool-header">
        <div>
          <h2>Olympic Swimming Pool</h2>
          <p>50m × 25m • 10 Lanes</p>
        </div>

        {selectedLane && (
          <div className="selected-lane">
            Selected: <strong>Lane {selectedLane}</strong>
          </div>
        )}
      </div>

      <div className="pool-container">

        {/* Starting Blocks */}
        <div className="starting-blocks">
          {lanes.map((lane) => (
            <div
              key={lane.id}
              className="starting-block"
              title={`Starting Block ${lane.id}`}
            >
              {lane.id}
            </div>
          ))}
        </div>

        {/* Swimming Pool */}
        <div className="swimming-pool">

          {/* Pool Length Labels */}
          <div className="pool-label left-label">START</div>
          <div className="pool-label right-label">TURN</div>

          {/* Lanes */}
          <div className="lanes">
            {lanes.map((lane) => (
              <button
                key={lane.id}
                className={`swim-lane ${
                  selectedLane === lane.id ? "selected" : ""
                }`}
                onClick={() => handleLaneClick(lane.id)}
              >
                <div className="lane-number">
                  {lane.id}
                </div>

                <div className="lane-water">
                  <div className="racing-line"></div>

                  <div className="lane-rope"></div>

                  {/* 5m marker */}
                  <div className="marker marker-left"></div>

                  {/* Center marker */}
                  <div className="marker marker-center"></div>

                  {/* 5m marker */}
                  <div className="marker marker-right"></div>
                </div>
              </button>
            ))}
          </div>

          {/* Pool End Walls */}
          <div className="pool-end-wall pool-left-wall"></div>
          <div className="pool-end-wall pool-right-wall"></div>

          {/* Dimension labels */}
          <div className="length-dimension">
            <span>50 m</span>
          </div>

          <div className="width-dimension">
            <span>25 m</span>
          </div>
        </div>

        {/* Pool Information */}
        <div className="pool-info">
          <div>
            <span className="info-title">Pool Length</span>
            <strong>50 m</strong>
          </div>

          <div>
            <span className="info-title">Pool Width</span>
            <strong>25 m</strong>
          </div>

          <div>
            <span className="info-title">Lanes</span>
            <strong>10</strong>
          </div>

          <div>
            <span className="info-title">Lane Width</span>
            <strong>2.5 m</strong>
          </div>
        </div>
      </div>

      {/* Selected Lane */}
      {selectedLane && (
        <div className="lane-booking">
          <div>
            <span>Selected Lane</span>
            <strong>Lane {selectedLane}</strong>
          </div>

          <button
            onClick={() =>
              alert(`Booking Lane ${selectedLane}`)
            }
          >
            Book Lane
          </button>
        </div>
      )}

    </div>
  );
};

export default SwimmingPool;