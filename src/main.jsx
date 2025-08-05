import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Login from './pages/Login.jsx';
import Singup from './pages/Singup.jsx';
import { SignProvider } from './context/SignContext.jsx';
import Contries from './pages/Contries.jsx';
import Service from './pages/Service.jsx';
import Blog from './pages/Blog.jsx';
import Testimonial from './pages/Testimonial.jsx';
import Contacts from './pages/Contacts.jsx';
import ErrorPage from './pages/error-page.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/",
        element: <Home />
      },

      {
        path: "/about",
        element: <About />
      },

      {
        path: "/services",
        element: <Service />
      },

      {
        path: "/blog",
        element: <Blog />
      },

      {
        path: "/testimonial",
        element: <Testimonial />
      },

      {
        path: "/contact",
        element: <Contacts />
      },

    ]
  },

  {
    path: "/login",
    element: <Login />
  },

  {
    path: "/register",
    element: <Singup />
  },

  {
    path: "/contries",
    element: <Contries />
  },
]);

createRoot(document.getElementById('root')).render(
  <SignProvider>
    <RouterProvider router={router} />
  </SignProvider>
)

