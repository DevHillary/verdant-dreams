import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

console.log("[Kigutu] App mounting...");

const root = document.getElementById("root");
if (root) {
  createRoot(root).render(<App />);
  console.log("[Kigutu] App rendered");
} else {
  console.error("[Kigutu] Root element not found");
}
