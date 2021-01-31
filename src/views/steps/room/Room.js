import React, { useState } from "react";
import moment from "moment";
import "./Room.css";

const Room = (props) => {
  const { setActivePage } = props;
  let reservationInfo = JSON.parse(
    localStorage.getItem("reservation-info") || "{}"
  );
  const [roomType, setRoomType] = useState(reservationInfo.roomType || null);
  const [view, setView] = useState(reservationInfo.view || null);
  const startDate =
    moment(
      JSON.parse(localStorage.getItem("reservation-info") || "{}").startDate
    ).format("MM/DD/YYYY h:mm") || "";
  const endDate =
    moment(
      JSON.parse(localStorage.getItem("reservation-info") || "{}").endDate
    ).format("MM/DD/YYYY h:mm") || "";

  const moveNext = () => {
    if(!roomType || !view) {
      return false;
    }
    
    reservationInfo.roomType = roomType;
    reservationInfo.view = view;

    localStorage.setItem("reservation-info", JSON.stringify(reservationInfo));
    setActivePage(3);
  };

  return (
    <div className="room-container">
      <div>
        <span>
          <span className="font-weight-bold">Check-in:</span> {startDate}{" "}
        </span>
      </div>
      <div>
        <span>
          <span className="font-weight-bold">Check-out:</span> {endDate}{" "}
        </span>
      </div>
      <div className="radio-wrapper d-flex">
        <span className="font-weight-bold">Oda Tipi:</span>
        <div>
          <label className="form-check-label" htmlFor="room1">
            Standart
          </label>
          <input
            className="form-check-input"
            type="radio"
            name="roomType"
            id="room1"
            checked={roomType === "standart"}
            onChange={() => setRoomType("standart")}
            value="standart"
          />
        </div>
        <div>
          <label className="form-check-label" htmlFor="room2">
            Deluxe
          </label>
          <input
            className="form-check-input"
            type="radio"
            name="roomType"
            id="room2"
            checked={roomType === "deluxe"}
            value="deluxe"
            onChange={() => setRoomType("deluxe")}
          />
        </div>
        <div>
          <label className="form-check-label" htmlFor="room3">
            Suit
          </label>
          <input
            className="form-check-input"
            type="radio"
            name="roomType"
            id="room3"
            checked={roomType === "suit"}
            value="suit"
            onChange={() => setRoomType("suit")}
          />
        </div>
      </div>
      <div className="radio-wrapper d-flex">
        <span className="font-weight-bold">Manzara Seçimi:</span>
        <div>
          <label className="form-check-label" htmlFor="view1">
            Deniz
          </label>
          <input
            className="form-check-input"
            type="radio"
            name="view"
            id="view1"
            checked={view === "deniz"}
            onChange={() => setView("deniz")}
            value="standart"
          />
        </div>
        <div>
          <label className="form-check-label" htmlFor="view2">
            Kara
          </label>
          <input
            className="form-check-input"
            type="radio"
            name="view"
            id="view2"
            checked={view === "kara"}
            value="kara"
            onChange={() => setView("kara")}
          />
        </div>
      </div>
      <button
        type="button"
        className="btn btn-secondary prev-step-button"
        onClick={() => setActivePage(1)}
      >
        Geri
      </button>
      <button
        type="button"
        className="btn btn-primary next-step-button"
        onClick={moveNext}
      >
        İleri
      </button>
    </div>
  );
};

export default Room;
