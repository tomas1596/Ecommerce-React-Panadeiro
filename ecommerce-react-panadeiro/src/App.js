import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './Container/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Container/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import About from './components/About/About';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <BrowserRouter basename='/Ecommerce-React-Panadeiro'>
      <div className='App'>
          <NavBar />
            <Routes>
              <Route path='/' element = { <ItemListContainer /> } />
              <Route path='/category/:id' element = { <ItemListContainer /> } />
              <Route path='/detail/:IdDetail' element = { <ItemDetailContainer /> } />
              <Route path="/about" element = { <About /> } />
              <Route path="/cart" element = { <Cart /> } />

              <Route path='/*' element ={ <Navigate to ='/' replace /> }></Route>
            </Routes>
          <Footer />
          </div>
    </BrowserRouter>
  )
}



export default App;
