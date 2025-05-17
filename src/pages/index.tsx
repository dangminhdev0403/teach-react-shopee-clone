import App from "@App";
import Login from "@components/Login";
import Register from "@components/Register";
import ProtectedRoute from "@components/RouteGuards/ProtectedRoute";
import RejectRoute from "@components/RouteGuards/RejectRoute";
import ROUTES from "@constants/routes";
import Auth from "@pages/Auth";

import ListProduct from "@pages/Product";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    element: <RejectRoute />,
    children: [
      {
        element: <App />,
        children: [{ path: ROUTES.HOME, element: <ListProduct /> }],
      },
      {
        element: <Auth />,
        children: [
          { path: ROUTES.LOGIN, element: <Login /> },
          { path: ROUTES.REGISTER, element: <Register /> },
        ],
      },
    ],
  },
  {
    element: <ProtectedRoute />,
    children: [{}],
  },
]);
