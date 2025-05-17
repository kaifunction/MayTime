import { createBrowserRouter } from 'react-router-dom';
import LoginFormPage from '../components/LoginFormPage';
import SignupFormPage from '../components/SignupFormPage';
import HomePage from '../components/HomePage/HomePage';
import Photos from '../components/Photos/Photo';
import Abouts from '../components/About/About';
import Reservation from '../components/Reservation/Reservation'
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
        path: "contact_us",
        element: <ContactUs />,
      }
    ],
  },
]);
