import { useFormik } from "formik"
import * as Yup from "yup";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import "./ReservationForm.css"

function ReservationForm() {
     const navigator = useNavigate();

     const formik = useFormik({
          initialValues: {
               name:'',
               email:'',
               phone:'',
               date:'',
               time:'',
               message:'',
          },
          enableReinitialize: true,
          validationSchema: Yup.object({
               name: Yup.string().required("Name is required.").max(50, "Must be 50 characters or less"),
               email: Yup.string().required("Email is required.").email("Invalid email address"),
               phone: Yup.string().required("Phone number is required.").matches(/^[0-9]+$/, "Must be only digits.").min(10, "Must be at least 10 digits").max(15, "Must be 15 digits or less."),
               date: Yup.date().required("Date is required."),
               time: Yup.string().required("Time is required."),
               message: Yup.string().max(500, "Must be 500 characters or less.")
          }),

          onSubmit: () => {
               navigator('/confirm')
          }
     });


     return(
          <form onSubmit={formik.handleSubmit}>
               <h3 className="form-h1">
                    Form
               </h3>
          </form>
     )
}

export default ReservationForm;
