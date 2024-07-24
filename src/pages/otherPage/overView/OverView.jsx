
// images 
import logo from "../../../assets/img/logo.webp"; 
import bootstrap from "../../../assets/img/bs.webp"
import react from "../../../assets/img/react.webp"

import { Link } from "react-router-dom";

import "./OverView.css"; 

const OverView = () => {
  return (
    <>
      <div className="right-content">
         <div className="overview">

             <div className="logo-part">
               <img src={logo} alt="" />
               <h2> HOTASH </h2>
             </div>
             <div className="content-react py-4">
               <h1> React Admin Dashboard</h1>
               <h6> This template built with powerful user interface and highly responsive experience <br/> with a versatile dashboard such as CRM, eCommerce, and analytics. </h6>
             </div>
             <div className="build-width">
              <h3> Build With - </h3>
              <img src={react} alt="" />
              <img src={bootstrap} alt="" />
             </div>
             <button className="btn btn-primary btn-lg"> <Link to="/ecommerce"> EXPLORE NOW </Link>  </button>

         </div>
      </div>
    </>
  )
}

export default OverView


