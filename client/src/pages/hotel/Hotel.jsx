import React, { useState } from "react";
import "./hotel.css";
import Navbar from "../../Components/navbar/Navbar";
import Header from "../../Components/header/Header";
import MailList from "../../Components/mailLIst/MailList";
import Footer from "../../Components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocation,
} from "@fortawesome/free-solid-svg-icons";
const Hotel = () => {
  const hotelImages = [
    "https://cf.bstatic.com/xdata/images/hotel/max1280x900/468601976.jpg?k=1a5ed31736e3ca4ff771883f5a406a3cbd81f9dbdeb489903ef4ab1df364015c&o=&hp=1",
    "https://cf.bstatic.com/xdata/images/hotel/max1280x900/469313838.jpg?k=0a51e174691dacc3204dd945e8242aa606f126ecb369e6991977ce9c089a791c&o=&hp=1",
    "https://cf.bstatic.com/xdata/images/hotel/max1280x900/469313908.jpg?k=b289fbc202aa2cdb05bf054d37137ed9b02e6c53fe77125bc93093a6c3989c92&o=&hp=1",
    "https://cf.bstatic.com/xdata/images/hotel/max1280x900/469313790.jpg?k=2f3246d8c74871bfb2e4fc84db4c97002bb00e05315a6aeeb900140722974091&o=&hp=1",
    "https://cf.bstatic.com/xdata/images/hotel/max1280x900/469313804.jpg?k=56bdbe14cc815bf0c5cb7ed794d0c9411ecd9233cf539f467a754ac5781ed6d5&o=&hp=1",
    "https://cf.bstatic.com/xdata/images/hotel/max1280x900/469313952.jpg?k=363fae56d06c0171c72c22e7154e54a5b7770fc952db1dd80f3e4bdbe17838df&o=&hp=1",
  ];
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const handleOpen = (idx) => {
    setSlideNumber(idx);
    setOpen(true);
  };
  const handleMove = (dir) => {
    let newSlideNumber;
    if (dir === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }
    setSlideNumber(newSlideNumber);
  };
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotel_container">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              onClick={() => setOpen(false)}
              className="close"
              icon={faCircleXmark}
            />
            <FontAwesomeIcon
              onClick={() => handleMove("l")}
              className="arrow"
              icon={faCircleArrowLeft}
            />
            <div className="slider_wrapper">
              <img
                src={hotelImages[slideNumber]}
                alt="hotel photos"
                className="slider_img"
              />
            </div>
            <FontAwesomeIcon
              onClick={() => handleMove("r")}
              className="arrow"
              icon={faCircleArrowRight}
            />
          </div>
        )}
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
                  onClick={() => handleOpen(idx)}
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
