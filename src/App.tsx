// import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./components/views/Home";
import Projects from "./components/views/Projects";
import "./css/App.css";
import "./css/prism-line-numbers.css";
import "./css/prism-night-owl.css";
import ContactMe from "./components/views/ContactMe";
import AboutMe from "./components/views/AboutMe";

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="container bg-blue mx-auto ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact-me" element={<ContactMe />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
