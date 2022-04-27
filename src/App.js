/* VENDOR */
import React from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

/* APPLICATION */
import "./App.css";
import { Header } from "./Header/Header";
import { Tasks } from "./Lists/Tasks";
import { Categories } from "./Lists/Categories";
import { Modal } from "./Modal/Modal";

function App() {
  const [modalActive, setModalActive] = useState(false);

  return (
    <div className="App">
      <Header setActive={setModalActive} />
      <Routes>
        <Route path="/tasks" element={<Tasks setActive={setModalActive} />} />
        <Route
          path="/categories"
          element={<Categories setActive={setModalActive} />}
        />
        <Route index="/tasks" element={<Tasks setActive={setModalActive} />} />
      </Routes>
      <Modal active={modalActive} setActive={setModalActive} />
    </div>
  );
}

export default App;
