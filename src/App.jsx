import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Homepage from './pages/homepage';
import Pricingpage from './pages/pricingpage';
import Login from './components/login';
import LoginPage from './pages/LoginPage';
import Login2 from './components/login2';
import Login3 from './components/login3';
import SignupPrimaryPage from './pages/SignPrimaryPage';
import Dashboard1 from './components/dashboard1';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage/>} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/pricing" element={<Pricingpage />} />
          <Route path="/login1" element={<Login/>} />
          <Route path="/login2" element={<Login2/>} />
          <Route path="/login3" element={<Login3/>} />
          <Route path="/signprimary" element={<SignupPrimaryPage />} />
          <Route path="/dashboard" element={<Dashboard1 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;