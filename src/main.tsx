import React from "react";
import ReactDOM from "react-dom/client";
import { Home } from "./routes/home";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginRoute } from "./routes/login";
import { RegisterRoute } from "./routes/register";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <LoginRoute />,
      },
      {
        path: "/register",
        element: <RegisterRoute />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
