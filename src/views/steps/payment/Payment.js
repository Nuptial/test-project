import React, { useState } from 'react';
import moment from "moment";
import "./Payment.css";

const Payment = (props) => {
  const { setActivePage } = props;
  let reservationInfo = JSON.parse(
    localStorage.getItem("reservation-info") || "{}"
  );
  const [cardInfo, setCardInfo] = useState({
    name: reservationInfo.cardInfo ? reservationInfo.cardInfo.name : 'xxxxx xxx',
    number: reservationInfo.cardInfo ? reservationInfo.cardInfo.number : '0000000000000000',
    month: reservationInfo.cardInfo ? reservationInfo.cardInfo.month : 'xx',
    day: reservationInfo.cardInfo ? reservationInfo.cardInfo.day : 'xx',
    ccv: reservationInfo.cardInfo ? reservationInfo.cardInfo.ccv : 'CCV'
  });
  const startDate =
    moment(
      JSON.parse(localStorage.getItem("reservation-info") || "{}").startDate
    ).format("MM/DD/YYYY h:mm") || "";
  const endDate =
    moment(
      JSON.parse(localStorage.getItem("reservation-info") || "{}").endDate
    ).format("MM/DD/YYYY h:mm") || "";

  const onChange = (e,field) => {
    cardInfo[field] = e.target.value;

    setCardInfo({
      ...cardInfo
    })
  }

  const moveNext = () => {
    if(!cardInfo.name || !cardInfo.number || !cardInfo.month || !cardInfo.day || !cardInfo.ccv) {
      return false;
    }

    reservationInfo.cardInfo = cardInfo;

    localStorage.setItem("reservation-info", JSON.stringify(reservationInfo));

    alert('başarılı');
  }

  return (
    <div className="payment-container">
      <div className="pl-3">
        <span>
          <span className="font-weight-bold mr-2">Check-in:</span>
          {startDate}
        </span>
      </div>
      <div className="pl-3">
        <span>
          <span className="font-weight-bold mr-2">Check-out:</span>
          {endDate}
        </span>
      </div>
      <div className="pl-3">
        <span>
          <span className="font-weight-bold mr-2">Oda Tipi:</span>
          {reservationInfo.roomType}
        </span>
      </div>
      <div className="pl-3">
        <span>
          <span className="font-weight-bold mr-2">Manzara:</span>
          {reservationInfo.view}
        </span>
      </div>
      <div className="row">
        <div className="small-12 columns large-6">
          <div className="callout credit">
            <div className="row">
              <div className="small-6 columns">
                <h1 className="credit__bank">Bank</h1>
              </div>
            </div>
            <div className="row">
              <div className="column">
                <p className="credit__card-number">{cardInfo.number}</p>
                <span className="credit__ccv">{cardInfo.ccv}</span>
              </div>
              <div className="small-9 columns">
                <label>
                  Card Holder
                  <p className="credit__name">{cardInfo.name}</p>
                </label>
              </div>
              <div className="small-3 columns">
                <label>
                  Expires
                  <p className="credit__date">
                    {cardInfo.month} / {cardInfo.day}
                  </p>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="small-12 columns end large-6">
          <div className="callout margin-top50">
            <div className="row">
              <div className="small-4 columns">
                <label>
                  NAME
                  <input
                    type="text"
                    maxLength="25"
                    onChange={(event) => onChange(event, "name")}
                    value={cardInfo.name}
                  />
                </label>
              </div>
              <div className="small-4 columns end">
                <label>
                  NUMBER
                  <input
                    type="text"
                    maxLength="16"
                    onChange={(event) => onChange(event, "number")}
                    value={cardInfo.number}
                  />
                </label>
              </div>
            </div>
            <div className="row">
              <label className="column">EXPIRATION DATE</label>
              <div className="small-4 columns">
                <input
                  type="text"
                  maxLength="2"
                  onChange={(event) => onChange(event, "month")}
                  value={cardInfo.month}
                />
              </div>
              <div className="small-4 columns end">
                <input
                  type="text"
                  maxLength="2"
                  onChange={(event) => onChange(event, "day")}
                  value={cardInfo.day}
                />
              </div>
            </div>
            <div className="row">
              <div className="small-4 column">
                <label>
                  CCV
                  <input
                    type="text"
                    maxLength="3"
                    onChange={(event) => onChange(event, "ccv")}
                    value={cardInfo.ccv}
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        type="button"
        className="btn btn-secondary prev-step-button"
        onClick={() => setActivePage(2)}
      >
        Geri
      </button>
      <button
        type="button"
        className="btn btn-primary next-step-button"
        onClick={moveNext}
      >
        Ödeme Yap
      </button>
    </div>
  );
};

export default Payment;
