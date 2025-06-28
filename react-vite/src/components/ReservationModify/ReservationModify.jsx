import { useFormik } from "formik";
import * as Yup from "yup";
// import Swal from "sweetalert2";
import { useNavigate, useLocation } from "react-router-dom";
import { useReducer } from "react";
import { fetchAPI } from "../../api/api";
import "./ReservationModify.css";

function fetchAvailableTimes(date) {
  return fetchAPI(date);
}

function updateTimes(state, action) {
  if (action.type === "change_date") {
    return fetchAvailableTimes(action.date);
  }
  return state;
}

function ReservationModify() {
  const navigate = useNavigate();
  const location = useLocation();
  const { reservationData } = location.state || {};
  const [availableTimes, dispatch] = useReducer(updateTimes, [], () =>
    fetchAvailableTimes(new Date(reservationData?.date))
  );

  const formik = useFormik({
    initialValues: {
      name: reservationData?.name || "",
      email: reservationData?.email || "",
      phone: reservationData?.phone || "",
      date: reservationData?.date || "",

      guests: reservationData?.guests || "",
      babyBirthday: reservationData?.babyBirthday || "",
      babyGender: reservationData?.babyGender || "",
      sessionPeriod: reservationData?.sessionPeriod || "",
      zipcode: reservationData?.zipcode || "",
      address: reservationData?.address || "",
      message: reservationData?.message || "",
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Name is required.")
        .max(50, "Must be 50 characters or less"),
      email: Yup.string()
        .required("Email is required.")
        .email("Invalid email address"),
      phone: Yup.string()
        .required("Phone number is required.")
        .matches(/^[0-9]+$/, "Must be only digits.")
        .min(10, "Must be at least 10 digits")
        .max(15, "Must be 15 digits or less."),
      date: Yup.date().required("Date is required."),
      guests: Yup.number()
        .required("Please enter number of guests")
        .min(2, "At least baby and one parent.")
        .max(6, "Maximum 6 guests."),
      zipcode: Yup.string()
        .required("Zipcode is required.")
        .matches(/^\d{5}$/, "Zipcode must be exactly 5 digits."),
      address: Yup.string().required("Address is required."),
      babyBirthday: Yup.string().required("Baby's birthday is required."),
      // otherwise: Yup.string().notRequired()

      babyGender: Yup.string().required("Please select baby's gender."),
      // otherwise: Yup.string().notRequired()
      sessionPeriod: Yup.string().required("Please select a session period."),
      // otherwise: Yup.string().notRequired()
      message: Yup.string().max(500, "Must be 500 characters or less."),
    }),

    onSubmit: (values) => {
      navigate("/confirm", {
        state: {
          reservationData: values,
        },
      });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="modify-reservation-form">
      <h1 className="modify-h1">
        Modify Your Reservation
        {/* {console.log("=======>", reservationData)} */}
      </h1>
      <div className="modify-form-container">
        <div className="modify-form-group">
          {/* name */}
          <label htmlFor="res-name" className="form-label">
            Name<span style={{ color: "red" }}> *</span>
          </label>
          <input
            className={`form-input ${
              formik.touched.name && formik.errors.name ? "input-error" : ""
            }`}
            type="text"
            name="name"
            id="res-name"
            placeholder="Enter your name（请输入姓名）"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="form-error">{formik.errors.name}</div>
          ) : null}
        </div>

        {/* email */}
        <div className="modify-form-group">
          <label htmlFor="res-email" className="form-label">
            Email<span style={{ color: "red" }}> *</span>
          </label>
          <input
            className={`form-input ${
              formik.touched.email && formik.errors.email ? "input-error" : ""
            }`}
            type="email"
            name="email"
            id="res-email"
            placeholder="Enter your email（请输入邮箱）"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="form-error"> {formik.errors.email}</div>
          ) : null}
        </div>

        {/* phone */}
        <div className="modify-form-group">
          <label htmlFor="phone" className="form-label">
            Phone<span style={{ color: "red" }}> *</span>
          </label>
          <input
            className={`form-input ${
              formik.touched.phone && formik.errors.phone ? "input-error" : ""
            }`}
            type="text"
            id="phone"
            name="phone"
            placeholder="Enter your phone number（请输入电话号码）"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.phone && formik.errors.phone ? (
            <div className="form-error">{formik.errors.phone}</div>
          ) : null}
        </div>

        {/* date */}
        <div className="modify-form-group">
          <label htmlFor="res-date" className="form-label">
            Choose date<span style={{ color: "red" }}> *</span>
            {/* <span className="form-hint">（请选择预约日期）</span> */}
          </label>
          <input
            className={`form-input ${
              formik.touched.date && formik.errors.date ? "input-error" : ""
            }`}
            type="text"
            name="date"
            id="res-date"
            placeholder="Choose date（请选择预约日期）"
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => {
              if (!e.target.value) e.target.type = "text";
              formik.handleBlur(e);
            }}
            value={formik.values.date}
            onChange={formik.handleChange}
          />
          {formik.touched.date && formik.errors.date ? (
            <div className="form-error">{formik.errors.date}</div>
          ) : null}
        </div>

        {/* time */}
        {/* <div className="modify-form-group">
          <label htmlFor="res-time" className="form-label">
            Choose time<span style={{ color: "red" }}> *</span>
          </label>
          <select
            className={`form-select ${
              formik.touched.time && formik.errors.time ? "input-error" : ""
            }`}
            type="select"
            id="res-time"
            name="time"
            value={formik.values.time}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value="" disabled hidden>
              {" "}
              Please select a time（请选择时间）{" "}
            </option>
            {availableTimes?.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          {formik.touched.time && formik.errors.time ? (
            <div className="form-error time-error">{formik.errors.time}</div>
          ) : null}
        </div> */}

        {/* Session Period */}
        <div className="modify-form-group">
          <label htmlFor="sessionPeriod" className="form-label">
            Session Time
            <span style={{ color: "red" }}> *</span>
          </label>
          <select
            id="sessionPeriod"
            name="sessionPeriod"
            className={`form-select ${
              formik.touched.sessionPeriod && formik.errors.sessionPeriod
                ? "input-error"
                : ""
            }`}
            value={formik.values.sessionPeriod}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value="" disabled hidden>
              Select a session period（请选择拍摄时间段）
            </option>
            <option value="上午 9am - 12pm">上午 9am - 12pm</option>
            <option value="下午 1pm - 4pm">下午 1pm - 4pm</option>
            {/* <option value="evening">傍晚 5pm - 7pm</option> */}
          </select>
          {formik.touched.sessionPeriod && formik.errors.sessionPeriod ? (
            <div className="form-error" style={{marginTop:'.1px'}}>{formik.errors.sessionPeriod}</div>
          ) : null}
        </div>

        {/* Guests */}
        <div className="modify-form-group">
          <label htmlFor="guests" className="form-label">
            Number of guests<span style={{ color: "red" }}> *</span>
          </label>
          <input
            className={`form-input ${
              formik.touched.guests && formik.errors.guests ? "input-error" : ""
            }`}
            type="text"
            name="guests"
            id="guests"
            placeholder="How many guests（请输入人数）"
            value={formik.values.guests}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.guests && formik.errors.guests ? (
            <div className="form-error">{formik.errors.guests}</div>
          ) : null}
        </div>

        {/* Baby Birthday */}
        <div className="modify-form-group">
          <label htmlFor="babyBirthday" className="form-label">
            Baby's Birthday<span style={{ color: "red" }}> *</span>
          </label>
          <input
            className={`form-input ${
              formik.touched.babyBirthday && formik.errors.babyBirthday
                ? "input-error"
                : ""
            }`}
            type="text"
            name="babyBirthday"
            id="babyBirthday"
            placeholder="Enter baby's birthday（请输入宝宝的生日）"
            value={formik.values.babyBirthday}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.babyBirthday && formik.errors.babyBirthday ? (
            <div className="form-error">{formik.errors.babyBirthday}</div>
          ) : null}
        </div>

        {/* Baby Gender */}
        <div className="modify-form-group">
          <label htmlFor="babyGender" className="form-label">
            Baby&apos;s Gender
            <span style={{ color: "red" }}> *</span>
          </label>
          <select
            id="babyGender"
            name="babyGender"
            className={`form-select ${
              formik.touched.babyGender && formik.errors.babyGender
                ? "input-error"
                : ""
            }`}
            value={formik.values.babyGender}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value="" disabled hidden>
              Please select Baby&apos;s Gender（请选择宝宝性别）
            </option>
            <option value="男宝宝">男宝宝</option>
            <option value="女宝宝">女宝宝</option>
            {/* <option value="other">其他 / 不愿透露</option> */}
          </select>
          {formik.touched.babyGender && formik.errors.babyGender ? (
            <div className="form-error" style={{marginTop:'.1px'}}>{formik.errors.babyGender}</div>
          ) : null}
        </div>

        {/* zipcode */}
        <div className="modify-form-group">
          <label htmlFor="zipcode" className="form-label">
            Zipcode<span style={{ color: "red" }}> *</span>
          </label>
          <input
            type="text"
            id="zipcode"
            name="zipcode"
            className={`form-input ${
              formik.touched.zipcode && formik.errors.zipcode
                ? "input-error"
                : ""
            }`}
            placeholder="Enter your zipcode（请输入邮政编码）"
            value={formik.values.zipcode}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.zipcode && formik.errors.zipcode ? (
            <div className="form-error">{formik.errors.zipcode}</div>
          ) : null}
        </div>

        {/* Address */}
        <div className="modify-form-group">
          <label htmlFor="address" className="form-label">
            Address<span style={{ color: "red" }}> *</span>
          </label>
          <input
            className={`form-input ${
              formik.touched.address && formik.errors.address
                ? "input-error"
                : ""
            }`}
            type="text"
            name="address"
            id="address"
            placeholder="Enter your address（请输入地址）"
            value={formik.values.address}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.address && formik.errors.address ? (
            <div className="form-error">{formik.errors.address}</div>
          ) : null}
        </div>


        {/* message */}
        <div className="modify-form-group full-width">
          <label htmlFor="message" className="form-label">
            Special requests
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Enter your special requests...（请输入特殊要求）"
            className="form-textarea"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
      </div>
      <button type="submit" className="modifyform-submit-button">
        Submit
      </button>
    </form>
  );
}
export default ReservationModify;
