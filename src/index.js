import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ToDo from "./App";
import Task from "./Task";
import store from "./app/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToDo />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
