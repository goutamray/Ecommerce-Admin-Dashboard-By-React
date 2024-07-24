
import { Link } from "react-router-dom";
import { useContext, useState } from "react";

// images 
import photo from "../../assets/img/goutam.png";
import sujan from "../../assets/img/sujan.jpeg";
import logo from "../../assets/img/logo.webp";
import shirt from "../../assets/img/shirt.png";

// react icons 
import { MdMenuOpen, MdOutlineLightMode } from "react-icons/md";
import { IoMenu } from "react-icons/io5"; 
import { CiDark } from "react-icons/ci"; 
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaCaretDown, FaHeart, FaRegUserCircle } from "react-icons/fa";
import { IoIosNotifications, IoMdMail, IoMdSettings } from "react-icons/io";
import { IoCart } from "react-icons/io5";
import { PiShieldWarningFill } from "react-icons/pi";
import { RiLock2Fill } from "react-icons/ri";
import { IoMdMenu } from "react-icons/io";


import SearchBox from "../searchBox/SearchBox";
import { MyContext } from "../../App";

import "./Header.css";
const Header = () => {
  const [openDrop, setOpenDrop ] = useState(false); 
  const [openNotification, setOpenNotification ] = useState(false); 
  const [openMail, setOpenMail ] = useState(false); 
  const [cartOpen, setcartOpen ] = useState(false); 
  const [isLogin , setIsLogin ] = useState(false); 

  const context = useContext(MyContext)
  
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
      <header className="d-flex align-items-center shadow-sm">
        <div className="container-fluid">
           <div className="row header-row ">

         {/********  header part 1  ************/}
            <div className="col-sm-2 col-md-12 part1 menu-option ">
              {/* logo part  */}
                <div className="logo">
                   <Link to="/" className="d-flex align-items-center ">
                       <img src={logo} className="logo"/>
                       <span className="logo-name "> HOTASH </span>
                     </Link>
                </div>
                <div className="mobile-menu">
                   <button onClick={() => alert("wait")} 
                   > 
                     <IoMdMenu /> 
                  </button>
                </div>
            </div>

         {/********  header part 2  ********/}
             <div className="col-sm-3 part2 mobile-hide">
                <div className="menu-part ">
                  <button className="open-btn mobile-none" onClick={() => context.setIsToggleSideBar(!context.isToggleSidebar)}> 
                  {
                     context.isToggleSidebar === false ?  <MdMenuOpen />  :  <IoMenu /> 
                  }
                   
                  </button>
                  <div className="search-box">
                    <SearchBox /> 
                  </div>
                </div>
             </div>

         {/********  header part 3  ********/}
            <div className="col-sm-7 part3 ">
             <div className="menu-part menu-last ">
                  {/* tablet show search box */}
                  <div className="search-box tablet-show-search ">
                    <SearchBox /> 
                  </div>
              
                
                  <button className="open-btn " onClick={() => context.setThemeMode(!context.themeMode)} >
                    {
                     context.themeMode === true ?  <MdOutlineLightMode />  :  <CiDark /> 
                    }
                  </button>

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
                  
                  {/**** mail box  ******/}
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
                  
                  {/**** notofication box *****/}
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
                            <img src={sujan} alt="" />
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
                            <img src={sujan} alt="" />
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
                            <img src={sujan} alt="" />
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
                            <img src={sujan} alt="" />
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
                            <img src={sujan} alt="" />
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
                  
                  {
                     isLogin !== true ? <Link to="/login"> <button className="signUp-btn"> Sign Up </button> </Link>  :
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
                  }
                  
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












