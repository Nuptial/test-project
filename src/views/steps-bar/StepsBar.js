import "./StepsBar.css";

const StepsBar = (props) => {
  const { activePage } = props;

  return (
    <div className="steps-bar d-flex mt-5">
      <span className={`${activePage === 1 ? "active" : ""}`}>Tarih</span>
      <span className={`${activePage === 2 ? "active" : ""}`}>Oda</span>
      <span className={`${activePage === 3 ? "active" : ""}`}>Ödeme</span>
    </div>
  );
};

export default StepsBar;
