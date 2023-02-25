import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector,useDispatch} from 'react-redux';
import {addCart,delCart} from '../store/action'

const Cart=()=> {
    
   const state = useSelector((state) => state.handleCart);
   const dispatch = useDispatch();
    
   const handleAdd=(item)=>
   {
    dispatch(addCart(item))
   }
   const handleDel=(item)=>
   {
    dispatch(delCart(item))
   }
   const emptyCart=()=>
   {
    return(
        <div className='px-4 my-5 bg-light rounded-3 py-5'>
            <div className='container py-4'>
                <div className="row">
                    <h3>Your Cart is Empty</h3>
                </div>
            </div>
        </div>

    )
   }
   const cartItems=(product)=>
   {
    return (
        <>
        <div className='px-4 my-5 bg-light rounded-3 py-5' key={product.id}>
         <div className='container py-4'>  
        <div className='row justify-content-center'>
            <div className='col-md-4'>
                <img src={product.image} alt={product.title} height='200px' width='180px' />
            </div>
            <div className='col-md-4'>
                <h3>{product.title}</h3>
                <p className='lead fw-bold'>
                    {product.qty} X ${product.price} = $
                    {product.qty * product.price}
                </p>
                <button className='btn btn-outline-dark me-4'
                onClick={()=>handleDel(product)}>
                <i className='fa fa-minus'></i>
                </button>
                <button className='btn btn-outline-dark me-4'
                onClick={()=>handleAdd(product)}>
                <i className='fa fa-plus'></i>
                </button>
            </div>
        </div>
        </div>
        </div>
        </>
    );
    }

    const buttons =()=>
    {
        return(
            <>
            <div className="container">
                <div className="row">
                  <div className='col-md-6'>
                  <NavLink to='/Products' className='btn btn-dark mb-5 w-50 mx-auto text-white'>
                        Back To Shop
                    </NavLink>
                  </div>
                  <div className='col-md-6 text-end'>
                  <NavLink to='/Checkout' className='btn btn-dark mb-5 w-50 mx-auto text-white'>
                        Go To Checkout
                    </NavLink>
                  </div>  
                </div>
            </div>
            </>
        );
    };
    return(
        <div>
            {state.length === 0 && emptyCart()}
            {state.length !== 0 && state.map(cartItems)}
            {state.length !== 0 && buttons()}
        </div>
    );
}

export default Cart;