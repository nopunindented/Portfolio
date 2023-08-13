import React from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom'
import HomePage from './pages/Home';
import ProjectPage from './pages/Projects';
import TechnologiesPage from './pages/Technologies';
import WorkPage from './pages/Work';
import ErrorPage from './pages/Errorpage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectPage/>} />
        <Route path="/technologies" element={<TechnologiesPage />} />
        <Route path="/workexperience" element={<WorkPage />} />
        <Route path="*" element={<ErrorPage />}/>
        </Routes>
    </div>
  );
}

export default App;
