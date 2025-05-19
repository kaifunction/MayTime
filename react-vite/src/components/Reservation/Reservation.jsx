import ReservationForm from "../ReservationForm"
import "./Reservation.css";

function Reservation() {
  return (
    <div className="reservation-page-container">
      <h1 className="reservation-title-h1">
        <span style={{ fontWeight: "bold" }}>RESERVATION</span>
      </h1>
      <ReservationForm />
    </div>
  );
}

export default Reservation;
