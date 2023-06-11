import React, { useState } from "react";
import Navbar from "../../Components/navbar/Navbar";
import Header from "../../Components/header/Header";
import "./list.css";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
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
              <span>{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
                date[0].endDate,
                "dd/MM/yyyy"
              )}`}</span>
              <DateRange
                onChange={(item) => setDate([item.selection])}
                minDate={new Date()}
                moveRangeOnFirstSelection={false}
                ranges={date}
              />
            </div>
          </div>
          <div className="list_result"></div>
        </div>
      </div>
    </div>
  );
};

export default List;
