// import { useFormik } from "formik";
// import * as Yup from "yup";
import Swal from "sweetalert2";
import { useNavigate, useLocation } from "react-router-dom";
import "./ConfirmFamily.css";

function ConfirmFamily() {
  const navigate = useNavigate();
  const location = useLocation();
  const { reservationFamilyData } = location.state || {};

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
      if (reservationFamilyData) {
        navigate("/reservation_modify", {
          // 上面一行需要改成/reservation_modify_family
          state: {
            reservationFamilyData,
          },
        });
      } else {
        navigate("/reservation_modify");
        // 上面一行需要改成/reservation_modify_family
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
      localStorage.removeItem("reservationFamilyData");
      navigate("/"); // 返回主页或其他页面
    }
  };

  const backToHome = async (e) => {
    e.preventDefault();
    const backToHomeResult = Swal.fire({
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
      localStorage.removeItem("reservationFamilyData");
    }
  };
  return (
    <div className="confirm-family-container">
      <div className="confirm-family-text-container">
        <h1 className="confirm-family-title">
          Your Family Reservation has been confirmed
        </h1>
        {console.log("confirmFamilyData========>", reservationFamilyData)}
        <p className="confirm-family-description">
          感谢您的预约！请确认以下信息是否正确。
        </p>
        <div className="family-details-info-container">
          {/* familyName */}
          <p className="family-details-name">
            <span className="family-details-title">Family&apos;s Name: </span>
            &nbsp;&nbsp;&nbsp;
            <span className="family-details-info">
              {reservationFamilyData?.familyName}
            </span>
          </p>
          {/* contactPerson */}
          <p className="family-details-name">
               <span className="family-details-title">Contact Person </span>&nbsp;&nbsp;&nbsp;
            <span className="family-details-info">
              {reservationFamilyData?.contactPerson}
            </span>
          </p>
          {/* contactInfo */}
          <p className="family-details-name">
            <span className="family-details-title">Contact Information: </span>
            &nbsp;&nbsp;&nbsp;
            <span className="family-details-info">
              {reservationFamilyData?.contactInfo}
            </span>
          </p>
          {/* preferredDate */}
          <p className="family-details-name">
            <span className="family-details-title">Preferred Date: </span>
            &nbsp;&nbsp;&nbsp;
            <span className="family-details-info">
              {reservationFamilyData?.preferredDate}
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

export default ConfirmFamily;
