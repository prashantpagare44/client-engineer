import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ClientDashboard from './components/client/clientDashboard'
import Engineerdashboard from './components/engineer/Engineerdashboard'



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/clientdashboard" element={<ClientDashboard/>}></Route>
        <Route path="/engineerdashboard" element={<Engineerdashboard></Engineerdashboard>} /> 
        </Routes>
    </BrowserRouter>
  );
}

export default App;
