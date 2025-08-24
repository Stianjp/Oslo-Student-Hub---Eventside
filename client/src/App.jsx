
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

// Midlertidige tomme sider – du kan fylle dem ut senere
const Oppgaver = () => <h2>Mine oppgaver</h2>;
const Dokumenter = () => <h2>Dokumenter</h2>;
const Eventer = () => <h2>Eventer</h2>;

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/oppgaver" element={<Oppgaver />} />
        <Route path="/dokumenter" element={<Dokumenter />} />
        <Route path="/eventer" element={<Eventer />} />
      </Routes>
    </Router>
  );
}

export default App;

