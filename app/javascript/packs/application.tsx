import { createBrowserRouter, RouterProvider } from "react-router";

import React from "react";
import ReactDOM from "react-dom/client";

import Home from "@components/pages/Home";
import Login from "@components/pages/Login";
import App from "@components/pages/App";
import Works from "@javascript/components/pages/app/works/Works";
import NewWork from "@javascript/components/pages/app/works/NewWork";
import Work from "@javascript/components/pages/app/works/Work";
import Students from "@javascript/components/pages/app/Students";
import Dashboard from "@javascript/components/pages/app/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "login",
    Component: Login,
  },
  {
    path: "app",
    Component: App,
    children: [
      { index: true, Component: Dashboard },
      {
        path: "works", children: [
          { index: true, Component: Works },
          { path: "new", Component: NewWork },
          { path: ":workId", Component: Work },
        ]
      },
      { path: "students", Component: Students }
    ],
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(<RouterProvider router={router} />);
