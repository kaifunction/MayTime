import { useReducer } from "react";
import ReservationForm from "../ReservationForm";
import { submitAPI } from "../../api/api";
import { fetchAPI } from "../../api/api";
import "./Reservation.css";

function initializeTimes() {
  return fetchAvailableTimes(new Date());
}

function fetchAvailableTimes(date) {
  return fetchAPI(date);
}

// reducer
function updateTimes(state, action) {
  if (action.type === "change_date") {
    return fetchAvailableTimes(action.date);
  }
  return state;
}

function Reservation() {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  const submitForm = (formData) => {
    const isSuccess = submitAPI(formData);
    if (isSuccess) {
      navigate('/confirm');
    }
  };
  return (
    <div className="reservation-page-container">
      <h1 className="reservation-title-h1">
        <span style={{ fontWeight: "bold" }}>RESERVATION A SESSION</span>
      </h1>
      <ReservationForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </div>
  );
}

export default Reservation;
// export { initializeTimes, updateTimes };
