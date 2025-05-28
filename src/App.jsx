import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Live from "./pages/Live";
import Finished from "./pages/Finished";
import Upcoming from "./pages/Upcoming";
import MatchDetail from "./pages/MatchDetail";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/live" element={<Live />} />
        <Route path="/finished" element={<Finished />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/match/:id" element={<MatchDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
