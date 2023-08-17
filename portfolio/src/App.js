import React from 'react';
import { Routes, Route} from 'react-router-dom';
import TechnologyPage from './pages/Technologies';
import HomePage from './pages/Home';
import WorkPage from './pages/Work';
import ErrorPage from './pages/Errorpage';
import ProjectPage from './pages/Projects';


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/technologies" element={<TechnologyPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
