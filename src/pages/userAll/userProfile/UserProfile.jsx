
// react icons 
import { HiDotsHorizontal } from "react-icons/hi"
import { FaPhoneVolume } from "react-icons/fa6";
import { IoDocumentTextSharp } from "react-icons/io5"; 
import { CgWebsite } from "react-icons/cg";
import { FaAddressCard } from "react-icons/fa6";
import { FaFacebookF, FaShoppingBag } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { FaCartPlus } from "react-icons/fa6";


import BreadCrumb from "../../../components/BreadCrumb/BreadCrumb"
import goutam from "../../../assets/img/goutam.png"

import "./UserProfile.css";

const UserProfile = () => {
  return (
    <>
      <div className="right-content">
          <BreadCrumb title={"User Profile"} page={"Users"}/> 


        <div className="row my-4 custom-user-part ">
          <div className="col-sm-5 user-part1 ">
            <div className="card p-3 shadow profile-left ">
               <div className="top-part">
                  <h4> User_information </h4>
                  <p><HiDotsHorizontal /></p>
                </div>
                <div className="user-img-part1">
                  <img src={goutam} alt="" />
                  <div className="user-info">
                    <h4>Goutam Ray  </h4>
                    <p> Full Stack Developer </p>
                  </div>
                </div>
                <div className="contact-box">
                  <h6> Communication </h6>
                  <ul>
                    <li> <span> <FaPhoneVolume /> </span> 01755302053 </li>
                    <li> <span> <IoDocumentTextSharp /> </span> goutamr362@gmail.com </li>
                    <li> <span> <CgWebsite /> </span> developergoutam.com </li>
                    <li> <span> <FaAddressCard /> </span> Shalbon Mistripara, Rangpur </li>
                  </ul>
                </div>
                <div className="biography my-2">
                  <h6> Biography </h6>
                  <p> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets </p>
                </div>

                <div className="Elsewhere mt-2">
                  <h6> Elsewhere </h6>
                </div>
                <div className="social-media">
                  <button className="btn facebook "> <span><FaFacebookF /></span> FaceBook </button>
                  <button className="btn twitter"><span><FaTwitter /></span> Twitter</button>
                  <button className="btn linkedin"><span><FaLinkedin /></span> Linkedin </button>
                  <button className="btn whatsapp"> <span><RiWhatsappFill /></span> WhatsApp </button>
                  <button className="btn youtube"><span> <FaYoutube /></span> Youtube </button>
                </div>
            </div>
          </div>
          <div className="col-sm-7 user-part2">
            <div className="user-right-part">

              <div className="product-list-topper p-0 mb-4">
               <div className="row">
                  <div className="col-sm-4 part1 ">
                      <div className="total-product ">
                          <div className="left-top-part ">
                              <h2> 547 </h2>
                              <span> <FaCartPlus /> </span>
                          </div>
                          <p> total products </p>
                      </div>
                  </div>
                  <div className="col-sm-4 part1 ">
                      <div className="total-product category ">
                          <div className="left-top-part ">
                              <h2> 605 </h2>
                              <span className="widget"> <FaStar /></span>
                          </div>
                          <p> total_categories </p>
                      </div>
                  </div>
                  <div className="col-sm-4 part1 ">
                      <div className="total-product brand">
                          <div className="left-top-part ">
                              <h2> 249 </h2>
                              <span className="verify"> <FaShoppingBag /> </span>
                          </div>
                          <p> total_barnds </p>
                      </div>
                  </div>
                </div>
              </div>
           </div>
              <div className="card p-3 shadow right-part-user ">
                 <div className="top-part">
                    <h4> Recent Activities </h4>
                    <p><HiDotsHorizontal /></p>
                 </div>
             <div className="all-data-box">
                 <div className="user-profile-time">
                  <ul>
                    <li>
                      <div className="all-content">
                          <div className="user-details-time">
                            <h6> Your account is logged in </h6>
                            <p> 45 min ago </p>
                          </div>
                          <p> Vestibulum rutrum rutrum neque. Aenean auctor gravida sem quam pede lobortis ligula, sit amet eleifend. </p>
                          <div className="user-cart-media">
                            <img src={goutam} alt="" />
                            <p> Goutam ray </p>
                          </div>
                          </div>                    
                    </li>
                  </ul>
                 </div>
                 <div className="user-profile-time">
                  <ul>
                    <li>
                      <div className="all-content">
                          <div className="user-details-time">
                            <h6 className="changed"> Current language has been changed </h6>
                            <p> 24 hr ago </p>
                          </div>
                          <p> Vestibulum rutrum rutrum neque. Aenean auctor gravida sem quam pede lobortis ligula, sit amet eleifend. </p>
                          <div className="user-cart-media">
                            <img src={goutam} alt="" />
                            <p> Goutam ray </p>
                          </div>
                          </div>                    
                    </li>
                  </ul>
                 </div>
                 <div className="user-profile-time">
                  <ul>
                    <li>
                      <div className="all-content">
                          <div className="user-details-time">
                            <h6 className="no-product "> Asked about this product</h6>
                            <p> 5 min ago </p>
                          </div>
                          <p> Vestibulum rutrum rutrum neque. Aenean auctor gravida sem quam pede lobortis ligula, sit amet eleifend. </p>
                          <div className="user-cart-media">
                            <img src={goutam} alt="" />
                            <p> Goutam ray </p>
                          </div>
                          <button className="btn btn-primary"> GO THERE </button> 
                       </div>
                                                         
                    </li>
                  </ul>               
                 </div>
                 </div>
              </div>
          </div>
        </div>


          
      </div>
    </>
  )
}

export default UserProfile









