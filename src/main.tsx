import React from "react";
import ReactDOM from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import { RouterProvider } from "react-router-dom";
import {
  resolver,
  theme,
} from "./core/utility/constants/mantine-theme-provider.constant";
import { router } from "./routes/router";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider theme={theme} cssVariablesResolver={resolver}>
      <RouterProvider router={router} />
    </MantineProvider>
  </React.StrictMode>
);
