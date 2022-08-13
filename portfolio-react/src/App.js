import React from "react";

import { Footer, Header, Skills, Work } from "./container";
import Navbar from "./components/Navbar/Navbar";
import "./app.scss";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Skills />
      <Work />
      <Footer />
    </div>
  );
}
