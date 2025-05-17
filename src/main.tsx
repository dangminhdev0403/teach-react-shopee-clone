import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Bounce, ToastContainer } from "react-toastify";

import { router } from "@pages";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";

import { queryClient } from "@react-query/queryClient";
import { store } from "@redux/store";
import { proccess } from "@services/axios.custom";
import { QueryClientProvider } from "@tanstack/react-query";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover={false}
          theme="light"
          transition={Bounce}
        />
        {proccess.VITE_MODE === "development" && (
          <ReactQueryDevtools initialIsOpen={false} />
        )}
      </QueryClientProvider>
    </Provider>
  </StrictMode>,
);
