import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Live from './pages/Live';
import Upcoming from './pages/Upcoming';
import Finished from './pages/Finished';
import MatchDetails from './pages/MatchDetails';

function App() {
  return (
    <Router>
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Live />} />
          <Route path="/upcoming" element={<Upcoming />} />
          <Route path="/finished" element={<Finished />} />
          <Route path="/match/:id" element={<MatchDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;