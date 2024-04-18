import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
  ScrollRestoration,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./App.css";
import '@fontsource-variable/inter';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact"
import Work from "./pages/Work";
import Notebook from "./pages/Notebook";
import Error from "./components/Error";
import Privacy from "./pages/Privacy";
import Satlab from "./pages/Satlab";
import Cpd from "./pages/Cpd";
import Welearn from "./pages/Welearn";
import Kcd from "./pages/Kcd";
import Bct from "./pages/Bct";
import Drop from "./pages/Drop";


const AppLayout = () => {
  return (
    
<div className="root-layout">

     <Navbar />
     
     <Outlet />

     <Footer />

<ScrollRestoration />
  
</div>
  
  )
}


const router = createBrowserRouter([
  {
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
{
        path: "/",
        element: <Home />,
      },
      {
        path: "work",
        element: <Work />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "notebook",
        element: <Notebook />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "privacy",
        element: <Privacy />
      },
      
      {
        path: "work/satlab",
        element: <Satlab />
      },

      {
        path: "work/cpd",
        element: <Cpd />
      },
      {
        path: "work/welearn",
        element: <Welearn />
      },
      {
        path: "work/kcd",
        element: <Kcd />
      },
      {
        path: "work/bct",
        element: <Bct />
      },
      {
        path: "work/drop",
        element: <Drop />
      },

    ],
  },
 
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />


  
);