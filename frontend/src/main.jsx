import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import CreateMember from "./Pages/CreateMember";
import CreateTask from "./Pages/CreateTask";
import EditTask from "./Pages/EditTask";
import TodoItem from "./Components/TodoItem";
import TodoList from "./Pages/TodoList";
import Home from "./Pages/Home";
import Login from "./Pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <CreateMember />,
      },
      {
        path: "/task/",
        element: <CreateTask />,
      },
      {
        path: "/task/:id",
        element: <EditTask />,
      },
      {
        path: "/list",
        element: <TodoList />,
      },
    ],
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById("root")
);
