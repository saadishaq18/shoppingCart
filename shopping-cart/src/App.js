
import './App.css';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from './component/navbar';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' />
        <Route path='/cart' />
      </Routes>
    </Router>
    
  );
}

export default App;
