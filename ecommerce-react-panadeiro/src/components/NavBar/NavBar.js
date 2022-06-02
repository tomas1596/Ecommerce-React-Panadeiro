import CartWidget from './../CartWidget/CartWidget';
import './NavBar.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
                <div className="container-fluid">
                    <NavLink className='link' to='/'>
                        <p className="navbar-brand ps-3 fst-italic">WE GO GYM <br/> MUSCLE SHOP</p>
                    </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                    <div className="collapse navbar-collapse justify-content-center align-items-center pt-2 fw-bold" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className='link' to='/'>
                                    <p className="nav-link text-white" aria-current="page">Inicio</p>
                                </NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <p className="nav-link dropdown-toggle text-white mb-3" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false"> products </p>
                                    <ul className="dropdown-menu bg-dark"aria-labelledby="navbarDropdownMenuLink">
                                        <li className="nav-item">
                                            <NavLink className='link' to='/category/preentreno'>
                                                <p className="nav-link text-white">Pre Entreno</p>
                                            </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className='link' to='/category/creatina'>
                                                <p className="nav-link text-white">Creatina</p>
                                            </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className='link' to='/category/proteina'>
                                                <p className="nav-link text-white">Proteina</p>
                                            </NavLink>
                                        </li>
                                    </ul>
                            </li>
                            <li className="nav-item">
                                <NavLink className='link' to='/about'>
                                    <p className="nav-link text-white mb-3">Quiénes somos</p>
                                </NavLink>
                            </li>
                            <li className="nav-item link nav-cart-2 ms-3">
                                    <CartWidget />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='nav-cart-1'>
                    <CartWidget />
                </div>
            </nav>
        </header>
    )
}

export default NavBar;