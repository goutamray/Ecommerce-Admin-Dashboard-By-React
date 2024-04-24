
import logo from "../../../assets/img/logo.webp"
import { MdEmail } from "react-icons/md"; 

import "./Forget.css"; 
import { Link } from "react-router-dom";
const Forget = () => {
  return (
    <>
      <div className="right-content">
        <div className="row">
        <div className="col-sm-4"> </div>
          <div className="col-sm-4"> 
              <div className="logo-box-text">
                <img src={logo} alt="" />
               <h4> reset the password </h4>
             </div>
             <div className="forget-box p-4">
                 <span> <MdEmail /></span>
                 <input type="text" className="form-control" placeholder="Enter Your Email"/>
                 <button className="btn  w-100 btn-primary mt-4"> GET LINK </button>
             </div>

             <div className="login-box ">
                  <p> remember the password? <Link to="/login"> Login </Link></p>
             </div>
          </div>
          <div className="col-sm-4"> </div>
        </div>
      </div>
    </>
  )
}

export default Forget
