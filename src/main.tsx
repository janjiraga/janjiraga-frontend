import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, loader as homeLoader } from "./routes/home";
import { LoginRoute, action as loginAction } from "./routes/login";
import { RegisterRoute, action as registerAction } from "./routes/register";
import "./index.css";
import { AllEventsRoute, loader as eventsLoader } from "./routes/all-event";
import { Layout } from "./components/ui/shared/layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: homeLoader,
      },
      {
        path: "/login",
        element: <LoginRoute />,
        action: loginAction,
      },
      {
        path: "/register",
        element: <RegisterRoute />,
        action: registerAction,
      },
      {
        path: "/events",
        element: <AllEventsRoute />,
        loader: eventsLoader,
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
