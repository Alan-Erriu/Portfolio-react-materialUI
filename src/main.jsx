import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import  {LanguagesProvider} from "./components/context/LanguagesContext"
// import esMX from "./components/laguages/es-MX.json";
// import enUS from "./components/laguages/en-US.json";
// import { IntlProvider } from "react-intl";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LanguagesProvider>
      <App />
    </LanguagesProvider>
  </React.StrictMode>
);
