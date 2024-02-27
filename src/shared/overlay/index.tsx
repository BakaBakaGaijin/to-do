/* VENDOR */
import { ReactNode } from "react";

/* APPLICATION */

import "./index.css";

interface Overlay {
  children: ReactNode;
}

const Overlay = ({ children }: Overlay) => {
  return <div className="overlay">{children}</div>;
};

export default Overlay;
