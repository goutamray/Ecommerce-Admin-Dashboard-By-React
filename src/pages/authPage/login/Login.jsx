
import logo from "../../../assets/img/logo.webp"
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";


import { FaEnvelope , FaFacebookF, FaGoogle } from "react-icons/fa";
import { BiSolidLock } from "react-icons/bi";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
 import { FaRegEyeSlash } from "react-icons/fa"; 

import "./Login.css"; 
import { MyContext } from "../../../App";
const Login = () => {

   const [openPass, setOpenPass ] = useState(false); 

    const handleSubmit = (e) => {
      e.preventDefault(); 
    }

    useEffect(() => {
      window.scrollTo(0,0)
    }, []);     


    const context = useContext(MyContext)

    useEffect(() => {
      context.setIsHeaderFooterShow(false); 
    }, [context]);  
  

  return (
    <>
      <section className="loginSection">
        <div className="container">
          <div className="row">
              <div className="col-sm-4 col-md-3"></div>

              <div className="col-sm-4 col-md-5">
                 <div className="loginBox">
                   <img src={logo} alt="" />
                   <h4> Login to Hotash </h4>
                </div>

                <div className="form-wrapper res-form card shadow login-cart ">
                   <form onSubmit={handleSubmit}>
                   <div className="mb-3 ">
                      <span className="icon"> <FaEnvelope /> </span>         
                      <input type="email" className="form-control" placeholder="Enter your email" autoFocus />                                 
                    </div>

                    <div className="mb-3 pass-field">    
                      <span className="icon">  <BiSolidLock /> </span>                
                      <input type={openPass === false ? "password" : "text"}  className="form-control" placeholder="Enter your password"/>  
                      
                         
                         <span> 
                          <button onClick={()=> setOpenPass(!openPass)}>
                            {
                               openPass === true ?  <IoEyeOutline /> : <FaRegEyeSlash />
                             }
                           
                           </button> 
                         </span>
                        
                      
                                 
                    </div>

                    <div className="mb-3">    
                      <span className="icon">  <MdOutlineVerifiedUser /> </span>                
                        <select className="form-select" >
                          <option selected> Select User Role </option>
                          <option value="1"> Admin </option>
                          <option value="2"> Member </option>
                          <option value="3"> Client </option>
                          <option value="3"> Manager </option>
                          <option value="3"> Vendor  </option>
                        </select>               
                    </div>
                   
                    <button type="submit" className="my-btn w-100 "> <a href=""> Sign In </a> </button>
                   </form>
                   <div className="forget my-2">
                    <Link to="/forget"> FORGOT PASSWORD </Link>
                   </div>
                   <div className="or-div">
                       <p> or </p>
                   </div>
                   <div className="twiter">
                     <button type="submit" className="my-btn twiter w-100 "> <FaGoogle /> <Link to=""> Continue with Google </Link> </button>
                   </div>
                   <div className="Facebook mt-3">
                     <button type="submit" className="my-btn facebook w-100 "> <FaFacebookF /> <Link to=""> Continue with Facebook </Link> </button>
                   </div>

                </div>

                <div className="wrapperCard card shadow">
                  <p> Dont have an account? <Link to="/register"> Register</Link></p>
                </div>
              </div>

             <div className="col-sm-4 col-md-3"></div>
          </div>
        </div>
    
      </section>
    </>
  )
}

export default Login













