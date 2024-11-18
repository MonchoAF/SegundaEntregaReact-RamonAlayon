import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


function App() {
  const [count, setCount] = useState(0)

  return (
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path="/Inicio"></Route>
          <Route path="/Productos" element={<ItemListContainer></ItemListContainer>}></Route>
          <Route path="/Servicio"></Route>
          <Route path="/Contacto"></Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
