import App from "@App";
import Login from "@components/Login";
import Register from "@components/Register";
import ProtectedRoute from "@components/RouteGuards/ProtectedRoute";
import RejectRoute from "@components/RouteGuards/RejectRoute";
import Auth from "@pages/Auth";

import ListProduct from "@pages/Product";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    element: <RejectRoute />,
    children: [
      {
        element: <App />,
        children: [{ path: "", element: <ListProduct /> }],
      },
      {
        element: <Auth />,
        children: [
          { path: "login", element: <Login /> },
          { path: "register", element: <Register /> },
        ],
      },
    ],
  },
  {
    element: <ProtectedRoute />,
    children: [{}],
  },
]);
