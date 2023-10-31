// import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import "./css/App.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="container h-screen bg-blue mx-auto ">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/ourstory" element={<OurStory />} />
            <Route path="/physicalclasses" element={<PhysicalClasses />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/signals" element={<Signals />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="description/:id" element={<CartDetails />} /> */}
          </Routes>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
