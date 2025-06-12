import "./ReservationPet.css";

function ReservationPet() {
  return (
    <div className="reservation-pet-container">
      <h1 className="reservation-pet-title">宠物写真预约</h1>
      <p className="reservation-pet-description">
        宠物写真是我们的一项特色服务。请填写以下信息以预约您的拍摄时间。
      </p>
      <form className="reservation-pet-form">
        <div className="pet-form-group">
          <div className="pet-reserve-form-group">
            <label htmlFor="petName" className="pet-form-label">
              宠物名称:
            </label>
            <input
              className="pet-form-input"
              type="text"
              id="petName"
              name="petName"
              required
            />
          </div>

          <div className="pet-reserve-form-group">
            <label htmlFor="ownerName" className="pet-form-label">
              主人姓名:
            </label>
            <input
              className="pet-form-input"
              type="text"
              id="ownerName"
              name="ownerName"
              required
            />
          </div>

          <div className="pet-reserve-form-group">
            <label htmlFor="contactInfo" className="pet-form-label">
              联系方式:
            </label>
            <input
              className="pet-form-input"
              type="text"
              id="contactInfo"
              name="contactInfo"
              required
            />
          </div>

          <div className="pet-reserve-form-group">
            <label htmlFor="preferredDate" className="pet-form-label">
              首选日期:
            </label>
            <input
              className="pet-form-input"
              type="date"
              id="preferredDate"
              name="preferredDate"
              required
            />
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
