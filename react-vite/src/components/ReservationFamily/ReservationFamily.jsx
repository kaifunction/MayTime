import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import "./ReservationFamily.css";

function ReservationFamily() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      familyName: "",
      contactPerson: "",
      contactInfo: "",
      preferredDate: "",
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
      navigate("/confirm", {
        state: {
          reservationData: values,
        },
      });
    },
  });
  return (
    <div className="reservation-family-container">
      <h1 className="reservation-family-title">家庭写真预约</h1>
      <p className="reservation-family-description">
        家庭写真是我们的一项特色服务。请填写以下信息以预约您的拍摄时间。
      </p>
      <form onSubmit={formik.handleSubmit} className="reservation-family-form">
        <div className="family-form-group">
          <div className="family-reserve-form-group">
            <label htmlFor="familyName" className="family-form-label">
              Name:<span style={{ color: "red" }}> *</span>
            </label>
            <input
              className={`family-form-input ${
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
              placeholder="Enter your name（请输入姓名）"
            />
            {formik.touched.familyName && formik.errors.familyName ? (
              <div className="form-error">{formik.errors.familyName}</div>
            ) : null}
          </div>

          <div className="family-reserve-form-group">
            <label htmlFor="contactPerson" className="family-form-label">
              Contact Person:<span style={{ color: "red" }}> *</span>
            </label>
            <input
              className={`family-form-input ${
                formik.touched.contactPerson && formik.errors.contactPerson
                  ? "input-error"
                  : ""
              }`}
              value={formik.values.contactPerson}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text"
              id="contactPerson"
              name="contactPerson"
              placeholder="Enter contact person name（请输入联系人姓名）"
            />
            {formik.touched.contactPerson && formik.errors.contactPerson ? (
              <div className="form-error">{formik.errors.contactPerson}</div>
            ) : null}
          </div>

          <div className="family-reserve-form-group">
            <label htmlFor="contactInfo" className="family-form-label">
              Contact Information:<span style={{ color: "red" }}> *</span>
            </label>
            <input
              className={`family-form-input ${
                formik.touched.contactInfo && formik.errors.contactInfo
                  ? "input-error"
                  : ""
              }`}
              value={formik.values.contactInfo}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text"
              id="contactInfo"
              name="contactInfo"
              placeholder="Enter contact information（请输入联系方式）"
            />
            {formik.touched.contactInfo && formik.errors.contactInfo ? (
              <div className="form-error">{formik.errors.contactInfo}</div>
            ) : null}
          </div>

          <div className="family-reserve-form-group">
            <label htmlFor="preferredDate" className="family-form-label">
              Session Time:<span style={{ color: "red" }}> *</span>
            </label>
            <input
              className={`family-form-input ${
                formik.touched.preferredDate && formik.errors.preferredDate
                  ? "input-error"
                  : ""
              }`}
              value={formik.values.preferredDate}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Select a date（请选择日期）"
              type="date"
              id="preferredDate"
              name="preferredDate"
            />
            {formik.touched.preferredDate && formik.errors.preferredDate ? (
              <div className="form-error">{formik.errors.preferredDate}</div>
            ) : null}
          </div>
        </div>
        <button type="submit" className="reservation-family-submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ReservationFamily;
