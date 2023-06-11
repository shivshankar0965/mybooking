import { useState } from "react";
import {
  faBed,
  faPlane,
  faCar,
  faTaxi,
  faCalendarDays,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { format } from "date-fns";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRange } from "react-date-range";
import { useNavigate } from "react-router-dom";
import "./header.css";
const Header = ({ type }) => {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openDate, setOpenDate] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    child: 0,
    room: 1,
  });
  const [destination, setDestination] = useState("");
  const handleOptions = (group, ops) => {
    setOptions((prev) => {
      return {
        ...prev,
        [group]: ops === "inc" ? options[group] + 1 : options[group] - 1,
      };
    });
  };
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate("/hotels", { state: { destination, date, options } });
  };
  return (
    <div className="header">
      <div
        className={
          type === "list" ? "header_container list_mode" : "header_container"
        }
      >
        <div className="header_list">
          <div className="header_list_item active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="header_list_item">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="header_list_item">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className="header_list_item">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className="header_list_item">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </div>
        </div>
        {type !== "list" && (
          <>
            <h1 className="header_title">
              A lifetie of discounts? It's Genius.
            </h1>
            <p className="header_desc">
              Get rewarded for your travels - unlock instant savings of 10% or
              more with a free mybooking account
            </p>
            <button className="header_btn">Sign in / Register</button>
            <div className="header_search">
              <div className="header_search_item">
                <FontAwesomeIcon icon={faBed} className="header_icon" />
                <input
                  type="text"
                  placeholder="where are you going?"
                  className="header_search_input"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className="header_search_item">
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  className="header_icon"
                />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="header_search_text"
                >{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
                  date[0].endDate,
                  "dd/MM/yyyy"
                )}`}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                  />
                )}
              </div>
              <div className="header_search_item">
                <FontAwesomeIcon icon={faPerson} className="header_icon" />
                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className="header_search_text"
                >
                  {`${options.adult} adult - ${options.child} children - ${options.room} room`}
                </span>
                {openOptions && (
                  <div className="options">
                    <div className="option_item">
                      <span className="option_text">Adult</span>
                      <div className="option_counter">
                        <button
                          className="option_counter_btn"
                          disabled={options.adult <= 1}
                          onClick={() => handleOptions("adult", "dec")}
                        >
                          -
                        </button>
                        <span className="option_counter_number">
                          {options.adult}
                        </span>
                        <button
                          className="option_counter_btn"
                          onClick={() => handleOptions("adult", "inc")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="option_item">
                      <span className="option_text">Children</span>
                      <div className="option_counter">
                        <button
                          className="option_counter_btn"
                          onClick={() => handleOptions("child", "dec")}
                          disabled={options.child <= 0}
                        >
                          -
                        </button>
                        <span className="option_counter_number">
                          {options.child}
                        </span>
                        <button
                          className="option_counter_btn"
                          onClick={() => handleOptions("child", "inc")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="option_item">
                      <span className="option_text">room</span>
                      <div className="option_counter">
                        <button
                          className="option_counter_btn"
                          onClick={() => handleOptions("room", "dec")}
                          disabled={options.room <= 1}
                        >
                          -
                        </button>
                        <span className="option_counter_number">
                          {options.room}
                        </span>
                        <button
                          className="option_counter_btn"
                          onClick={() => handleOptions("room", "inc")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="header_search_item">
                <button onClick={handleSearch} className="header_btn">
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
