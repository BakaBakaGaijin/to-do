/* VENDOR */
import { ReactNode } from "react";
import { Provider } from "react-redux";

/* APPLICATION */
import { store } from "../store";

export const withStore = (component: () => ReactNode) => () =>
  <Provider store={store}>{component()}</Provider>;
