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
            type="text" id="familyName" name="familyName" required />
          </div>

          <div className="family-reserve-form-group">
            <label htmlFor="contactPerson" className="family-form-label">
              联系人姓名:<span style={{ color: "red" }}> *</span>
            </label>
            <input
            className="family-form-input"
              type="text"
              id="contactPerson"
              name="contactPerson"
              required
            />
          </div>

          <div className="family-reserve-form-group">
            <label htmlFor="contactInfo" className="family-form-label">
              联系方式:<span style={{ color: "red" }}> *</span>
            </label>
            <input className="family-form-input" type="text" id="contactInfo" name="contactInfo" required />
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
