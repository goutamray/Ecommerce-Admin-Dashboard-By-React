
import { Link } from "react-router-dom";
import photo from "../../assets/img/goutam.png";
import logo from "../../assets/img/logo.webp";
import shirt from "../../assets/img/shirt.png";


// react icons 
import { MdMenuOpen, MdOutlineLightMode } from "react-icons/md";
// import { IoMenu } from "react-icons/io5"; 
// import { CiDark } from "react-icons/ci"; 
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaCaretDown, FaHeart, FaRegUserCircle } from "react-icons/fa";
import { IoIosNotifications, IoMdMail, IoMdSettings } from "react-icons/io";
import { IoCart } from "react-icons/io5";
import { PiShieldWarningFill } from "react-icons/pi";
import { RiLock2Fill } from "react-icons/ri";


import SearchBox from "../searchBox/SearchBox";

import { useState } from "react";
import "./Header.css";
const Header = () => {
  const [openDrop, setOpenDrop ] = useState(false); 
  const [openNotification, setOpenNotification ] = useState(false); 
  const [openMail, setOpenMail ] = useState(false); 
  const [cartOpen, setcartOpen ] = useState(false); 
  
 // handle open 
 const handleOpen  = () => {
  setOpenDrop(() => !openDrop);
 };

 // handle close
 const handleClose  = () => {
  setOpenDrop(false);
 };

 // handle notification
 const handleOpenNoti  = () => {
  setOpenNotification(() => !openNotification);
 };

 // handle mail
 const handleOpenMail  = () => {
  setOpenMail(() => !openMail);
 };

 // handle notification
 const handleOpenCart  = () => {
  setcartOpen(() => !cartOpen);
 }



  return (
    <>
      <header className="d-flex align-items-center">
        <div className="container-fluid">
           <div className="row header-row ">

            <div className="col-sm-2 part1 ">
              {/* logo part  */}
                <div className="logo">
                   <Link to="/" className="d-flex align-items-center ">
                       <img src={logo} className="logo"/>
                       <span className="logo-name "> HOTASH </span>
                     </Link>
                </div>
            </div>

             <div className="col-sm-3 part2 ">
                <div className="menu-part ">
                  <button className="open-btn "> <MdMenuOpen /> </button>
                  <div className="search-box">
                    <SearchBox /> 
                  </div>
                </div>
             </div>

            <div className="col-sm-7 part3 ">
             <div className="menu-part menu-last ">
                  <button className="open-btn "> <MdOutlineLightMode /> </button>
                  <button className="open-btn cart-icon-top " onClick={handleOpenCart}> <IoCart /> 
                    <div className="topper-box"> 
                        <span> 25 </span>
                    </div>
                  </button>
                  {
                    cartOpen === true && 
                    <div className="notification-drop cart-dropd shadow">
                    <div className="top-bar-notification">
                      <h4> Orders (15) </h4>
                      <p> <IoMdSettings /> </p>
                    </div>
                    <div className="bottom-bar-notification">
                      <div className="single-item-noti custom my-2">
                         <div className="not-image cart-abc">
                            <img src={shirt} alt="" className="mail-img "/>
                           
                         </div>
                         <div className="not-info">
                              <h4> <span> <b>Goutam ray </b> - now  </span></h4>
                              <h6> (  $289.00 ) <span> total price </span>  </h6>
                         </div>
                         <div className="noti-drop">
                            <button> <BsThreeDotsVertical /> </button>
                         </div>
                      </div>
                      <div className="single-item-noti custom my-2">
                      <div className="not-image cart-abc">
                            <img src={shirt} alt="" className="mail-img "/>
                      
                         </div>
                         <div className="not-info">
                              <h4> <span> <b> Shanto ray </b> - 1h  </span></h4>
                              <h6> (  $289.00 ) <span> total price </span>  </h6>
                         </div>
                         <div className="noti-drop">
                            <button> <BsThreeDotsVertical /> </button>
                         </div>
                      </div>
                      <div className="single-item-noti custom my-2">
                      <div className="not-image cart-abc">
                            <img src={shirt} alt="" className="mail-img "/>
                         
                         </div>
                         <div className="not-info">
                              <h4> <span> <b>Hori Shankor ray </b> - 1d  </span></h4>
                              <h6> (  $289.00 ) <span> total price </span>  </h6>
                         </div>
                         <div className="noti-drop">
                            <button> <BsThreeDotsVertical /> </button>
                         </div>
                      </div>
                      <div className="single-item-noti custom my-2">
                      <div className="not-image cart-abc">
                            <img src={shirt} alt="" className="mail-img "/>
                        
                         </div>
                         <div className="not-info">
                              <h4> <span> <b>Durjay ray </b> - 3d  </span></h4>
                              <h6> (  $289.00 ) <span> total price </span>  </h6>
                         </div>
                         <div className="noti-drop">
                            <button> <BsThreeDotsVertical /> </button>
                         </div>
                      </div>
                      <div className="single-item-noti custom my-2">
                      <div className="not-image cart-abc">
                            <img src={shirt} alt="" className="mail-img "/>
                           
                         </div>
                         <div className="not-info">
                              <h4> <span> <b>Uttam ray </b> - 5d  </span></h4>
                              <h6> (  $289.00 ) <span> total price </span>  </h6>
                         </div>
                         <div className="noti-drop">
                            <button> <BsThreeDotsVertical /> </button>
                         </div>
                      </div>
                    
                    </div>
                    <div className="footer-bar">
                      <button> View All Orders </button>
                    </div>
                    </div>
                  }
                  


                  <button className="open-btn " onClick={handleOpenMail}> <IoMdMail /> 
                    <div className="topper-box"> 
                        <span> 5 </span>
                    </div>
                  </button>
                  {
                    openMail === true && 
                    <div className="notification-drop shadow">
                    <div className="top-bar-notification">
                      <h4> Messages (23) </h4>
                      <p> <IoMdSettings /> </p>
                    </div>
                    <div className="bottom-bar-notification">
                      <div className="single-item-noti custom my-2">
                         <div className="not-image">
                            <img src={photo} alt="" className="mail-img "/>
                            <div className="media-act "> </div>
                         </div>
                         <div className="not-info">
                              <h4> <span> <b>Goutam ray </b> - 1h  </span></h4>
                              <h6> Lorem ipsum dolor sit amet, consectetur adipisicing elit.  </h6>
                         </div>
                         <div className="noti-drop">
                            <button> <BsThreeDotsVertical /> </button>
                         </div>
                      </div>
                      <div className="single-item-noti custom my-2">
                         <div className="not-image">
                            <img src={photo} alt="" className="mail-img "/>
                            <div className="media-act "> </div>
                         </div>
                         <div className="not-info">
                              <h4> <span> <b>Durjay ray  </b> - 6h  </span></h4>
                              <h6> Lorem ipsum dolor sit amet, consectetur adipisicing elit.  </h6>
                         </div>
                         <div className="noti-drop">
                            <button> <BsThreeDotsVertical /> </button>
                         </div>
                      </div>
                      <div className="single-item-noti custom my-2">
                         <div className="not-image">
                            <img src={photo} alt="" className="mail-img "/>
                            <div className="media-act "> </div>
                         </div>
                         <div className="not-info">
                              <h4> <span> <b>Uttam ray </b> - 1d  </span></h4>
                              <h6> Lorem ipsum dolor sit amet, consectetur adipisicing elit.  </h6>
                         </div>
                         <div className="noti-drop">
                            <button> <BsThreeDotsVertical /> </button>
                         </div>
                      </div>
                      <div className="single-item-noti custom my-2">
                         <div className="not-image">
                            <img src={photo} alt="" className="mail-img "/>
                            <div className="media-act "> </div>
                         </div>
                         <div className="not-info">
                              <h4> <span> <b>Boltu ray </b> - 2d  </span></h4>
                              <h6> Lorem ipsum dolor sit amet, consectetur adipisicing elit.  </h6>
                         </div>
                         <div className="noti-drop">
                            <button> <BsThreeDotsVertical /> </button>
                         </div>
                      </div>
                      <div className="single-item-noti custom my-2">
                         <div className="not-image">
                            <img src={photo} alt="" className="mail-img "/>
                            <div className="media-act "> </div>
                         </div>
                         <div className="not-info">
                              <h4> <span> <b>Shanto ray </b> - 3d  </span></h4>
                              <h6> Lorem ipsum dolor sit amet, consectetur adipisicing elit.  </h6>
                         </div>
                         <div className="noti-drop">
                            <button> <BsThreeDotsVertical /> </button>
                         </div>
                      </div>
                    
                    </div>
                    <div className="footer-bar">
                      <button> View All Messages </button>
                    </div>
                    </div>
                  }
                  
                  <button className="open-btn " onClick={handleOpenNoti} > 
                  <IoIosNotifications /> 
                     <div className="topper-box"> 
                       <span> 20 </span>
                     </div>
                  </button>
                
                  {
                    openNotification === true && 
                    <div className="notification-drop shadow">
                    <div className="top-bar-notification">
                      <h4> Notifications (34) </h4>
                      <p> <IoMdSettings /> </p>
                    </div>
                    <div className="bottom-bar-notification">
                      <div className="single-item-noti my-2">
                         <div className="not-image">
                            <img src={photo} alt="" />
                            <div className="media">
                              <FaHeart />
                            </div>
                         </div>
                         <div className="not-info">
                              <h4> <span> <b>Goutam ray </b>  added to his favorite list  <b> Leather belt steve madden</b></span></h4>
                              <p> few seconds ago! </p>
                         </div>
                         <div className="noti-drop">
                            <button> <BsThreeDotsVertical /> </button>
                         </div>
                      </div>
                      <div className="single-item-noti my-2">
                         <div className="not-image">
                            <img src={photo} alt="" />
                            <div className="media">
                              <FaHeart />
                            </div>
                         </div>
                         <div className="not-info">
                              <h4> <span> <b>Goutam ray </b>  added to his favorite list  <b> Leather belt steve madden</b></span></h4>
                              <p> few seconds ago! </p>
                         </div>
                         <div className="noti-drop">
                            <button> <BsThreeDotsVertical /> </button>
                         </div>
                      </div>
                      <div className="single-item-noti my-2">
                         <div className="not-image">
                            <img src={photo} alt="" />
                            <div className="media">
                              <FaHeart />
                            </div>
                         </div>
                         <div className="not-info">
                              <h4> <span> <b>Goutam ray </b>  added to his favorite list  <b> Leather belt steve madden</b></span></h4>
                              <p> few seconds ago! </p>
                         </div>
                         <div className="noti-drop">
                            <button> <BsThreeDotsVertical /> </button>
                         </div>
                      </div>
                      <div className="single-item-noti my-2">
                         <div className="not-image">
                            <img src={photo} alt="" />
                            <div className="media">
                              <FaHeart />
                            </div>
                         </div>
                         <div className="not-info">
                              <h4> <span> <b>Goutam ray </b>  added to his favorite list  <b> Leather belt steve madden</b></span></h4>
                              <p> few seconds ago! </p>
                         </div>
                         <div className="noti-drop">
                            <button> <BsThreeDotsVertical /> </button>
                         </div>
                      </div>
                      <div className="single-item-noti my-2">
                         <div className="not-image">
                            <img src={photo} alt="" />
                            <div className="media">
                              <FaHeart />
                            </div>
                         </div>
                         <div className="not-info">
                              <h4> <span> <b>Goutam ray </b>  added to his favorite list  <b> Leather belt steve madden</b></span></h4>
                              <p> few seconds ago! </p>
                         </div>
                         <div className="noti-drop">
                            <button> <BsThreeDotsVertical /> </button>
                         </div>
                      </div>
                    </div>
                    <div className="footer-bar">
                      <button> View All Notifications </button>
                    </div>
                    </div>
                  }
                  

                 <button className="myAcc d-flex align-items-center" onClick={handleOpen}>
                   <div className="user-img">
                    <span className="rounded-circle">
                      <img src={photo} alt="" />        
                    </span>
                   </div>
                   <div className="user-name">
                      <div className="name">
                        <h4> Goutam Ray </h4>
                        <div className="drop-icon">
                          <FaCaretDown />
                        </div>
                      </div>
                      <div className="nick-name">
                        @goutamray53
                      </div>
                   </div>
                    
                 </button>
                 {
                  openDrop === true && 
                  <ul className="dropdown-menu-item shadow">
                  <li><Link className="dropdown-item" to="" onClick={handleClose} > <FaRegUserCircle /> my account </Link></li>
                  <li><Link className="dropdown-item" to="" onClick={handleClose}> <PiShieldWarningFill /> reset password </Link></li>
                  <li><Link className="dropdown-item" to="" onClick={handleClose}> <RiLock2Fill /> logout  </Link></li>
                  </ul>
                 }
                 
                 
              </div>
           </div>


           </div>
        </div>
      </header>
    </> 
  )
}

export default Header    












