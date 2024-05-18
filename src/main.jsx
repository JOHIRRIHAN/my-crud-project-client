import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import DisplayUsers from "./DisplayUsers.jsx";
import UserUpdate from "./UserUpdate.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/users",
    element: <DisplayUsers></DisplayUsers>,
    loader: ()=> fetch('http://localhost:3000/users')
  },
  {
    path: "/users/:id",
    element: <UserUpdate></UserUpdate>,
    loader: ({params})=> fetch(`http://localhost:3000/users/${params.id}`)
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
