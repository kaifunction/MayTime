import { createBrowserRouter } from 'react-router-dom';
import LoginFormPage from '../components/LoginFormPage';
import SignupFormPage from '../components/SignupFormPage';
import HomePage from '../components/HomePage/HomePage';
import Photos from '../components/Photos/Photo';
import Abouts from '../components/About/About';
import Reservation from '../components/Reservation/Reservation'
import ReservationModify from '../components/ReservationModify/ReservationModify';
import ReservationModifyFamily from '../components/ReservationModifyFamily';
import ReservationModifyPet from '../components/ReservationModifyPet/ReservationModifyPet';
import Confirm from '../components/Confirm';
import ConfirmPet from "../components/ConfirmPet";
import ConfirmFamily from '../components/ConfirmFamily';
import ContactUs from '../components/ContactUs';
import Layout from './Layout';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "login",
        element: <LoginFormPage />,
      },
      {
        path: "signup",
        element: <SignupFormPage />,
      },
      {
        path: "photos",
        element: <Photos />,
      },
      {
        path: "about_us",
        element: <Abouts />,
      },
      {
        path:"reservation",
        element: <Reservation />
      },
      {
        path:"confirm",
        element: <Confirm />
      },
      {
        path: "confirm_pet",
        element: <ConfirmPet />
      },
      {
        path: "confirm_family",
        element: <ConfirmFamily />
      },
      {
        path: "contact_us",
        element: <ContactUs />,
      },
      {
        path: "reservation_modify",
        element: <ReservationModify />
      },
      {
        path: "reservation_modify_family",
        element: <ReservationModifyFamily />
      },
      {
        path: "reservation_modify_pet",
        element: <ReservationModifyPet />
      },
      {
        path: "*",
        element: (
          <div style={{ textAlign: 'center', marginTop: '50px', fontSize: '24px', color: '#e80000' }}>
            <h1>404 Not Found</h1>
            <div style={{ fontSize: '18px', color: '#ff6a00', marginTop: '50px', letterSpacing: '.6px', lineHeight: '1.5' }}>
            <p>The page you are looking for does not exist.</p>
            <p>Please check the URL or return to the <a href="/" style={{textDecoration:'none', cursor:'pointer', color:'#e80000'}}>home page</a>.</p>
            </div>
          </div>
        ),
      }
    ],
  },
]);
