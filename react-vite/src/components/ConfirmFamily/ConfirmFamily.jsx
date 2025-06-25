import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import "./ConfirmFamily.css";

function ConfirmFamily() {
  return (
    <>
      <div className="confirm-family-container">
        <h1 className="confirm-family-title">家庭写真预约确认</h1>
        <p className="confirm-family-description">
          感谢您的预约！请确认以下信息是否正确。
        </p>
        <div className="confirm-family-details">
          {/* 在这里显示预约的详细信息 */}
          <p>姓名: </p>
          <p>联系方式: </p>
          <p>预约日期: </p>
        </div>
      </div>
    </>
  );
}


export default ConfirmFamily;
