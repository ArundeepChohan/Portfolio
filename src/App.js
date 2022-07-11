import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './pages/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects'
function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            
          </Route>
          <Route path="/about" element={<Layout />}>
            <Route index element={<About />} />
            
          </Route>

          <Route path="/projects" element={<Layout />}>
            <Route index element={<Projects />} />
            
          </Route>
        </Routes>
      </BrowserRouter>
    );
}
export default App;