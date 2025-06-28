import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate, useLocation } from "react-router-dom";
import "./ReservationModifyPet.css";

function ReservationModifyPet() {
  const navigate = useNavigate();
  const location = useLocation();
  const { reservationPetData } = location.state || {};

  const formik = useFormik({
    initialValues: {
      petName: reservationPetData?.petName || "",
      petType: reservationPetData?.petType || "",
      ownerName: reservationPetData?.ownerName || "",
      contactInfo: reservationPetData?.contactInfo || "",
      preferredDate: reservationPetData?.preferredDate || "",
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      petName: Yup.string()
        .required("Pet Name is required.")
        .max(50, "Pet Name cannot exceed 50 characters"),
      petType: Yup.string()
        .required("Pet Type is required.")
        .matches(
          /^[a-zA-Z\s]+$/,
          "Pet Type must contain only letters and spaces"
        )
        .max(50, "Pet Type cannot exceed 50 characters"),
      // 使用正则表达式确保宠物类型只包含字母和空格
      ownerName: Yup.string()
        .required("Owner Name is required.")
        .matches(
          /^[a-zA-Z\s]+$/,
          "Owner Name must contain only letters and spaces"
        )
        .max(50, "Owner Name cannot exceed 50 characters"),
      contactInfo: Yup.string()
        .required("Contact Information is required.")
        .max(100, "Must be 100 characters or less"),
      preferredDate: Yup.date().required("Preferred Date is required."),
    }),
    onSubmit: (values) => {
      navigate("/confirm_pet", {
        state: {
          reservationPetData: values,
        },
      });
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className="reservation-pet-form">
      <h1 className="reservation-pet-h1">Modify Your Reservation</h1>
      <div className="pet-modify-form-container">
        {/* pet name */}
        <div className="pet-modify-form-group">
          <label htmlFor="petName" className="form-label">
            Pet Name:<span style={{ color: "red" }}> *</span>
          </label>
          <input
            className={`form-input ${
              formik.touched.petName && formik.errors.petName
                ? "input-error"
                : ""
            }`}
            type="text"
            id="petName"
            name="petName"
            onChange={formik.handleChange}
            value={formik.values.petName}
            onBlur={formik.handleBlur}
            placeholder="Enter your pet's name（请输入宠物的名字）"
          />
          {formik.touched.petName && formik.errors.petName ? (
            <div className="form-error">{formik.errors.petName}</div>
          ) : null}
        </div>
        {/* pet type */}
        <div className="pet-modify-form-group">
          <label htmlFor="petType" className="form-label">
            Pet Type:<span style={{ color: "red" }}> *</span>
          </label>
          <input
            className={`form-input ${
              formik.touched.petType && formik.errors.petType
                ? "input-error"
                : ""
            }`}
            type="text"
            id="petType"
            name="petType"
            onChange={formik.handleChange}
            value={formik.values.petType}
            onBlur={formik.handleBlur}
            placeholder="Enter your pet's type（请输入宠物的类型）"
          />
          {formik.touched.petType && formik.errors.petType ? (
            <div className="form-error">{formik.errors.petType}</div>
          ) : null}
        </div>
        {/* owner name */}
        <div className="pet-modify-form-group">
          <label htmlFor="ownerName" className="form-label">
            Owner Name:<span style={{ color: "red" }}> *</span>
          </label>
          <input
            className={`form-input ${
              formik.touched.ownerName && formik.errors.ownerName
                ? "input-error"
                : ""
            }`}
            type="text"
            id="ownerName"
            name="ownerName"
            onChange={formik.handleChange}
            value={formik.values.ownerName}
            onBlur={formik.handleBlur}
            placeholder="Enter owner's name（请输入主人的名字）"
          />
          {formik.touched.ownerName && formik.errors.ownerName ? (
            <div className="form-error">{formik.errors.ownerName}</div>
          ) : null}
        </div>
        {/* contact info */}
        <div className="pet-modify-form-group">
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
        {/* preferred date */}
        <div className="pet-modify-form-group">
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
            placeholder="Select a date（请选择日期）"
          />
          {formik.touched.preferredDate && formik.errors.preferredDate ? (
            <div className="form-error">{formik.errors.preferredDate}</div>
          ) : null}
        </div>
      </div>
      <button type="submit" className="pet-modify-submit-button">
        Submit
        {/* Form and other components will go here */}
      </button>
    </form>
  );
}

export default ReservationModifyPet;
