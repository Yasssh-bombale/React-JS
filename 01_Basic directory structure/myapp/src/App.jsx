import Header from "./components/Header.jsx";
import "./styles/App.css";

// * Jyala apn export defualt krto tyala apn {} mdhe nhi lihat; and tyala apn as dusr name pn kru shkto;

// * jyacha samor export const </any> as ast tyala apn import krtani {paranthesis mdhe lihto exact tech name};
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Product from "./components/Product.jsx";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="*" element={<div>Page not found 404</div>} />
      </Routes>
    </Router>
  );
}

export default App;
