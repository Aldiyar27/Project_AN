import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import Profile from './pages/profile';
import More from './pages/more';
import Post from './pages/post';
import Regis from './pages/registration';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/home" element={<Home/>}/>
        <Route exact path="/profile" element={<Profile/>}/>
        <Route exact path="/more" element={<More/>}/>
        <Route exact path="/post" element={<Post/>}/>
        <Route exact path="/registration" element={<Regis/>}/>
      </Routes>
    </Router>
  );
}

export default App;