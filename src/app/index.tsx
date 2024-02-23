/* APPLICATION */
import { Header } from "../Header/Header";
import { Routing } from "../pages";
import { withProviders } from "./providers";
import "./styles/vars.css";
import "./styles/index.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routing />
    </div>
  );
};

export default withProviders(App);
