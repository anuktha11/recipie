import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './page/SignIn';
import Home from './page/Home';
import Signup from './page/Signup';
import Recipie from './page/Recipie';


function App() {
  return (
    <Router>
      <div className="App">
        <nav>
           
        </nav>
        <Routes>
        <Route path="/" element={<Home/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/recipe" element={<Recipie/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
