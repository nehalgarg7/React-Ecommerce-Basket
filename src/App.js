import './App.css';
import Header from './component/Header/Header';
import {BrowserRouter as Router,Route, Routes } from "react-router-dom"
import Home from './component/Homepage/Home';
import Card from './component/Card/Card';

function App() {

 

  return (
      <Router>
      <div className="App">
        <Header />
        <Routes>
        <Route path='/' exact element={<Home />}>
        </Route>
        <Route path='/cart' element={<Card/>}>
  
        </Route>
        </Routes>
      </div>
      </Router>
  );
}

export default App;
