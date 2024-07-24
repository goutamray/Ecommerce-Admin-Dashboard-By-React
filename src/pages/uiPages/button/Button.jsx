

import BreadCrumb from "../../../components/BreadCrumb/BreadCrumb";

// react icons 
import { MdVerified } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai"; 
import { FaHeart } from "react-icons/fa";
import { IoWater } from "react-icons/io5"; 
import { FaCodeCompare } from "react-icons/fa6";
import { IoMailOpenOutline } from "react-icons/io5"; 
import { MdOutlineUnarchive } from "react-icons/md";

import "./Button.css";

const Button = () => {
  return (
    <>
      <div className="right-content">
        <BreadCrumb title={"Buttons Variant"} page={"User Interface"}/> 


      <div className="card p-5 shadow my-4 custom-button">
        <div className="row">
          <div className="col-sm-6">
            <div className="bootstrap-btn">  
              <h4> Bootstrap Buttons </h4>
              <div className="all-big-bootstrap-btn my-3 mb-5">
                    <button type="button" className="btn btn-lg  btn-primary">Button</button>
                    <button type="button" className="btn btn-lg btn-secondary">Button</button>
                    <button type="button" className="btn btn-lg btn-success">Button</button>
                    <button type="button" className="btn btn-lg btn-danger">Button</button>
                    <button type="button" className="btn btn-lg btn-warning">Button</button>
                    <button type="button" className="btn btn-lg btn-info">Button</button>
                    <button type="button" className="btn btn-lg btn-dark">Button</button>
                 </div>

              <div className="all-small-bootstrap-btn ">
                  <button type="button" className="btn btn-primary">Button</button>
                  <button type="button" className="btn btn-secondary">Button</button>
                  <button type="button" className="btn btn-success">Button</button>
                  <button type="button" className="btn btn-danger">Button</button>
                  <button type="button" className="btn btn-warning">Button</button>
                  <button type="button" className="btn btn-info">Button</button>
                  <button type="button" className="btn btn-dark">Button</button>
              </div>
            </div>
          </div>
          <div className="col-sm-6 ">
              <div className="custom-btn">
                <h4> Custom Buttons </h4>
                <div className="all-big-bootstrap-btn-abc mb-5 my-3">
                    <button type="button" className="btn btn-lg  btn-primary-abc"> <span> <MdVerified /> </span> Button</button>
                    <button type="button" className="btn btn-lg btn-secondary-abc"> <span> <AiOutlineLike /> </span>Button</button>
                    <button type="button" className="btn btn-lg btn-success-abc"> <span> <FaHeart /> </span>Button</button>
                    <button type="button" className="btn btn-lg btn-danger-abc"> <span> <IoWater /> </span>Button</button>
                    <button type="button" className="btn btn-lg btn-warning-abc"> <span> <FaCodeCompare /> </span>Button</button>
                    <button type="button" className="btn btn-lg btn-info-abc"> <span> <IoMailOpenOutline /> </span>Button</button>
                  
                    <button type="button" className="btn btn-lg btn-dark-abc"><span> <MdOutlineUnarchive /> </span> Button</button>
                    <button type="button" className="btn btn-lg btn-custom-abc"><span> <MdOutlineUnarchive /> </span> Button </button>
              </div>
              <div className="all-small-bootstrap-btn ">
                  <button type="button" className="btn btn-primary"><span> <MdVerified /> </span> Button</button>
                  <button type="button" className="btn btn-secondary"><span> <AiOutlineLike /> </span> Button</button>
                  <button type="button" className="btn btn-success"><span> <FaHeart /> </span> Button</button>
                  <button type="button" className="btn btn-danger"><span> <IoWater /> </span> Button</button>
                  <button type="button" className="btn btn-warning"><span> <FaCodeCompare /> </span> Button</button>
                  <button type="button" className="btn btn-info"><span> <IoMailOpenOutline /> </span> Button</button>
                  <button type="button" className="btn btn-dark"><span> <MdOutlineUnarchive /> </span> Button </button>
              </div>
              </div>
          </div>
        </div>
      </div>


      </div>
    </>
  )
}

export default Button; 










