import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayOuts from './Components/LayOuts/MainLayOuts';
import Home from './Pages/Home';
import Coffees from './Pages/Coffees';
import DashBoard from './Pages/DashBoard';
import CoffeeCards from './Components/CoffeeCards/CoffeeCards';
import CoffeeDetails from './Pages/CoffeeDetails';







const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOuts></MainLayOuts>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader : () => fetch('/public/Category.json'),
        children: [
          {
            path: "/",
            element: <CoffeeCards></CoffeeCards>,
            loader : () => fetch('/public/Coffes.json'),
          },
          {
            path: "/category/:categoryTab",
            element: <CoffeeCards></CoffeeCards>,
            loader : () => fetch('/public/Coffes.json'),
          },
        ]

      },
      {
        path: "/coffees",
        element:<Coffees></Coffees>,
        loader : () => fetch('/public/Coffes.json'),
      },
      {
        path: "/dashboard",
        element:<DashBoard></DashBoard>,
      },
      {
        path: "/coffee/:id",
        element:<CoffeeDetails></CoffeeDetails>,
        loader : () => fetch('/public/Coffes.json'),
      },

    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
