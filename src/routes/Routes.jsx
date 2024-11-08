import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";
import NewRoute from "../pages/NewRoute";
import GadgetsCards from './../components/GadgetsCards';
import GadgetDetail from "../components/GadgetDetail";


const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
           {
            path: "/",
            element: <Home></Home>,
            loader: () => fetch('../categories.json'),
            children: [
              {
                path: "/",
                element: <GadgetsCards></GadgetsCards>,
                loader: () => fetch('../gadget.json'),
               },
              {
                path: "/category/:gadgets",
                element: <GadgetsCards></GadgetsCards>,
                loader: () => fetch('../gadget.json'),
               },
              {
               path: 'gadget/:product_id',
               element: <GadgetDetail></GadgetDetail>,
               loader: () => fetch('/gadget.json')
              },
            ],
           },
           {
            path: "/statistics",
            element: <Statistics></Statistics>,
           },
           {
            path: "/dashboard",
            element: <Dashboard></Dashboard>,
           },
           {
            path: "/newRoute",
            element: <NewRoute></NewRoute>,
           },
      ],
    },
  ]);

  export default routes