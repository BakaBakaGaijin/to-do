/* VENDOR */
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

/* APPLICATION */
import "./index.css";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
