import "./About.css";

const About = () => {
  const handlePDFButtonClick = () => {
    window.open("/Quotation.jpg", "_blank");
  };
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

        {/* <p
          className="contact-us-page-p"
        >
          <strong style={{ color: "#ff6a00", fontSize: "18px" }}>W</strong>
          elcome to our photography studio, established in May 2024. We are
          dedicated to capturing life&apos;s most precious moments with a keen
          eye for detail and a passion for storytelling. Our team of
          professional photographers specializes in a diverse range of
          photography services to cater to your unique needs.
          <br />
          <br />
          <strong style={{ color: "#ff6a00", fontSize: "18px" }}>O</strong>ur
          pet photography sessions celebrate the joy and companionship that pets
          bring into our lives. We create a comfortable and playful environment
          to capture their true personalities and the bond they share with their
          owners. <br />
          <br />
          <strong style={{ color: "#ff6a00", fontSize: "18px" }}>F</strong>or
          couples embarking on the beautiful journey of marriage, we offer
          exquisite wedding photography, both indoor and outdoor. We understand
          the significance of this special day and are committed to capturing
          every heartfelt moment, from the intimate glances to the joyous
          celebrations. <br />
          <br />
          <strong style={{ color: "#ff6a00", fontSize: "18px" }}>O</strong>ur
          baby photography services are designed to document the milestones of
          your little one. Whether it&apos;s a one-year, six-month, daytime,
          full-month, or newborn session, we provide personalized setups to
          create timeless keepsakes of your baby&apos;s early years. <br />
          <br />
          <strong style={{ color: "#ff6a00", fontSize: "18px" }}>F</strong>amily
          photos are a testament to the love and connection shared among family
          members. We create warm and inviting settings to capture the genuine
          interactions and smiles that make your family unique. <br />
          <br />
          <strong style={{ color: "#ff6a00", fontSize: "18px" }}>E</strong>
          xpecting mothers can cherish their journey with our maternity
          photography. We celebrate the beauty of pregnancy and create elegant,
          artistic portraits that highlight this special time in your life.{" "}
          <br />
          <br />
          <strong style={{ color: "#ff6a00", fontSize: "18px" }}>A</strong>t our
          studio, we believe in creating not just photographs but cherished
          memories that you can treasure for a lifetime. Let us be a part of
          your story and help you capture the moments that matter most.
        </p> */}
        <div class="about-summary-container">
          <h2 class="about-title">Turning Moments into Memories</h2>
          <p class="about-subtitle">
            Capturing love, life, and laughter — one photo at a time.
          </p>

          <ul class="about-services">
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

          <div class="about-stats">
            <div class="stat-block">
              <h3>200+</h3>
              <p>Baby Milestone Sessions</p>
            </div>
            <div class="stat-block">
              <h3>60+</h3>
              <p>Family Story Projects</p>
            </div>
            <div class="stat-block">
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

          <div class="card-container">
            {/* <!-- 卡片 1 --> */}
            <div class="card popular">
              <div class="card-header">
                {/* <span class="card-tag highlight">热门</span><br></br> */}
                <span class="card-tag">Package 01</span>
                <h2>亲子照 / 孕妇照</h2>
                <p class="sub">Family / Maternity Portraits</p>
              </div>
              <div class="card-price">$399</div>
              <ul class="card-details">
                <li>60分钟，10张精修</li>
                <li>$559 - 90分钟，15张精修</li>
                <li>$699 - 120分钟，20张精修</li>
              </ul>
              <button class="card-button">立即预约</button>
            </div>

            {/* <!-- 卡片 2 --> */}
            <div class="card popular">
              <div class="card-header">
                <span class="card-tag">Package 02</span>
                <h2>宠物写真</h2>
                <p class="sub">Pet Portraits</p>
              </div>
              <div class="card-price">$299</div>
              <ul class="card-details">
                <li>60分钟，10张精修</li>
                <li>$459 - 90分钟，15张精修</li>
                <li>$599 - 120分钟，20张精修</li>
              </ul>
              <button class="card-button">立即预约</button>
            </div>

            {/* <!-- 卡片 3 --> */}
            <div class="card popular">
              <div class="card-header">
                <span class="card-tag">Package 03</span>
                <h2>宝宝上门布景写真</h2>
                <p class="sub">(周岁、半岁、百天、满月、新生儿)</p>
              </div>
              <div class="card-price">$399</div>
              <ul class="card-details">
                <li>60分钟，10张精修，2组造型</li>
                <li>$559 - 90分钟，15张精修，3组造型</li>
                <li>$699 - 120分钟，20张精修，3~4组造型</li>
              </ul>
              <p class="note">全家纪实跟拍，全家福</p>
              <button class="card-button">立即预约</button>
            </div>
          </div>

          <footer class="tips-section">
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
