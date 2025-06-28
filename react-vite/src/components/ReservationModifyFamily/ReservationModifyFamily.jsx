import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate, useLocation } from "react-router-dom";
// import { useReducer } from "react";
import "./ReservationModifyFamily.css";

function ReservationModifyFamily() {
  const navigate = useNavigate();
  const location = useLocation();
  const { reservationFamilyData } = location.state || {};

  const formik = useFormik({
    initialValues: {
      familyName: reservationFamilyData?.familyName || "",
      contactPerson: reservationFamilyData?.contactPerson || "",
      contactInfo: reservationFamilyData?.contactInfo || "",
      preferredDate: reservationFamilyData?.preferredDate || "",
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      familyName: Yup.string()
        .required("Family Name is required.")
        .max(50, "Must be 50 characters or less"),
      contactPerson: Yup.string()
        .required("Contact Person is required.")
        .max(50, "Must be 50 characters or less"),
      contactInfo: Yup.string()
        .required("Contact Information is required.")
        .max(100, "Must be 100 characters or less"),
      preferredDate: Yup.date().required("Session Time is required."),
    }),
    onSubmit: (values) => {
      navigate("/confirm_family", {
        state: {
          reservationFamilyData: values,
        },
      });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="reservation-family-form">
      <h1 className="reservation-family-h1">Modify Your Reservation</h1>
      <div className="family-modify-form-container">
        <div className="family-modify-form-group">
          <label htmlFor="familyName" className="form-label">
            Family Name:<span style={{ color: "red" }}> *</span>
          </label>
          <input
            className={`form-input ${
              formik.touched.familyName && formik.errors.familyName
                ? "input-error"
                : ""
            }`}
            type="text"
            id="familyName"
            name="familyName"
            onChange={formik.handleChange}
            value={formik.values.familyName}
            onBlur={formik.handleBlur}
            placeholder="Enter your family name（请输入家庭名称）"
          />
          {formik.touched.familyName && formik.errors.familyName ? (
            <div className="form-error">{formik.errors.familyName}</div>
          ) : null}
        </div>

        <div className="family-modify-form-group">
          <label htmlFor="contactPerson" className="form-label">
            Contact Person:<span style={{ color: "red" }}> *</span>
          </label>
          <input
            className={`form-input ${
              formik.touched.contactPerson && formik.errors.contactPerson
                ? "input-error"
                : ""
            }`}
            type="text"
            id="contactPerson"
            name="contactPerson"
            onChange={formik.handleChange}
            value={formik.values.contactPerson}
            onBlur={formik.handleBlur}
            placeholder="Enter contact person（请输入联系人）"
          />
          {formik.touched.contactPerson && formik.errors.contactPerson ? (
            <div className="form-error">{formik.errors.contactPerson}</div>
          ) : null}
        </div>
        <div className="family-modify-form-group">
          <label htmlFor="contactInfo" className="form-label">
            Contact Information:<span style={{ color: "red" }}> *</span>
          </label>
          <input
            className={`form-input ${
              formik.touched.contactInfo && formik.errors.contactInfo
                ? "input-error"
                : ""
            }`}
            type="text"
            id="contactInfo"
            name="contactInfo"
            onChange={formik.handleChange}
            value={formik.values.contactInfo}
            onBlur={formik.handleBlur}
            placeholder="Enter contact information（请输入联系信息）"
          />
          {formik.touched.contactInfo && formik.errors.contactInfo ? (
            <div className="form-error">{formik.errors.contactInfo}</div>
          ) : null}
        </div>
        <div className="family-modify-form-group">
          <label htmlFor="preferredDate" className="form-label">
            Preferred Date:<span style={{ color: "red" }}> *</span>
          </label>
          <input
            className={`form-input ${
              formik.touched.preferredDate && formik.errors.preferredDate
                ? "input-error"
                : ""
            }`}
            type="date"
            id="preferredDate"
            name="preferredDate"
            onChange={formik.handleChange}
            value={formik.values.preferredDate}
            onBlur={formik.handleBlur}
          />
          {formik.touched.preferredDate && formik.errors.preferredDate ? (
            <div className="form-error">{formik.errors.preferredDate}</div>
          ) : null}
        </div>
      </div>
      <button type="submit" className="family-modify-submit-button">
        Submit
      </button>
    </form>
  );
}

export default ReservationModifyFamily;
