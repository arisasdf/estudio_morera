import { createBrowserRouter, RouterProvider } from "react-router";

import React from "react";
import ReactDOM from "react-dom/client";

import Home from "@components/pages/Home";
import Login from "@components/pages/Login";
import App from "@components/pages/App";
import Works from "@components/pages/app/Works";
import Students from "@javascript/components/pages/app/Students";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/app",
    Component: App,
    children: [
      { path: "works", Component: Works },
      { path: "students", Component: Students }
    ],
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(<RouterProvider router={router} />);
