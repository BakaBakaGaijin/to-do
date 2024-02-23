import { Route, Routes } from "react-router-dom";
import { Tasks } from "../Lists/Tasks";
import { Categories } from "../Lists/Categories";

export const Routing = () => {
  return (
    <Routes>
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/categories" element={<Categories />} />
      <Route index element={<Tasks />} />
    </Routes>
  );
};
