import React from 'react';
import { NavLink} from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar=()=>
 {
    const state = useSelector((state)=>state.handleCart);

    return (
        <div>
         <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
         <div className='container'>
        <NavLink className="navbar-brand fw-bold fs-2" to='/'>Online Shop</NavLink>
        <button className="navbar-toggler" 
        type="button"
         data-bs-toggle="collapse" 
         data-bs-target="#navbarSupportedContent" 
         aria-controls="navbarSupportedContent" 
         aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" to='/'>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/Products'>Products</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/About'>About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/Contect'>Contect</NavLink>
            </li>
          </ul>
          <div className="buttons">
            <NavLink to='/Login' href="" className="btn btn-outline-dark">
            <i className="fa fa-sign-in me-1"></i>Login</NavLink>
            <NavLink to='/Register' className="btn btn-outline-dark ms-2">
            <i className="fa fa-user-plus me-1"></i>Register</NavLink>
            <NavLink to='/Cart' className="btn btn-outline-dark ms-2">
            <i className="fa fa-shopping-cart me-1"></i>Cart({state.length})</NavLink>
          </div>
          
        </div>
        </div>
      </nav>
      </div>
        /*
        <nav classNameName='nav-bar'>
            <NavLink to='/'> 
            <h2>online shoping</h2>
            </NavLink>
            <NavLink to='/Login'> 
            <h3>login</h3>
            </NavLink>
            <NavLink to='/product'> 
            <h3>product</h3>
            </NavLink>
            <NavLink to='/cart' >
            <div classNameName='nav-bag'>
            <svg xmlns="http://www.w3.org/2000/svg"
             width="35" 
             height="35"
              fill="currentColor"
             classNameName="bi bi-handbag-fill"
              viewBox="0 0 16 16">
            <path d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2zM5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0V5z"/>
            </svg>
            <span classNameName='bag-quantity'>
                <span>{items.length}</span>
            </span>
            </div>
            </NavLink>
           
    </nav>*/
    );
}

export default Navbar;