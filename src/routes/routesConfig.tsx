import { createBrowserRouter, Navigate } from "react-router-dom";
import BreedDetail from "../pages/BreedDetail";
import Breeds from "../pages/Breeds";
import Home from "../pages/Home";
import App from "./App";
import ErrorPage from "../pages/ErrorPage"; 

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/cats-world" replace />, 
    errorElement: <ErrorPage />, 
  },
  {
    path: "/cats-world",
    element: <App />, 
    errorElement: <ErrorPage />, 
    children: [
      {
        path: "", 
        element: <Home />,
      },
      {
        path: "breeds",
        element: <Breeds />,
      },
      {
        path: "breeds/:breed_id",
        element: <BreedDetail />
      },
    ],
  },
  {
    path: "*", 
    element: <ErrorPage />, 
  },
]);
