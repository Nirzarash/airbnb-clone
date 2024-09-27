import React from "react";
import "../App.css";

function Hero() {
  return (
    <main className="main">
      <div className="photo-grid">
        <img
          src="/images/photo-grid.png"
          alt="Photo Grid"
          className="photo-grid-img"
        />
      </div>
      <h1 className="hero-header">Online Experiences</h1>
      <span>
        Join unique interactive activities led by one-of-a-kind hosts <br />
        all without leaving home.
      </span>
    </main>
  );
}

export default Hero;
