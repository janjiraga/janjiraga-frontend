import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./routes/home";
import { LoginRoute } from "./routes/login";
import { RegisterRoute } from "./routes/register";
import "./index.css";
import { AllEventsRoute } from "./routes/all-event";

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
      {
        path: "/events",
        element: <AllEventsRoute />,
      },
      {
        path: "/detail",
        element: <AllEventsRoute />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
