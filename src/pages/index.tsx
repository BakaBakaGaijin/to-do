import { Route, Routes } from "react-router-dom";
import { lazy } from "react";

const Tasks = lazy(() => import("./tasks"));
const Categories = lazy(() => import("./categories"));

export const Routing = () => {
  return (
    <Routes>
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/categories" element={<Categories />} />
      <Route index element={<Tasks />} />
    </Routes>
  );
};
