import App from "@App";
import Login from "@components/Login";
import Register from "@components/Register";
import Auth from "@pages/Auth";
import ProtectedRoute from "@pages/Auth/ProtectedRoute";
import RejectRoute from "@pages/Auth/RejectRoute";
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
