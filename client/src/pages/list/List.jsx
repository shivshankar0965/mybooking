import React, { useState } from "react";
import Navbar from "../../Components/navbar/Navbar";
import Header from "../../Components/header/Header";
import "./list.css";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SerachItem from "../../Components/searchItem/SerachItem";
const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="list_container">
        <div className="list_wrapper">
          <div className="list_search">
            <h1 className="list_search_title">Search</h1>
            <div className="ls_item">
              <label>Destination</label>
              <input type="text" placeholder="destination" />
            </div>
            <div className="ls_item">
              <label>Check-in date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "dd/MM/yyyy"
              )} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                />
              )}
            </div>
            <div className="ls_item">
              <label>Options</label>
              <div className="ls_options">
                <div className="ls_option_item">
                  <span className="ls_option_text">
                    Min Price <small>per night</small>
                  </span>
                  <input type="number" className="ls_option_input" />
                </div>
                <div className="ls_option_item">
                  <span className="ls_option_text">
                    Max Price <small>per night</small>
                  </span>
                  <input type="number" className="ls_option_input" />
                </div>
                <div className="ls_option_item">
                  <span className="ls_option_text">Adult</span>
                  <input
                    type="number"
                    className="ls_option_input"
                    placeholder={options.adult}
                  />
                </div>
                <div className="ls_option_item">
                  <span className="ls_option_text">Children</span>
                  <input
                    type="number"
                    className="ls_option_input"
                    placeholder={options.child}
                  />
                </div>
                <div className="ls_option_item">
                  <span className="ls_option_text">Room</span>
                  <input
                    type="number"
                    className="ls_option_input"
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="list_result">
            <SerachItem />
            <SerachItem />
            <SerachItem />
            <SerachItem />
            <SerachItem />
            <SerachItem />
            <SerachItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
