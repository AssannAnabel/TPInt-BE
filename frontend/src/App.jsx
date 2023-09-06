import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home'
import './App.css'
import LoadInvtry from './pages/LoadInvtry';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/loadInvtry' element={<LoadInvtry/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
