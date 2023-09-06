import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import Main from './Components/Layout/Main.jsx';
import About from './Components/About/About.jsx';
import OrderReview from './Components/OrderReview/OrderReview.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Grandpa from './Components/Grandpa/Grandpa.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('tshirts.json')
      },
      {
        path: '/orders',
        element: <OrderReview></OrderReview>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path:'/grandpa',
        element:<Grandpa></Grandpa>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      }
    ]
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
