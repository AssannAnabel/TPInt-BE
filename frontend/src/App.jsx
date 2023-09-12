import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home'
import './App.css'
import LoadInvtry from './pages/LoadInvtry';
import AllProducts from './pages/AllProducts';
import Ferreteria from './pages/Ferreteria';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/loadInvtry' element={<LoadInvtry />} />
          <Route exact path='/allProducts' element={<AllProducts />} />
          <Route exact path='/ferreteria' element={<Ferreteria />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
