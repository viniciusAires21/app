import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "normalize.css";
import { Box } from "components/Box";
import { RecoilRoot } from "recoil";
import { Snackbar } from "@material-ui/core";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <Box />
    </RecoilRoot>
  </React.StrictMode>
);
