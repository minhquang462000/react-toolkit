import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { store } from "./store";
import { Provider } from "react-redux";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import HomePage from "./pages/home.jsx";
import CreatePage from "./pages/createPage.jsx";
import UpdateTask from "./pages/UpdateTask.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element:<HomePage/>,
  },
  {
    path: "/create",
    element: <CreatePage/>,
  },
  {
    path: "/:id",
    element: <UpdateTask/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>

      </RouterProvider>
    </Provider>
  </React.StrictMode>
);
