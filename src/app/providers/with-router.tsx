/* VENDOR */
import { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";

/* APPLICATION */
import "./index.css";

export const withRouter = (component: () => ReactNode) => () => (
  <BrowserRouter>{component()}</BrowserRouter>
);
