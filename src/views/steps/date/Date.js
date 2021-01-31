import React, { useState } from "react";
import Datetime from "react-datetime";
import moment from "moment";
import "./Date.css";

const Date = (props) => {
  const { setActivePage } = props;
  let reservationInfo = JSON.parse(localStorage.getItem("reservation-info") || '{}');
  const [startDate, setStartDate] = useState(
    reservationInfo
      .startDate ? moment(reservationInfo.startDate)
      .format("MM/DD/YYYY h:mm") : null
  );
  const [endDate, setEndDate] = useState(
    reservationInfo
      .endDate ? moment(reservationInfo.endDate)
      .format("MM/DD/YYYY h:mm") : null
  );
  const yesterday = moment().subtract(1, "day");
  const validCheckIn = (current) => {
    return current.isAfter(yesterday);
  };
  const validCheckOut = (current) => {
    return current.isAfter(startDate);
  };

  const moveNext = () => {
    if(!startDate || !endDate) {
      return;
    }

    reservationInfo.startDate = startDate;
    reservationInfo.endDate = endDate;

    localStorage.setItem("reservation-info", JSON.stringify(reservationInfo));
    setActivePage(2);
  };

  return (
    <>
      <div className="d-flex align-items-center">
        <span className="w-50 font-weight-bold">Check-in Tarihi:</span>
        <Datetime
          value={startDate}
          onChange={(date) =>
            setStartDate(date)
          }
          isValidDate={validCheckIn}
          dateFormat="MM/DD/YYYY"
          timeFormat="h:mm"
          key={"start-date"}
        />
      </div>
      <div className="mt-5 d-flex align-items-center">
        <span className="w-50 font-weight-bold">Check-out Tarihi:</span>
        <Datetime
          value={endDate}
          onChange={(date) =>
            setEndDate(date)
          }
          isValidDate={validCheckOut}
          dateFormat="MM/DD/YYYY"
          timeFormat="h:mm"
          key={"end-date"}
        />
      </div>
      <button
        type="button"
        className="btn btn-primary next-step-button"
        onClick={moveNext}
      >
        İleri
      </button>
    </>
  );
}

export default Date;
