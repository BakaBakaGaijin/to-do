/* VENDOR */
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

/* APPLICATION */
import { store } from "./store";
import { Categories } from "../Lists/Categories";
import { Header } from "../Header/Header";
import { Tasks } from "../Lists/Tasks";
import "../App.css";

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/categories" element={<Categories />} />
            <Route index element={<Tasks />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
