import React from "react";
import "./featured.css";
const Featured = () => {
  return (
    <div className="featured">
      <div className="featured_item">
        <img
          src="https://cf.bstatic.com/xdata/images/city/600x600/684765.jpg?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o="
          alt="city"
          className="featured_image"
        />
        <div className="featured_titles">
          <h1>New Delhi</h1>
          <h2>124 properties</h2>
        </div>
      </div>
      <div className="featured_item">
        <img
          src="https://cf.bstatic.com/xdata/images/city/600x600/684534.jpg?k=d1fe86c22f2433f4e2dda14ddcbe80feb024b0fb30305e5684a1241fba5d4cff&o="
          alt="city"
          className="featured_image"
        />
        <div className="featured_titles">
          <h1>Banglore</h1>
          <h2>554 properties</h2>
        </div>
      </div>
      <div className="featured_item">
        <img
          src="https://cf.bstatic.com/xdata/images/city/600x600/971346.jpg?k=40eeb583a755f2835f4dcb6900cdeba2a46dc9d50e64f2aa04206f5f6fce5671&o="
          alt="city"
          className="featured_image"
        />
        <div className="featured_titles">
          <h1>Mumbai</h1>
          <h2>624 properties</h2>
        </div>
      </div>
      {/* <div className="featured_item">
        <img
          src="https://cf.bstatic.com/xdata/images/city/600x600/684730.jpg?k=e37b93d88c1fe12e827f10c9d6909a1def7349be2c68df5de885deaa4bc01ee3&o="
          alt="city"
          className="featured_image"
        />
        <div className="featured_titles">
          <h1>Chennai</h1>
          <h2>776 properties</h2>
        </div>
      </div>
      <div className="featured_item">
        <img
          src="https://cf.bstatic.com/xdata/images/city/600x600/684716.jpg?k=4c3f55236cffa6597afa0ef11a9f012636f535bf9cc6c0e2ed8142e01fa14766&o="
          alt="city"
          className="featured_image"
        />
        <div className="featured_titles">
          <h1>Manali</h1>
          <h2>176 properties</h2>
        </div>
      </div> */}
    </div>
  );
};

export default Featured;
