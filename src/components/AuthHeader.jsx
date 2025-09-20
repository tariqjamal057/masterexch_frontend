import React from "react";

const AuthHeader = () => {
  return (
    <div className="body">
      <div className="top-bar">
        <div className="bets-btn">Bets</div>

        <div className="balance-box">
          Main <span className="highlight">USD($)0.00</span>
          <br />
          Exposure <span className="highlight">0.00</span>
        </div>

        <div className="actions">
          <div className="pill">+4</div>
          <div className="icon">⟳</div>
          <div className="icon">⚙</div>
        </div>
      </div>

      <div className="news-bar">
        <div className="mic">🎤</div>
        <div className="title">News</div>
        <div className="date">01/11/2021</div>
        <div className="scroll">
          <span>
            Welcome to 11wickets established • Welcome to 11wickets established
            •
          </span>
        </div>
      </div>
    </div>
  );
};

export default AuthHeader;
