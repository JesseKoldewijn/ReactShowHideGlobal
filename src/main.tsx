import React from "react";
import ReactDOM from "react-dom/client";

import "@/styles/tailwind.css";

import App from "./App.tsx";
import ShowHideElementProvider from "./providers/showHideElemProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ShowHideElementProvider>
      <App />
    </ShowHideElementProvider>
  </React.StrictMode>,
);
