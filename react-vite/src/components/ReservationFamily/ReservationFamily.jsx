import "./ReservationFamily.css";

function ReservationFamily() {
  return (
    <div className="reservation-family-container">
      <h1 className="reservation-family-title">家庭写真预约</h1>
      <p className="reservation-family-description">
        家庭写真是我们的一项特色服务。请填写以下信息以预约您的拍摄时间。
      </p>
      <form className="reservation-family-form">
        <label htmlFor="familyName">家庭名称:</label>
        <input type="text" id="familyName" name="familyName" required />

        <label htmlFor="contactPerson">联系人姓名:</label>
        <input type="text" id="contactPerson" name="contactPerson" required />

        <label htmlFor="contactInfo">联系方式:</label>
        <input type="text" id="contactInfo" name="contactInfo" required />

        <label htmlFor="preferredDate">首选日期:</label>
        <input type="date" id="preferredDate" name="preferredDate" required />

        <button type="submit" className="reservation-family-submit-button">
          提交预约
        </button>
      </form>
    </div>
  );
}

export default ReservationFamily;
