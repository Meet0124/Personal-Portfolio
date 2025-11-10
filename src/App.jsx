import React from "react";
import Portfolio from "./pages/Portfolio";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <ErrorBoundary>
        <Portfolio />
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
