// import { useFormik } from "formik";
// import * as Yup from "yup";
import { useNavigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import "./ConfirmPet.css";

function ConfirmPet() {
  const navigate = useNavigate();
  const location = useLocation();
  const { reservationPetData } = location.state || {};

  const modifyReservation = async (e) => {
    e.preventDefault();
    const modifyReservationResult = await Swal.fire({
      title: "Modify Reservation",
      text: "Do you want to modify this reservation?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, modify it!",
      cancelButtonText: "No, keep it",
      customClass: {
        popup: "modify-popup",
        icon: "modify-icon",
        title: "modify-title",
        confirmButton: "modify-confirm-btn",
        cancelButton: "modify-cancel-btn",
        htmlContainer: "modify-content",
      },
    });
    if (modifyReservationResult.isConfirmed) {
      if (reservationPetData) {
        navigate("/reservation_modify", {
          // 上面一行需要改成/reservation_modify_pet
          state: {
            reservationPetData,
          },
        });
      } else {
        navigate("/reservation_modify");
        // 上面一行需要改成/reservation_modify_pet
      }
    }
  };

  const cancelReservation = async (e) => {
    e.preventDefault();
    const cancelReservationResult = await Swal.fire({
      title: "Are you sure?",
      text: "Do you want to cancel this reservation?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, cancel it!",
      cancelButtonText: "No, keep it",
      customClass: {
        popup: "reserve-popup",
        icon: "reserve-icon",
        title: "reserve-title",
        confirmButton: "reserve-confirm-btn",
        cancelButton: "reserve-cancel-btn",
        htmlContainer: "reserve-content",
      },
    });
    if (cancelReservationResult.isConfirmed) {
      setTimeout(() => {
        Swal.fire({
          title: "Reservation Cancelled",
          text: "Your reservation has been cancelled successfully.",
          icon: "info",
          customClass: {
            popup: "cancel-popup",
            icon: "cancel-icon",
            title: "cancel-title",
            confirmButton: "cancel-confirm-btn",
            cancelButton: "cancel-cancel-btn",
            htmlContainer: "cancel-content",
          },
        });
      }, 500);
      localStorage.removeItem("reservationPetData");

      navigate("/");
    }
  };

  const backToHome = async (e) => {
    e.preventDefault();
    const backToHomeResult = await Swal.fire({
      title: "Back to Home",
      text: "Do you want to go back to the home page?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, go back!",
      cancelButtonText: "No, stay here",
      customClass: {
        popup: "back-popup",
        icon: "back-icon",
        title: "back-title",
        confirmButton: "back-confirm-btn",
        cancelButton: "back-cancel-btn",
        htmlContainer: "back-content",
      },
    });
    if (backToHomeResult.isConfirmed) {
      navigate("/");
      localStorage.removeItem("reservationPetData");
    }
  };

  return (
    <div className="confirm-pet-container">
      <div className="confirm-pet-text-container">
        <h1 className="confirm-pet-title">
          Your Pet Reservation has been confirmed
        </h1>
        {console.log("=======>", reservationPetData)}
        <p className="confirm-pet-description">
          感谢您的预约！请确认以下信息是否正确。
        </p>
        <div className="pet-details-info-container">
          {/* pet's name */}
          <p className="pet-details-name">
            <span className="pet-details-title">Pet&apos;s Name:</span>
            &nbsp;&nbsp;&nbsp;
            <span className="pet-details-info">
              {reservationPetData?.petName}
            </span>
          </p>
          {/* owner's name */}
          <p className="pet-details-name">
            <span className="pet-details-title">Owner&apos;s Name:</span>
            &nbsp;&nbsp;&nbsp;
            <span className="pet-details-info">
              {reservationPetData?.ownerName}
            </span>
          </p>
          {/* contact info */}
          <p className="pet-details-name">
            <span className="pet-details-title">Contact Info:</span>
            &nbsp;&nbsp;&nbsp;
            <span className="pet-details-info">
              {reservationPetData?.contactInfo}
            </span>
          </p>
          {/* preferred Date */}
          <p className="pet-details-name">
            <span className="pet-details-title">Preferred Date:</span>
            &nbsp;&nbsp;&nbsp;
            <span className="pet-details-info">
              {reservationPetData?.preferredDate}
            </span>
          </p>
        </div>
      </div>
      <div className="confirm-button-container">
        <div className="confirm-button-group">
          <button
            className="confirmed-button modify-but"
            onClick={modifyReservation}
          >
            Modify Reservation
          </button>
          <button
            className="confirmed-button cancel-but"
            onClick={cancelReservation}
          >
            Cancel Reservation
          </button>
        </div>
        <button onClick={backToHome} className="confirm-page-button">
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default ConfirmPet;
