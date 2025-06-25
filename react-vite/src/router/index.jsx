import { createBrowserRouter } from 'react-router-dom';
import LoginFormPage from '../components/LoginFormPage';
import SignupFormPage from '../components/SignupFormPage';
import HomePage from '../components/HomePage/HomePage';
import Photos from '../components/Photos/Photo';
import Abouts from '../components/About/About';
import Reservation from '../components/Reservation/Reservation'
import ReservationModify from '../components/ReservationModify/ReservationModify';
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

    ],
  },
]);
