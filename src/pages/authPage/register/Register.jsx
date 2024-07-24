import logo from "../../../assets/img/logo.webp"
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

// react icons 
import { FaEnvelope , FaFacebookF , FaGoogle, FaRegUserCircle} from "react-icons/fa";
import { BiSolidLock } from "react-icons/bi";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { MdHome } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa"; 
import { MyContext } from "../../../App";

import "./Register.css";
const Register = () => {
  const [openPass, setOpenPass ] = useState(false); 
  const [openPass2, setOpenPass2 ] = useState(false); 

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
      <section className="loginSection register">
        <div className="container">
          <div className="row register-part ">
              <div className="col-sm-7 left-part1 ">
                   <div className="banner-content">
                      <h2> Best ux/ui fashion <br/> <span style={{color : "#0858f7"}}> ecommerce dashboard  </span> <br/>  & admin panel </h2>
                      <p> Elit Iusto dolore libero recusandae dolor dolores explicabo ullam cum facilis aperiam alias odio quam excepturi molestiae omnis inventore. Repudiandae officia placeat amet consectetur dicta dolorem quo </p>
                      <button className="my-btn home-page "> <MdHome /> <Link to="/">  Go To Home </Link> </button>
                   </div>
              </div>

              <div className="col-sm-5 register-right-part ">
                 <div className="loginBox">
                   <img src={logo} alt="" />
                   <h4> Register a new account </h4>
                </div>

                <div className="form-wrapper res-form card shadow register ">
                   <form onSubmit={handleSubmit}>
                   <div className="mb-3 ">
                      <span className="icon"> <FaRegUserCircle /> </span>         
                      <input type="email" className="form-control" placeholder="Enter your name" autoFocus />                                 
                    </div>
                   <div className="mb-3 ">
                      <span className="icon"> <FaEnvelope /> </span>         
                      <input type="email" className="form-control" placeholder="Enter your email"  />                                 
                    </div>

                    <div className="mb-3 pass-field">    
                      <span className="icon">  <BiSolidLock /> </span>                
                      <input type={openPass === false ? "password" : "text"}    className="form-control" placeholder="Enter your password"/> 
                      <span> 
                          <button onClick={()=> setOpenPass(!openPass)}>
                            {
                               openPass === true ?  <IoEyeOutline /> : <FaRegEyeSlash />
                             }
                           
                           </button> 
                         </span>               
                    </div>
                    <div className="mb-3 pass-field ">    
                      <span className="icon">  <MdOutlineVerifiedUser /> </span>                
                      <input type={openPass2 === false ? "password" : "text"}  className="form-control" placeholder="Confirm your password"/>    
                      <span> 
                          <button onClick={()=> setOpenPass2(!openPass2)}>
                            {
                               openPass2 === true ?  <IoEyeOutline /> : <FaRegEyeSlash />
                             }
                           
                           </button> 
                         </span>          
                    </div>
                    <div className="mb-3">
                      <input type="checkbox" /> <span className="checkBox"> I agree to the all Terms & Condiotions </span>
                    </div>
                   
                    <button type="submit" className="my-btn w-100 "> <a href=""> Sign up </a> </button>
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

                <div className="wrapperCard ">
                  <p> Already have an account? <Link to="/login"> Login</Link></p>
                </div>
              </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Register





















