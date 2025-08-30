import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import RatingComponent from "./components/RatingCard/RatingCard";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <main>
      <RatingComponent />
    </main>
  </StrictMode>
);
