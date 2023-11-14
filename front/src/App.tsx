import './App.css';
import Home from './Pages/home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MisDatos from './Pages/MisDatos';
import ModificarMisDatos from './Pages/ModificarMisDatos';
import Login from './Pages/login';
import Register from './Pages/register';
import PedidosCajero from './Pages/PedidosCajero';
import ProductosMasVendidos from './Pages/ProductosMasVendidos';
import Opciones from './Pages/Opciones';
import Button from './Components/Button/Button';
import { TextSize } from './Components/Text/TextSize';
import { ButtonWidth } from './Components/Button/ButtonWidth';
import { ButtonColor } from './Components/Button/ButtonColor';
import RegistrarEmpleado from './Pages/RegistrarEmpleado';
import AdministrarEmpleados from './Pages/AdministrarEmpleados';
import AdministrarProductos from './Pages/AdministrarProductos';
import Carta from './Pages/Carta';
import Carrito from './Pages/Carrito';
import RealizarPedido from './Pages/RealizarPedido';

export default function App() {
  return (
    <div className="App">
      <Background/>
      <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/logout' element={<Home logout />} />
                <Route path='/Carta' element={<Carta />} />
                <Route path='/Carrito' element={<Carrito />} />
                <Route path='/RealizarPedido' element={<RealizarPedido />} />
                <Route path='/MisDatos' element={<MisDatos />} />
                <Route path='/PedidosCajero' element={<PedidosCajero />} />
                <Route path='/ModificarMisDatos' element={<ModificarMisDatos />} />
                <Route path='/ProductosMasVendidos' element={<ProductosMasVendidos />} />
                <Route path='/AdministrarEmpleados' element={<AdministrarEmpleados />} />
                <Route path='/RegistrarEmpleado' element={<RegistrarEmpleado />} />
                <Route path='/AdministrarProductos' element={<AdministrarProductos />} />
                <Route path='/TestSeleccionarRol' element={
                  <Opciones>
                    <Button click={()=>{window.location.href = "/";}} fontSize={TextSize.SMALL} width={ButtonWidth.FILL} color={ButtonColor.DARK}>Cliente</Button>
                    <Button click={()=>{window.location.href = "/OpcionesCajero";}} fontSize={TextSize.SMALL} width={ButtonWidth.FILL} color={ButtonColor.DARK}>Cajero</Button>
                    <Button click={()=>{window.location.href = "/OpcionesDelivery";}} fontSize={TextSize.SMALL} width={ButtonWidth.FILL} color={ButtonColor.DARK}>Delivery</Button>
                    <Button click={()=>{window.location.href = "/OpcionesCocinero";}} fontSize={TextSize.SMALL} width={ButtonWidth.FILL} color={ButtonColor.DARK}>Cocinero</Button>
                    <Button click={()=>{window.location.href = "/OpcionesAdministrador";}} fontSize={TextSize.SMALL} width={ButtonWidth.FILL} color={ButtonColor.DARK}>Administrador</Button>
                  </Opciones>
                } />
                <Route path='/OpcionesCajero' element={
                  <Opciones>
                    <Button click={()=>{}} fontSize={TextSize.SMALL} width={ButtonWidth.FILL} color={ButtonColor.DARK}>Ver pedidos</Button>
                  </Opciones>
                } />
                <Route path='/OpcionesDelivery' element={
                  <Opciones>
                    <Button click={()=>{}} fontSize={TextSize.SMALL} width={ButtonWidth.FILL} color={ButtonColor.DARK}>Ver pedidos</Button>
                  </Opciones>
                } />
                <Route path='/OpcionesCocinero' element={
                  <Opciones>
                    <Button click={()=>{}} fontSize={TextSize.SMALL} width={ButtonWidth.FILL} color={ButtonColor.DARK}>Ver pedidos</Button>
                    <Button click={()=>{}} fontSize={TextSize.SMALL} width={ButtonWidth.FILL} color={ButtonColor.DARK}>Administrar Rubros de Ingredientes</Button>
                    <Button click={()=>{}} fontSize={TextSize.SMALL} width={ButtonWidth.FILL} color={ButtonColor.DARK}>Administrar Rubros de Productos</Button>
                    <Button click={()=>{window.location.href = "/AdministrarProductos"}} fontSize={TextSize.SMALL} width={ButtonWidth.FILL} color={ButtonColor.DARK}>Administrar Productos</Button>
                    <Button click={()=>{}} fontSize={TextSize.SMALL} width={ButtonWidth.FILL} color={ButtonColor.DARK}>Ver Stock de Ingredientes</Button>
                  </Opciones>
                } />
                <Route path='/OpcionesAdministrador' element={
                  <Opciones>
                    <Button click={()=>{window.location.href = "/AdministrarEmpleados"}} fontSize={TextSize.SMALL} width={ButtonWidth.FILL} color={ButtonColor.DARK}>Administrar Empleados</Button>
                    <Button click={()=>{}} fontSize={TextSize.SMALL} width={ButtonWidth.FILL} color={ButtonColor.DARK}>Administrar Clientes</Button>
                    <Button click={()=>{}} fontSize={TextSize.SMALL} width={ButtonWidth.FILL} color={ButtonColor.DARK}>Ver pedidos</Button>
                    <Button click={()=>{}} fontSize={TextSize.SMALL} width={ButtonWidth.FILL} color={ButtonColor.DARK}>Administrar Rubros de Ingredientes</Button>
                    <Button click={()=>{}} fontSize={TextSize.SMALL} width={ButtonWidth.FILL} color={ButtonColor.DARK}>Administrar Rubros de Productos</Button>
                    <Button click={()=>{window.location.href = "/AdministrarProductos"}} fontSize={TextSize.SMALL} width={ButtonWidth.FILL} color={ButtonColor.DARK}>Administrar Productos</Button>
                    <Button click={()=>{}} fontSize={TextSize.SMALL} width={ButtonWidth.FILL} color={ButtonColor.DARK}>Ver Stock de Ingredientes</Button>
                    <Button click={()=>{window.location.href = "/OpcionesAdministradorInformes";}} fontSize={TextSize.SMALL} width={ButtonWidth.FILL} color={ButtonColor.DARK}>Informes</Button>
                  </Opciones>
                } />
                <Route path='/OpcionesAdministradorInformes' element={
                  <Opciones>
                    <Button click={()=>{window.location.href = "/ProductosMasVendidos";}} fontSize={TextSize.SMALL} width={ButtonWidth.FILL} color={ButtonColor.DARK}>Productos</Button>
                    <Button click={()=>{}} fontSize={TextSize.SMALL} width={ButtonWidth.FILL} color={ButtonColor.DARK}>Clientes</Button>
                    <Button click={()=>{}} fontSize={TextSize.SMALL} width={ButtonWidth.FILL} color={ButtonColor.DARK}>Movimientos monetarios</Button>
                  </Opciones>
                } />
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
