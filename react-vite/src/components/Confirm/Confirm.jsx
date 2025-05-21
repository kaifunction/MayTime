import { useLocation, useNavigate } from "react-router-dom";
import "./Confirm.css";

function Confirm() {
  const navigator = useNavigate();
  const location = useLocation();
  const { reservationData } = location.state || {};

  const backToHome = () => {
    navigator("/");
  };

  return (
    <div className="confirm-container">
      <div className="confirm-text-container">
        <h1 className="confirm-h1">
          Your Reservation has been confirmed
          {console.log("=======>", reservationData)}
        </h1>
        <div className="details-info-container">
          {/* name */}
          <p>
            <span className="details-title">Name:</span>&nbsp;&nbsp;&nbsp;
            <span className="details-info">{reservationData?.name}</span>
          </p>
          {/* email */}
          <p>
            <span className="details-title">Email:</span>&nbsp;&nbsp;&nbsp;
            <span className="details-info">{reservationData?.email}</span>
          </p>
          {/* phone */}
          <p>
            <span className="details-title">Phone:</span>&nbsp;&nbsp;&nbsp;
            <span className="details-info">{reservationData?.phone}</span>
          </p>
          {/* date */}
          <p>
            <span className="details-title">Date:</span>&nbsp;&nbsp;&nbsp;
            <span className="details-info">{reservationData?.date}</span>
          </p>
          {/* time */}
          <p>
            <span className="details-title">Time:</span>&nbsp;&nbsp;&nbsp;
            <span className="details-info">{reservationData?.time}</span>
          </p>
          {/* guests */}
          <p>
            <span className="details-title">Guests:</span>&nbsp;&nbsp;&nbsp;
            <span className="details-info">{reservationData?.guests}</span>
          </p>
          {/* message */}
          {reservationData?.message ? (
            <p className="details-message-full-width">
              <span className="details-title">Message:</span>&nbsp;&nbsp;&nbsp;
              <span className="details-info">{reservationData?.message}</span>
            </p>
          ) : null}
        </div>
      </div>
      <div className="confirm-button-container">
        <button className="confirmed-button modify-but">
          Modify Reservation
        </button>
        <button className="confirmed-button cancel-but">
          Cancel Reservation
        </button>
        <button onClick={backToHome} className="confirm-page-button">
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default Confirm;
