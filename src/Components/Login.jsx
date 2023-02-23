import React, { useState } from "react";
import { useForm } from 'react-hook-form';
const all=[];
const Apps=()=>
{
  const {register,handleSubmit,formState:{errors}} = useForm();
  
  const [msg,setMsg]=useState();
  
  const [resetmsg,setResetmsg]=useState();

  const signup = (data) =>
  {
    all.push(data)
    window.localStorage.setItem("reg",JSON.stringify(all));
    
    
  } 

  

  const [logval,getLog]=useState(
    {
      eml:"",
      pass:""
    }
  )

  const test=(event)=>
  {
    const {name,value}=event.target;
    
    getLog((mydata)=>
    {
      return{
        ...mydata,
        [name]:value
      }
    })
  }

  const login=(eve)=>{
    eve.preventDefault();
    
   let arr=JSON.parse(window.localStorage.getItem("reg"));

    
    for(let obj in arr)
    {
       if(arr[obj].email==logval.eml && arr[obj].password==logval.pass)
       {
          setMsg("Welcome to User")
       }
       else
       {
        setMsg("Try Again")
       }
    }

  } 

  const [resets,setReset]=useState(
    {
      emls:""
    }
  );
  const rdata=(event)=>
  {
    const {name,value}=event.target;
    
    setReset((mydata2)=>
    {
      return{
        ...mydata2,
        [name]:value
      }
    })
  }

  const Resetfn=(eve)=>{
    eve.preventDefault();
    
   let abc=JSON.parse(window.localStorage.getItem("reg"));

    
    for(let obj in abc)
    { 
       if(abc[obj].email==resets.emls)
       {  
          setResetmsg("Password is reset")
       }
       else
       {
        setResetmsg("Try Again lettar")
       }
    }
  } 

  
  return(
    <>
      <section className="container">
        <div className="row text-center mt-3 bg-light">

          <div className="col-md-4 border border-2 rounded-2 border-dark"><b><h3>Ragistration</h3></b>
            <form className="mt-3"  onSubmit={handleSubmit(signup)}>
              <table cellPadding={5} cellSpacing={8}>
                <tr>
                  <td>Name</td>
                  <td><input type='text' {...register('firstName',{required:true})} /> 
                    <div>{errors.firstName ?.type === "required" && "Enter Firstname"}</div>
                  </td>
                </tr>

                <tr>
                  <td>Lastname</td>
                  <td><input type='text'{...register('lastName',{required:true})} /> 
                     <div>{errors.lastName ?.type === "required" && "Enter Firstname"}</div>
                  </td>
                </tr>

                <tr>
                  <td>Email</td>
                  <td><input type='email' {...register('email',{required : true , pattern : /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i})} /> 
                    <div>
                    {errors.email ?.type === "required" && "Enter Email"}
                    {errors.email ?.type === "pattern" && "Invalid Email"}
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>Password</td>
                  <td><input type='password'  {...register('password',{required : true})} /> 
                    <div>{errors.password ?.type === "required" && " insert password"}</div>
                  </td>
                </tr>

                <tr>
                  <td colSpan={2}><input className="btn btn-info" type='submit'/></td>
                </tr>
              </table>
            </form>
          </div>

          <div className="col-md-4 border border-2 rounded-2 border-dark"><b><h3>Login</h3></b>
            <form onSubmit={login} className="mt-3">
              <table cellPadding={5} cellSpacing={8}>
              <tr>
                <th colSpan={2}>
                  {msg}
                </th>
              </tr>
              <tr>
                  <td>Email</td>
                  <td><input type='email' name="eml" onChange={test} value={logval.nm} /></td>
                </tr>

                <tr>
                  <td>Password</td>
                  <td><input type='password' name="pass" onChange={test} value={logval.pass} /></td>
                </tr>
              
                <tr>
                  <td colSpan={2}><input className="btn btn-info" type='submit' value='login'/></td>
                </tr>
              
              </table>
            </form>
           
          </div>

          <div className="col-md-4 border border-2 rounded-2 border-dark"><b><h3>Forget</h3></b>
            <form className="mt-3" onSubmit={Resetfn}>
              <table cellPadding={5} cellSpacing={8}>
              <tr>
                <td colSpan={2}><b>{resetmsg}</b></td>
              </tr>
              <tr>
                  <td>Email</td>
                  <td><input type='email' name="emls" onChange={rdata} value={resets.em}/></td>
                </tr>

                <tr>
                  <td colSpan={2}><input className="btn btn-info" type='submit' value='reset pass'/></td>
                </tr>

              </table>
            </form>
          </div>

        </div>
      </section>
    </>
  )
}
export default Apps;