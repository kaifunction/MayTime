import { useFormik } from "formik";
import * as Yup from "yup";
import "./ReservationFamily.css";

function ReservationFamily() {
  return (
    <div className="reservation-family-container">
      <h1 className="reservation-family-title">家庭写真预约</h1>
      <p className="reservation-family-description">
        家庭写真是我们的一项特色服务。请填写以下信息以预约您的拍摄时间。
      </p>
      <form className="reservation-family-form">
        <div className="family-form-group">
          <div className="family-reserve-form-group">
            <label htmlFor="familyName" className="family-form-label">
              Name:<span style={{ color: "red" }}> *</span>
            </label>
            <input className="family-form-input"
            type="text" id="familyName" name="familyName" placeholder="Enter your name（请输入姓名）" required />
          </div>

          <div className="family-reserve-form-group">
            <label htmlFor="contactPerson" className="family-form-label">
              Contact Person:<span style={{ color: "red" }}> *</span>
            </label>
            <input
            className="family-form-input"
              type="text"
              id="contactPerson"
              name="contactPerson"
              placeholder="Enter contact person name（请输入联系人姓名）"
              required
            />
          </div>

          <div className="family-reserve-form-group">
            <label htmlFor="contactInfo" className="family-form-label">
              Contact Information:<span style={{ color: "red" }}> *</span>
            </label>
            <input className="family-form-input" type="text" id="contactInfo" name="contactInfo" placeholder="Enter contact information（请输入联系方式）" required />
          </div>

          <div className="family-reserve-form-group">
            <label htmlFor="preferredDate" className="family-form-label">
              Session Time:<span style={{ color: "red" }}> *</span>
            </label>
            <input
            className="family-form-input"
              type="date"
              id="preferredDate"
              name="preferredDate"
              required
            />
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
