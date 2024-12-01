import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import Banner from "./components/Banner.js";
import { createBrowserRouter,RouterProvider, Outlet} from "react-router-dom";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import RestaurantMenu from "./components/RestaurantMenu.js";



const AppLayout = () =>(
     <>
     <Header />
     <Outlet />
     </>
)

//routing config

const appRouter = createBrowserRouter([
     {
       path:"/",
       element: <AppLayout/>,
       children:[
          {
               path: "/",
               element:<Body />

          },
             {
               path:"/about",
               element:<About />
             },
             {
               path:"/contact",
               element:<Contact />
             },
             {
               path:"/restaurants/:id",
               element:<RestaurantMenu />
             }
       ],

       errorElement:<Error />
     }
     
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router ={appRouter} />);