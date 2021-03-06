import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './Container/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Container/ItemDetailContainer/ItemDetailContainer';
import CartContainer from './Container/CartContainer/CartContainer';
import About from './components/About/About';
import CartContextProvider from './Container/Context/CartContext';


function App() {
  return (
    <BrowserRouter basename='/Ecommerce-React-Panadeiro'>
      <CartContextProvider >
        <div className='App'>
          <NavBar />
            <Routes>
              <Route path='/' element = { <ItemListContainer /> } />
              <Route path='/category/:id' element = { <ItemListContainer /> } />
              <Route path='/detail/:IdDetail' element = { <ItemDetailContainer /> } />
              <Route path="/about" element = { <About /> } />
              <Route path="/cart" element = { <CartContainer /> } />

              <Route path='/*' element ={ <Navigate to ='/' replace /> }></Route>
            </Routes>
          </div>
        </CartContextProvider>
    </BrowserRouter>
  )
}



export default App;
