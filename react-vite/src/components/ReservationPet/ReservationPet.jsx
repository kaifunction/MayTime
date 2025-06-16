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
              Pet Name:
              <span style={{ color: "red" }}> *</span>
            </label>
            <input
              className="pet-form-input"
              type="text"
              id="petName"
              name="petName"
              placeholder="Enter your pet's name（请输入宠物的名字）"
              required
            />
          </div>

          <div className="pet-reserve-form-group">
            <label htmlFor="ownerName" className="pet-form-label">
              Owner's Name:
              <span style={{ color: "red" }}> *</span>
            </label>
            <input
              className="pet-form-input"
              type="text"
              id="ownerName"
              name="ownerName"
                 placeholder="Enter owner's name（请输入主人的名字）"
              required
            />
          </div>

          <div className="pet-reserve-form-group">
            <label htmlFor="contactInfo" className="pet-form-label">
              Contact Information:
              <span style={{ color: "red" }}> *</span>
            </label>
            <input
              className="pet-form-input"
              type="text"
              id="contactInfo"
              name="contactInfo"
                 placeholder="Enter contact information（请输入联系方式）"
              required
            />
          </div>

          <div className="pet-reserve-form-group">
            <label htmlFor="preferredDate" className="pet-form-label">
              Session Time:
              <span style={{ color: "red" }}> *</span>
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
