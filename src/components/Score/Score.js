import React from "react";
import "./Score.css";

const Score = props => {
  const progress = (props.total / props.goal) * 100;
  const statusClass = props.status.includes("Won") ? "won" : props.status.includes("Over") ? "lost" : "";

  return (
    <div className="gameScore">
      <div className="score-container">
        <span className="score-label">Score</span>
        <span className="score-value">{props.total}</span>
        <div className="score-divider"></div>
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
        <span className="score-goal">Goal: <span>{props.goal}</span></span>
      </div>
      {props.status && props.status.trim() && (
        <h3 className={`status ${statusClass}`}>{props.status}</h3>
      )}
    </div>
  );
};

export default Score;
