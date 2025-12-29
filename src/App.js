// Import Components
import { Analytics } from "@vercel/analytics/react";
import React, { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Toolbar from "./components/Toolbar";
import Work from "./components/Work";

// Import CSS
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

const App = () => {
  // Set theme
  const [theme, setTheme] = useState("dark");

  return (
    <div>
      <Toolbar theme={theme} setTheme={setTheme} />
      <Intro theme={theme} />
      <About theme={theme} />
      <Work theme={theme} />
      <Contact theme={theme} />
      <Footer theme={theme} setTheme={setTheme} />
      <Analytics />
    </div>
  );
};

export default App;
