import { useReducer, useState } from "react";
import ReservationForm from "../ReservationForm";
import ReservationPet from "../ReservationPet";
import ReservationFamily from "../ReservationFamily";
import { submitAPI } from "../../api/api";
import { fetchAPI } from "../../api/api";
import { useNavigate, useLocation } from "react-router-dom";
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
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const typeFromUrl = queryParams.get("type");

  const [selectedType, setSelectedType] = useState(typeFromUrl || null);
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  const submitForm = (formData) => {
    const isSuccess = submitAPI(formData);
    if (isSuccess) {
      navigate("/confirm");
    }
  };

  return (
    <div className="reservation-page-container">
      <h1 className="reservation-title-h1">
        <span style={{ fontWeight: "bold" }}>RESERVE</span>{" "}
        <span style={{ fontWeight: "lighter" }}>A SESSION</span>
      </h1>
      {/* <ReservationForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      /> */}
      {!selectedType && (
        <div className="photography-type-selection">
          <h2 className="select-type-title">请选择摄影类型：</h2>
          <div className="type-buttons">
            <button onClick={() => setSelectedType("baby")} className="baby-button reservation-button">
              宝宝上门布景写真
            </button>
            <button onClick={() => setSelectedType("family")} className="family-button reservation-button">
              亲子照 / 孕妇照
            </button>
            <button onClick={() => setSelectedType("pet")} className="pet-button reservation-button">宠物写真</button>
          </div>
        </div>
      )}

      {/* 如果已选择类型，渲染预约表单 */}
      {selectedType === "baby" && (
        <>
          <button onClick={() => setSelectedType(null)} className="back-button">
            ← Back（返回选择摄影类型）
          </button>
          {/* <h3 className="baby-title">宝宝上门布景写真预约</h3>
          <p className="baby-description">
            宝宝上门布景写真是我们的一项特色服务。请填写以下信息以预约您的拍摄时间。
          </p> */}
          <ReservationForm
            availableTimes={availableTimes}
            dispatch={dispatch}
            submitForm={submitForm}
            selectedType={selectedType}
          />
        </>
      )}
      {selectedType === "family" && (
        <>
          <button onClick={() => setSelectedType(null)} className="back-button">
            ← Back（返回选择摄影类型）
          </button>
          {/* <h3 className="family-title">
            亲子照 / 孕妇照预约
          </h3>
          <p className="family-description">
            亲子照和孕妇照是我们最受欢迎的摄影类型之一。请填写以下信息以预约您的拍摄时间。
          </p> */}
          <ReservationFamily />
          {/* <ReservationForm
            availableTimes={availableTimes}
            dispatch={dispatch}
            submitForm={submitForm}
            selectedType={selectedType}
          /> */}
        </>
      )}
      {selectedType === "pet" && (
        <>
          <button onClick={() => setSelectedType(null)} className="back-button">
            ← Back（返回选择摄影类型）
          </button>
          {/* <h3 className="pet-title">宠物写真预约</h3>
          <p className="pet-description">
            宠物写真是我们的一项特色服务。请填写以下信息以预约您的拍摄时间。
          </p> */}
          <ReservationPet />
        </>
      )}
    </div>
  );
}

export default Reservation;
// export { initializeTimes, updateTimes };
