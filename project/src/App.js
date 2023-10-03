import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import Profile from './pages/profile';
import More from './pages/more';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/home" element={<Home/>}/>
        <Route exact path="/profile" element={<Profile/>}/>
        <Route exact path="/more" element={<More/>}/>
      </Routes>
    </Router>
  );
}

export default App;