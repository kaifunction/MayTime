import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import "./ReservationPet.css";

function ReservationPet() {
  const navigator = useNavigate();

  const formik = useFormik({
    initialValues: {
      petName: "",
      ownerName: "",
      contactInfo: "",
      preferredDate: "",
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      petName: Yup.string()
        .required("Pet Name is required.")
        .max(50, "Must be 50 characters or less"),
      ownerName: Yup.string()
        .required("Owner's Name is required.")
        .max(50, "Must be 50 characters or less"),
      contactInfo: Yup.string()
        .required("Contact Information is required.")
        .max(100, "Must be 100 characters or less"),
      preferredDate: Yup.date().required("Session Time is required."),
    }),
    onSubmit: (values) => {
      navigator("/confirm_pet", {
        state: {
          reservationPetData: values,
          //   availableTimes: availableTimes,
        },
      });
    },
  });

  return (
    <div className="reservation-pet-container">
      <h1 className="reservation-pet-title">宠物写真预约</h1>
      <p className="reservation-pet-description">
        宠物写真是我们的一项特色服务。请填写以下信息以预约您的拍摄时间。
      </p>
      <form onSubmit={formik.handleSubmit} className="reservation-pet-form">
        <div className="pet-form-group">
          <div className="pet-reserve-form-group">
            <label htmlFor="petName" className="pet-form-label">
              Pet Name:
              <span style={{ color: "red" }}> *</span>
            </label>
            <input
              className={`pet-form-input ${
                formik.touched.petName && formik.errors.petName
                  ? "input-error"
                  : ""
              }`}
              type="text"
              id="petName"
              name="petName"
              value={formik.values.petName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter your pet's name（请输入宠物的名字）"
            />
            {formik.touched.petName && formik.errors.petName ? (
              <div className="form-error">{formik.errors.petName}</div>
            ) : null}
          </div>

          <div className="pet-reserve-form-group">
            <label htmlFor="ownerName" className="pet-form-label">
              Owner's Name:
              <span style={{ color: "red" }}> *</span>
            </label>
            <input
              className={`pet-form-input ${
                formik.touched.ownerName && formik.errors.ownerName
                  ? "input-error"
                  : ""
              }`}
              value={formik.values.ownerName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text"
              id="ownerName"
              name="ownerName"
              placeholder="Enter owner's name（请输入主人的名字）"
            />
            {formik.touched.ownerName && formik.errors.ownerName ? (
              <div className="form-error">{formik.errors.ownerName}</div>
            ) : null}
          </div>

          <div className="pet-reserve-form-group">
            <label htmlFor="contactInfo" className="pet-form-label">
              Contact Information:
              <span style={{ color: "red" }}> *</span>
            </label>
            <input
              className={`pet-form-input ${
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

          <div className="pet-reserve-form-group">
            <label htmlFor="preferredDate" className="pet-form-label">
              Session Time:
              <span style={{ color: "red" }}> *</span>
            </label>
            <input
              className={`pet-form-input ${
                formik.touched.preferredDate && formik.errors.preferredDate
                  ? "input-error"
                  : ""
              }`}
              value={formik.values.preferredDate}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="date"
              id="preferredDate"
              name="preferredDate"
            />
            {formik.touched.preferredDate && formik.errors.preferredDate ? (
              <div className="form-error">{formik.errors.preferredDate}</div>
            ) : null}
          </div>
        </div>

        <button type="submit" className="reservation-pet-submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}
export default ReservationPet;
