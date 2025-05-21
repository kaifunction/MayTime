import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import "./ReservationForm.css";

function ReservationForm(props) {
  const navigator = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      guests: "",
      message: "",
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
      time: Yup.string().required("Time is required."),
      guests: Yup.number()
        .required("Please enter number of guests")
        .min(2, "At least baby and one parent.")
        .max(6, "Maximum 6 guests."),
      message: Yup.string().max(500, "Must be 500 characters or less."),
    }),

    onSubmit: (values) => {
      navigator("/confirm", {
          state:{
               reservationData: values,
          }
      });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="reservation-form">
      {/* <h3 className="form-h1">
               Reserve a Session
               </h3> */}
      <div className="form-group">
        <div className="reserve-form-group">
          {/* name */}
          <label htmlFor="res-name" className="form-label">
            Name<span style={{ color: "red" }}> *</span>
          </label>
          <input
            className={`form-input ${formik.touched.name && formik.errors.name ? 'input-error' : ''}`}
            type="text"
            name="name"
            id="res-name"
            placeholder="Enter your name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="form-error">{formik.errors.name}</div>
          ) : null}
        </div>

        {/* email */}
        <div className="reserve-form-group">
          <label htmlFor="res-email" className="form-label">
            Email<span style={{ color: "red" }}> *</span>
          </label>
          <input
            className={`form-input ${formik.touched.email && formik.errors.email ? 'input-error' : ''}`}
            type="email"
            name="email"
            id="res-email"
            placeholder="Enter your email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="form-error"> {formik.errors.email}</div>
          ) : null}
        </div>

        {/* phone */}
        <div className="reserve-form-group">
          <label htmlFor="phone" className="form-label">
            Phone<span style={{ color: "red" }}> *</span>
          </label>
          <input
            className={`form-input ${formik.touched.phone && formik.errors.phone ? 'input-error' : ''}`}
            type="text"
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.phone && formik.errors.phone ? (
            <div className="form-error">{formik.errors.phone}</div>
          ) : null}
        </div>

        {/* date */}
        <div className="reserve-form-group">
          <label htmlFor="res-date" className="form-label">
            Choose date<span style={{ color: "red" }}> *</span>
          </label>
          <input
            className={`form-input ${formik.touched.date && formik.errors.date ? 'input-error' : ''}`}
            type="date"
            name="date"
            id="res-date"
            value={formik.values.date}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.date && formik.errors.date ? (
            <div className="form-error">{formik.errors.date}</div>
          ) : null}
        </div>

        {/* time */}
        <div className="reserve-form-group">
          <label htmlFor="res-time" className="form-label">
            Choose time<span style={{ color: "red" }}> *</span>
          </label>
          <select
            className={`form-select ${formik.touched.time && formik.errors.time ? 'input-error' : ''}`}
            type="select"
            id="res-time"
            name="time"
            value={formik.values.time}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value="" disabled hidden>
              {" "}
              Please select a time
            </option>
            {props.availableTimes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          {formik.touched.time && formik.errors.time ? (
            <div className="form-error time-error">{formik.errors.time}</div>
          ) : null}
        </div>

        {/* Guests */}
        <div className="reserve-form-group">
          <label htmlFor="guests" className="form-label">
            Number of guests<span style={{ color: "red" }}> *</span>
          </label>
          <input
            className={`form-input ${formik.touched.guests && formik.errors.guests ? 'input-error' : ''}`}
            type="text"
            name="guests"
            id="guests"
            placeholder="How many guests"
            value={formik.values.guests}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.guests && formik.errors.guests ? (
            <div className="form-error">{formik.errors.guests}</div>
          ) : null}
        </div>

        {/* message */}
        <div className="reserve-form-group full-width">
          <label htmlFor="message" className="form-label">
            Special requests
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Enter your special requests..."
            className="form-textarea"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
      </div>
      <button type="submit" className="form-submit-button">
        Submit
      </button>
    </form>
  );
}

export default ReservationForm;
