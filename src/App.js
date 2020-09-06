import React from "react";
import { Dashboard } from "./pages/dashboard";
import { Header } from "./components/header";

import "./App.scss";

function App() {
  return (
    <div>
      <Header />
      <Dashboard />
    </div>
  );
}

export default App;
