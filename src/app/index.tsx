/* VENDOR */
import { Suspense } from "react";

/* APPLICATION */
import { Header } from "../Header/Header";
import { Routing } from "../pages";
import Loader from "../widgets/loader";
import { withProviders } from "./providers";
import "./styles/vars.css";
import "./styles/index.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Suspense fallback={<Loader />}>
          <Routing />
        </Suspense>
      </main>
    </div>
  );
};

export default withProviders(App);
