import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Homepage from './pages/homepage';
import Pricingpage from './pages/pricingpage';
import Login from './components/login';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/pricing" element={<Pricingpage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
