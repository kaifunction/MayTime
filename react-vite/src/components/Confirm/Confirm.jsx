import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { MdCheckCircle } from "react-icons/md";
import { renderToString } from "react-dom/server";
import "./Confirm.css";

function Confirm() {
  const navigate = useNavigate();
  const location = useLocation();
  const { reservationData } = location.state || {};
  const iconHtml = renderToString(
    <MdCheckCircle className="swal-custom-icon" color="#ff6a00" />
  ); // size 可改大点，color 是绿色成功色

  const modifyReservation = () => {
    if (reservationData) {
      navigate("/reservation", { state: { reservationData } });
    } else {
      navigate("/reservation");
    }
  };

  const cancelReservation = async (e) => {
    e.preventDefault();
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "Do you want to cancel this reservation?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, cancel it!",
      cancelButtonText: "No, keep it",
      customClass: {
        popup: "reserve-popup", // 弹窗本体
        icon: "reserve-icon", // 图标
        title: "reserve-title", // 标题
        confirmButton: "reserve-confirm-btn", // 确认按钮
        cancelButton: "reserve-cancel-btn", // 取消按钮
        htmlContainer: "reserve-content", // 内容文本
      },
    });
    if (result.isConfirmed) {
      setTimeout(() => {
        Swal.fire({
          title: "Reservation Cancelled",
          text: "Your reservation has been cancelled successfully.",
          // icon: "info",
          iconHtml: iconHtml, // 使用渲染后的图标HTML
          customClass: {
            popup: "cancel-popup", // 弹窗本体
            icon: "cancel-icon",
            title: "cancel-title", // 标题
            confirmButton: "cancel-confirm-btn", // 确认按钮
            htmlContainer: "cancel-content", // 内容文本
          },
        });
      }, 500);
      // Clear the reservation data from localStorage
      localStorage.removeItem("reservationData");
      // Redirect to the home page

      navigate("/");
    }
  };

  const backToHome = async (e) => {
    e.preventDefault();
    const result = await Swal.fire({
      title: "Back to Home",
      text: "Your Reservation is confirmed. Do you want to go back to the home page?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, go back",
      cancelButtonText: "No, stay here",
      customClass: {
        popup: "back-popup", // 弹窗本体
        icon: "back-icon", // 图标
        title: "back-title", // 标题
        confirmButton: "back-confirm-btn", // 确认按钮
        cancelButton: "back-cancel-btn", // 取消按钮
        htmlContainer: "back-content", // 内容文本
      },
    });
    if (result.isConfirmed) {
      // Clear the reservation data from localStorage
      navigate("/");
      localStorage.removeItem("reservationData");
    }
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
          <p className="details-name">
            <span className="details-title">Name:</span>&nbsp;&nbsp;&nbsp;
            <span className="details-info">{reservationData?.name}</span>
          </p>
          {/* email */}
          <p className="details-name">
            <span className="details-title">Email:</span>&nbsp;&nbsp;&nbsp;
            <span className="details-info">{reservationData?.email}</span>
          </p>
          {/* phone */}
          <p className="details-name">
            <span className="details-title">Phone:</span>&nbsp;&nbsp;&nbsp;
            <span className="details-info">{reservationData?.phone}</span>
          </p>
          {/* date */}
          <p className="details-name">
            <span className="details-title">Date:</span>&nbsp;&nbsp;&nbsp;
            <span className="details-info">{reservationData?.date}</span>
          </p>
          {/* time */}
          <p className="details-name">
            <span className="details-title">Time:</span>&nbsp;&nbsp;&nbsp;
            <span className="details-info">{reservationData?.time}</span>
          </p>
          {/* guests */}
          <p className="details-name">
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

export default Confirm;
