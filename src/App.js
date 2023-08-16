import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
// import Contact from './components/Contact';
// import Project from './components/Project';

// Pages
import Welcome from './pages/Welcome';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';


const App = () => {
  return (
    <main>
      <div>
        <Header />
        <Routes>
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/" element={<Welcome />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/aboutme" element={<AboutMe />}/>
        </Routes>
        <Footer />
      </div>
    </main>
  );
};

export default App;
