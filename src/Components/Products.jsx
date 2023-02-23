import React,{useState,useEffect} from 'react';
import Skeleton from 'react-loading-skeleton';
import { NavLink } from 'react-router-dom';


function Products() {


const [data,setData]=useState([]);
const[filter,setFilter]=useState(data);
const[loading,setLoading]=useState(false);
//const [serch,setSerch]=useState('');
 let componentMounted=true;

useEffect(()=>{
  const getProducts =async ()=>{
       setLoading(true)
        const res= await fetch('https://fakestoreapi.com/products');
        if(componentMounted){
          setData(await res.clone().json());
          setFilter(await res.json());
          setLoading(false);

        }
        return ()=>{
          componentMounted=false;
        }    

    }
    getProducts();
  
},[])

const Loading= ()=>{
  return(
    <>
      <div className="col-md-3">
        <Skeleton height={350}/>
      </div>
      <div className="col-md-3">
        <Skeleton height={350}/>
      </div>
      <div className="col-md-3">
        <Skeleton height={350}/>
      </div>
      <div className="col-md-3">
        <Skeleton height={350}/>
      </div>
    </>
  )
}

const filterProduct=(cat)=>{
  const updatedList = data.filter((x)=>x.category === cat);
  setFilter(updatedList);

}

// const serchbyTitle=(e)=>
// {
//    setSerch(e)
//   const newdata = data.filter((y)=>y.title.toLowerCase().includes(serch.toLowerCase()));
//     setFilter(newdata);
//    console.log(serch)
// }


const ShowProducts=()=>{
  return(
    <>
    <div className='buttons d-flex justify-content-center mb-5 pb-5'>
      <button className='btn btn-outline-dark me-2'onClick={()=>setFilter(data)}>All</button>
      <button className='btn btn-outline-dark me-2' onClick={()=>filterProduct("men's clothing")}>Men's Clothing</button>
      <button className='btn btn-outline-dark me-2' onClick={()=>filterProduct("women's clothing")}>Women's Clothing</button>
      <button className='btn btn-outline-dark me-2' onClick={()=>filterProduct("jewelery")}>Jewelery</button>
      <button className='btn btn-outline-dark me-2' onClick={()=>filterProduct("electronics")}>Electronics</button>
    </div>
    {/*<div className='d-flex justify-content-center my-2 py-2'>
      <input type='text' placeholder='serch by product title' autoFocus  onChange={(e)=>setSerch(e.target.value)} className='form-control w-50' />
  </div>*/}

    {filter.map((product)=>
    {
      return(
        <>
          <div className="col-md-3 mb-4">
          <div className="card h-100 text-center p-4" key={product.id} >
            <img className="card-img-top" src={product.image} alt={product.title}
              height='250px'/>
            <div className="card-body">
              <h5 className='card-title mb-0'>{product.title.substring(0,12)}</h5>
              <p className="card-text lead fw-bold">${product.price}</p>
              <NavLink className='btn btn-dark text-white' to={`/Productsss/${product.id}`}>Add To Cart</NavLink>
            </div>
         </div>
         </div>
        </>
      )
    })}
    </>
  )

}
    

    return (
        <>
        <div className='container my-5 py-5'>
          <div className='row'>
            <div className="col-12 mb-5">
              <h1 className='display-6 fw-bolder text-center'>Latest Products</h1>
              <hr/>
            </div>
          </div>
          <div className='row justify-content-center'>
            {loading ? <Loading/> : <ShowProducts/>}
          </div>
        </div>
       
        </>  
    );
}

export default Products;