import React from "react";
import "./searchitem.css";
const SerachItem = () => {
  return (
    <div className="search_item">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/445747305.webp?k=d94ee0a3c41a570f1772f03e3839f4fd0be6cff6999886da283d341899ceec3f&o="
        alt="hotel shots"
        className="search_item_img"
      />
      <div className="search_item_desc">
        <h1 className="si_title">Tower Street Apartments</h1>

        <span className="si_distance">500m from center</span>
        <span className="si_taxi_op">Free airport taxi</span>
        <span className="si_subtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="si_features">
          Entire studio - 1 bathroom - 21m<sup>2</sup> 1 full bed{" "}
        </span>
        <span className="si_cancel_op">Free cancellation</span>
        <span className="si_cancel_op_subtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="search_item_details">
        <div className="si_rating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="si_details_texts">
          <span className="si_price">₹5,999</span>
          <span className="si_tax_op">Includes taxes and fees</span>
          <button className="si_check_button">See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SerachItem;
