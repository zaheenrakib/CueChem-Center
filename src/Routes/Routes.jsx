import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import ContactUs from "../pages/ContactUs/ContactUs";
import Markets from "../pages/Markets/Markets";
import Innovation from "../pages/Innovation/Innovation";
import Product from "../pages/Product/Product";
import Sustainability from "../pages/Sustainability/Sustainability";
import News from "../pages/News/News";



export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
            path: "/",
            element: <Home />
        },
        {
          path: "/markets",
          element: <Markets />
        },
        {
          path: "/innovation",
          element: <Innovation />
        },
        {
          path: "/product",
          element: <Product />
        },
        {
          path : "/sustainability",
          element: <Sustainability />
        },
        {
          path: "/contact",
          element: <ContactUs />
        },
        {
          path: "/news",
          element: <News />
        }
      ]
    },
  ]);