import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, loader as homeLoader } from "./routes/home";
import { LoginRoute, action as loginAction } from "./routes/login";
import { RegisterRoute, action as registerAction } from "./routes/register";
import "./index.css";
import { AllEventsRoute, loader as eventsLoader } from "./routes/all-event";
import { Layout } from "./components/ui/shared/layout";
import {
  DetailEventRoute,
  loader as detailEventLoader,
} from "./routes/detail-event";
import { AboutRoute } from "./routes/about";
import { DashboardRoute } from "./routes/dashboard";
import { ProtectedRoute } from "../src/components/ui/shared/protected-route";

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
        path: "/events/:slug",
        element: <DetailEventRoute />,
        loader: detailEventLoader,
      },
      {
        path: "/detail",
        element: <AllEventsRoute />,
      },
      {
        path: "/about",
        element: <AboutRoute />,
      },
      {
        path: "/dashboard",
        element: (
          <ProtectedRoute>
            <DashboardRoute />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
