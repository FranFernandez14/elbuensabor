import './App.css';
import Home from './Pages/home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MisDatos from './Pages/MisDatos';
import ModificarMisDatos from './Pages/ModificarMisDatos';
import Login from './Pages/login';
import Register from './Pages/register';
import PedidosCajero from './Pages/PedidosCajero';

export default function App() {
  return (
    <div className="App">
      <Background/>
      <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/MisDatos' element={<MisDatos />} />
                <Route path='/PedidosCajero' element={<PedidosCajero />} />
                <Route path='/ModificarMisDatos' element={<ModificarMisDatos />} />
            </Routes>
        </Router>
    </div>
  );
}



function Background() {
  return (
    <div className="bg"><div></div></div>
  )
}
