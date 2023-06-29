import React, { useState } from "react";
import "./hotel.css";
import Navbar from "../../Components/navbar/Navbar";
import Header from "../../Components/header/Header";
import MailList from "../../Components/mailLIst/MailList";
import Footer from "../../Components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation } from "@fortawesome/free-solid-svg-icons";
const Hotel = () => {
  const hotelImages = [
    "https://cf.bstatic.com/xdata/images/hotel/max1280x900/468601976.jpg?k=1a5ed31736e3ca4ff771883f5a406a3cbd81f9dbdeb489903ef4ab1df364015c&o=&hp=1",
    "https://cf.bstatic.com/xdata/images/hotel/max1280x900/468601976.jpg?k=1a5ed31736e3ca4ff771883f5a406a3cbd81f9dbdeb489903ef4ab1df364015c&o=&hp=1",
    "https://cf.bstatic.com/xdata/images/hotel/max1280x900/468601976.jpg?k=1a5ed31736e3ca4ff771883f5a406a3cbd81f9dbdeb489903ef4ab1df364015c&o=&hp=1",
    "https://cf.bstatic.com/xdata/images/hotel/max1280x900/468601976.jpg?k=1a5ed31736e3ca4ff771883f5a406a3cbd81f9dbdeb489903ef4ab1df364015c&o=&hp=1",
    "https://cf.bstatic.com/xdata/images/hotel/max1280x900/468601976.jpg?k=1a5ed31736e3ca4ff771883f5a406a3cbd81f9dbdeb489903ef4ab1df364015c&o=&hp=1",
    "https://cf.bstatic.com/xdata/images/hotel/max1280x900/468601976.jpg?k=1a5ed31736e3ca4ff771883f5a406a3cbd81f9dbdeb489903ef4ab1df364015c&o=&hp=1",
  ];
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const handleOpen = (idx) => {
    console.log(idx);
  };
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotel_container">
        {open && <div className="slider"></div>}
        <div className="hotel_wrapper">
          <button className="book_now_btn">Reserve or Book Now!</button>
          <h1 className="hotel_title">Grand Hotel</h1>
          <div className="hotel_address">
            <FontAwesomeIcon icon={faLocation} />
            <span>Elton St 125 new york</span>
          </div>
          <span className="hotel_distance">
            Excellent location - 500m from center
          </span>
          <span className="hotel_price_highlight">
            Book a stay over ₹5999 at this property and get a free airport taxi
          </span>
          <div className="hotel_images">
            {hotelImages.map((photos, idx) => (
              <div className="hotel_image_wrapper">
                <img
                  onClick={handleOpen}
                  className="hotel_image"
                  src={photos}
                  alt="hotel images"
                />
              </div>
            ))}
          </div>
          <div className="hotel_details">
            <div className="hotel_details_texts">
              <h1 className="hotel_title">Stays in the heart of Karakow</h1>
              <p className="hotel_desc">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Corrupti harum error unde voluptates, maxime facilis? Eius,
                dolorem fuga mollitia enim, nam hic ut nisi ipsum ea corporis
                esse labore? Saepe iusto excepturi nobis blanditiis labore quo
                consequuntur iure architecto natus fugit corporis expedita unde
                qui amet neque ipsa suscipit dolore porro, explicabo, corrupti
                aperiam quae? Ea, eaque? Voluptatum laborum neque ut debitis
                quas suscipit quia minus exercitationem? Voluptas fugiat porro
                facilis velit magnam voluptatem culpa quod rem explicabo
                asperiores! Voluptates, deleniti a alias nam similique mollitia
                animi facere delectus dolore quod porro explicabo repudiandae
                sit ducimus, in adipisci error cupiditate?
              </p>
            </div>
            <div className="hotel_detail_price">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>₹945</b> (9 nights)
              </h2>
              <button className="book_now">Reserve or Book Now!</button>
            </div>
          </div>
        </div>
      </div>

      <MailList />
      <Footer />
    </div>
  );
};

export default Hotel;
