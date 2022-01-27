import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Contact,
  Footer,
  Navbar,
  NotFound,
  Portfolio,
  Services,
  Skills,
} from "./components";
import ScrollNav from "./components/ScrollNav";
import ScrollToTop from "./components/ScrollToTop";
import GlobalStyle from "./globalStyles";
import Home from "./pages/HomePage/Home";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <GlobalStyle />
        <ScrollNav showBelow={250} />
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/skill" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      
    </div>
  );
};

export default App;
