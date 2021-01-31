import React, { useState } from "react";
import './App.css';
import StepsBar from './views/steps-bar/StepsBar';
import Room from './views/steps/room/Room';
import Date from './views/steps/date/Date';
import Payment from './views/steps/payment/Payment';

function App() {
  const [activePage, setActivePage] = useState(1);

  return (
    <div className="align-items-center">
      <div className="container wrapper d-flex flex-column align-items-center">
        <StepsBar activePage={activePage} />
        {activePage === 1 && <Date setActivePage={setActivePage} />}
        {activePage === 2 && <Room setActivePage={setActivePage} />}
        {activePage === 3 && <Payment setActivePage={setActivePage} />}
      </div>
    </div>
  );
}

export default App;
