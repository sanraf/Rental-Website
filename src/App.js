import logo from './logo.svg';
import './App.css';
import Main from './Components/Main';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/Rental-Website" element={<Main/>}/>
      </Routes>
    </div>
    </Router>

  );
}

export default App;
