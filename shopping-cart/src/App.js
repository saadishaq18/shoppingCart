
import './App.css';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from './component/navbar';
import {Shop} from './pages/shop/shop';
import {Cart} from './pages/cart/cart';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Shop />}/>
        <Route path='/cart' element={<Cart />}/>
      </Routes>
    </Router>
    
  );
}

export default App;
