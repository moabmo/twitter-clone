import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import RightSidebar from './components/RightSidebar';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <div className="app-container">
        <Sidebar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Add other routes here */}
          </Routes>
        </main>
        <RightSidebar />
      </div>
    </Router>
  );
}

export default App;
