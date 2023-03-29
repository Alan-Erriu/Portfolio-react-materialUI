import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { LanguagesProvider } from "./components/context/LanguagesContext";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#0f203b",
      light: "#ff5ca0",
    },
    secondary: {
      main: "#f30656",
    },
    success: {
      main: "#00352c",
      dark: "#004d40",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <ThemeProvider theme={theme}>
      <LanguagesProvider>
        <App />
      </LanguagesProvider>
    </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
