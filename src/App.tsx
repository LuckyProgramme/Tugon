import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Brain } from 'lucide-react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import CreateQuiz from './pages/CreateQuiz';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import JoinGame from './pages/JoinGame';
import HostGame from './pages/HostGame';
import Game from './pages/Game';
import TugonSense from './pages/TugonSense';
import Operation from './pages/tugonsense/operations';
import Radio from './components/Radio';
import DifficultySelector from './pages/tugonsense/difficulty';


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz/:id" element={<Quiz />} />
          <Route path="/create" element={<CreateQuiz />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/join" element={<JoinGame />} />
          <Route path="/tugonsense" element={<TugonSense />} />
          <Route path="/host" element={<HostGame />} />
          <Route path="/game/:id" element={<Game />} />
          <Route path="/operations" element={<Operation />} />
          <Route path="/difficulty" element={<DifficultySelector />} />
          <Route path="/Radio" element={<Radio />} />
          

        </Routes>
      </div>
    </Router>
  );
}

export default App;
