import "./About.css";

const About = () => {
  const handlePDFButtonClick = () => {
    window.open("/Quotation.jpg", "_blank");
  };

  const familyReservation = () => {
    window.location.href = "/reservation";
  }

  const petReservation = () => {
    window.location.href = "/reservation";
  }

  const babyReservation = () => {
    window.location.href = "/reservation";
  }
  return (
    <div className="contact-us-page-container">
      <h1 className="contact-us-page-h1">
        <span style={{ fontWeight: "bold" }}>ABOUT</span>{" "}
        <span style={{ fontWeight: "lighter" }}>US</span>
      </h1>

      <div>
        <button className="contact-us-page-button" type="button" onClick={handlePDFButtonClick}>
          PRICE LIST
        </button>
        <div className="about-summary-container">
          <h2 className="about-title">Turning Moments into Memories</h2>
          <p className="about-subtitle">
            Capturing love, life, and laughter — one photo at a time.
          </p>

          <ul className="about-services">
            <li>
              📸 <strong>Since May 2024</strong> - Over 1,000 memories captured
            </li>
            <li>
              👶 <strong>Baby Milestones</strong> - From newborns to
              one-year-olds
            </li>
            <li>
              🐾 <strong>Pet Portraits</strong> - Fun, candid moments of your
              furry friends
            </li>
            <li>
              💍 <strong>Wedding Stories</strong> - Indoor & outdoor magic
              across 20+ ceremonies
            </li>
            <li>
              👨‍👩‍👧 <strong>Family Bonds</strong> - 150+ family stories told
              through photos
            </li>
            <li>
              🤰 <strong>Maternity Art</strong> - Celebrating the beauty of
              motherhood
            </li>
          </ul>

          <div className="about-stats">
            <div className="stat-block">
              <h3>200+</h3>
              <p>Baby Milestone Sessions</p>
            </div>
            <div className="stat-block">
              <h3>60+</h3>
              <p>Family Story Projects</p>
            </div>
            <div className="stat-block">
              <h3>80+</h3>
              <p>Pet Portrait Collections</p>
            </div>
          </div>
        </div>
        <div className="quotation-container">
          <header className="quotation-header">
            {/* <h2 className="quotation-title">
              QUOTATION <span className="badge">报价表</span>
            </h2> */}
            <h4>Pricing Plans</h4>
            <h2>Photoshoot Plans to Capture Your Best Moments</h2>
          </header>

          <div className="card-container">
            {/* <!-- 卡片 1 --> */}
            <div className="card popular">
              <div className="card-header">
                <span className="card-tag">Package 01</span>
                <h2>宝宝上门布景写真</h2>
                <p className="sub">(周岁、半岁、百天、满月、新生儿)</p>
              </div>
              <div className="card-price">$399</div>
              <ul className="card-details">
                <li>60分钟，10张精修，2组造型</li>
                <li>$559 - 90分钟，15张精修，3组造型</li>
                <li>$699 - 120分钟，20张精修，3~4组造型</li>
              </ul>
              <p className="note">全家纪实跟拍，全家福</p>
              <button className="card-button" onClick={babyReservation}>立即预约</button>
            </div>

            {/* <!-- 卡片 2 --> */}
            <div className="card popular">
              <div className="card-header">
                <span className="card-tag">Package 02</span>
                <h2>宠物写真</h2>
                <p className="sub">Pet Portraits</p>
              </div>
              <div className="card-price">$299</div>
              <ul className="card-details">
                <li>60分钟，10张精修</li>
                <li>$459 - 90分钟，15张精修</li>
                <li>$599 - 120分钟，20张精修</li>
              </ul>
              <button className="card-button" onClick={petReservation}>立即预约</button>
            </div>

            {/* <!-- 卡片 3 --> */}
            <div className="card popular">
              <div className="card-header">
                {/* <span className="card-tag highlight">热门</span><br></br> */}
                <span className="card-tag">Package 03</span>
                <h2>亲子照 / 孕妇照</h2>
                <p className="sub">Family / Maternity Portraits</p>
              </div>
              <div className="card-price">$399</div>
              <ul className="card-details">
                <li>60分钟，10张精修</li>
                <li>$559 - 90分钟，15张精修</li>
                <li>$699 - 120分钟，20张精修</li>
              </ul>
              <button className="card-button" onClick={familyReservation}>立即预约</button>
            </div>
          </div>

          <footer className="tips-section">
            <h3>📌 预约流程 & 注意事项</h3>
            <ul>
              <li>· 定金预定，拍摄当天付尾款，1天内返底片，7天内返精修。</li>
              <li>· 客片默认允许发布，如介意请提前说明。</li>
              <li>· 拍摄定金200元，有效期12个月，不退不转。</li>
              <li>· 上门拍摄根据相应距离收费。</li>
              <li>· 所有拍摄道具、服装均已消毒清洁。</li>
              <li>· 所有底片为 jpg 格式。</li>
            </ul>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default About;
