import "./ReservationPet.css";

function ReservationPet() {
  return (
     <div className="reservation-pet-container">
          <h1 className="reservation-pet-title">宠物写真预约</h1>
          <p className="reservation-pet-description">
          宠物写真是我们的一项特色服务。请填写以下信息以预约您的拍摄时间。
          </p>
          <form className="reservation-pet-form">
          <label htmlFor="petName">宠物名称:</label>
          <input type="text" id="petName" name="petName" required />

          <label htmlFor="ownerName">主人姓名:</label>
          <input type="text" id="ownerName" name="ownerName" required />

          <label htmlFor="contactInfo">联系方式:</label>
          <input type="text" id="contactInfo" name="contactInfo" required />

          <label htmlFor="preferredDate">首选日期:</label>
          <input type="date" id="preferredDate" name="preferredDate" required />

          <button type="submit" className="reservation-pet-submit-button">
               提交预约
          </button>
          </form>
     </div>
  );
}
export default ReservationPet;
