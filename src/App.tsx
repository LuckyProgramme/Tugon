import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import Evaluation from './pages/tugonsense/evaluation';


// Tugg
import DifficultyEvaluation from './pages/tugonsense/evaluation/dEvaluation';
import Radio from './components/Radio';
import FloatingAIButton from './components/FloatingAIButton';

import Introductiontopic from './pages/topics/introductiontopic';
import Operationstopic from './pages/topics/operationstopic';
import Evaluationtopic from './pages/topics/evaluationtopic';
import InteractiveGraph from './pages/topics/graphs';
import Compositiontopic from './pages/topics/compositiontopic';
import Rationaltopic from './pages/topics/rationaltopic';
import Asymptotestopic from './pages/topics/asymptotestopic';
import RationalEquationsInequalities from './pages/topics/rationalinequalitiestopic';
import Inversetopic from './pages/topics/inversetopic';
import ExponentialLogarithmictopic from './pages/topics/exponentialandlogtopic';
import FunctionProblemSolvingtopic from './pages/topics/problemsolvingfunctopic';


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

          {/* TugonSense Routes */}
            {/* TugonSense Evaluation Routes */}
            <Route path="/dEvaluation" element={<DifficultyEvaluation/>}/>
          {/* TugonSense Main Routes */}
          <Route path="/operations" element={<Operation />} />
          <Route path="/evaluation" element={<Evaluation/>} />
        

          <Route path="/introductiontopic" element={<Introductiontopic />} />
          <Route path="/operationstopic" element={<Operationstopic />} />
          <Route path="/evaluationtopic" element={<Evaluationtopic />} />
          <Route path="/graphs" element={<InteractiveGraph />} />
          <Route path="/compositiontopic" element={<Compositiontopic />} />
          <Route path="/rationaltopic" element={<Rationaltopic />} />
          <Route path="/Radio" element={<Radio />} />
          <Route path="/asymptotestopic" element={<Asymptotestopic />} />
          <Route path="/rationalinequalitiestopic" element={<RationalEquationsInequalities />} />
          <Route path="/inversetopic" element={<Inversetopic />} />
          <Route path="/exponentialandlogtopic" element={<ExponentialLogarithmictopic />} />
          <Route path="/problemsolvingfunctopic" element={<FunctionProblemSolvingtopic />} />
        </Routes>
        <FloatingAIButton onWrongAnswer={(questionId) => console.log('Wrong answer for:', questionId)} />
      </div>
    </Router>
  );
}

export default App;
