
// react icons 
import { HiDotsHorizontal } from "react-icons/hi";
import { FaHeart } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { MdForum } from "react-icons/md";

// images 
import sujan from "../../assets/img/sujan.jpeg";
import goutam from "../../assets/img/goutam.png";

import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";

import "./Notification.css"; 

const Notification = () => {
  return (
    <>
       <div className="right-content">
           <BreadCrumb title={"Notification"}/> 

        <div className="card shadow p-3 my-4 not-part ">
            <div className="top-part">
               <h4> All Notification </h4>
               <p><HiDotsHorizontal /></p>
            </div>

          <div className="notification-design">
                 <div className="bottom-bar-notification not-page ">
                      <div className="single-item-noti mb-2">
                        <div className="left-part-noti">               
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
                         </div>
                         <div className="noti-drop">
                            <button> <RxCross2 /> </button>
                         </div>
                      </div>
                      <div className="single-item-noti my-2">
                        <div className="left-part-noti">               
                          <div className="not-image">
                              <img src={goutam} alt="" />
                              <div className="media">
                                <FaHeart />
                              </div>
                          </div>
                          <div className="not-info">
                                <h4> labonno leave her comment to Dressni Breathable female Dress</h4>
                                <p> few seconds ago! </p>
                          </div>
                         </div>
                         <div className="noti-drop">
                            <button> <RxCross2 /> </button>
                         </div>
                      </div>
                      <div className="single-item-noti my-2">
                        <div className="left-part-noti">               
                          <div className="not-image">
                              <img src={sujan} alt="" />
                              <div className="media">
                                <MdForum />
                              </div>
                          </div>
                          <div className="not-info">
                                <h4> tahmina announce to 50% discount New Exclusive long kurti</h4>
                                <p> few seconds ago! </p>
                          </div>
                         </div>
                         <div className="noti-drop">
                            <button> <RxCross2 /> </button>
                         </div>
                      </div>
                      <div className="single-item-noti my-2">
                        <div className="left-part-noti">               
                          <div className="not-image">
                              <img src={goutam} alt="" />
                              <div className="media">
                                <FaHeart />
                              </div>
                          </div>
                          <div className="not-info">
                                <h4> jubayer write to his latest blog Best fashion outfit this winter </h4>
                                <p> few seconds ago! </p>
                          </div>
                         </div>
                         <div className="noti-drop">
                            <button> <RxCross2 /> </button>
                         </div>
                      </div>
                      <div className="single-item-noti my-2">
                        <div className="left-part-noti">               
                          <div className="not-image">
                              <img src={sujan} alt="" />
                              <div className="media">
                                <MdForum />
                              </div>
                          </div>
                          <div className="not-info">
                                <h4> rebeka give a review to Exclusive Designed Multicolor long Kaptan</h4>
                                <p> few seconds ago! </p>
                          </div>
                         </div>
                         <div className="noti-drop">
                            <button> <RxCross2 /> </button>
                         </div>
                      </div>
                      <div className="single-item-noti my-2">
                        <div className="left-part-noti">               
                          <div className="not-image">
                              <img src={goutam} alt="" />
                              <div className="media">
                                <FaHeart />
                              </div>
                          </div>
                          <div className="not-info">
                                <h4> hotash privacy updated and secure all this multitask platform</h4>
                                <p> few seconds ago! </p>
                          </div>
                         </div>
                         <div className="noti-drop">
                            <button> <RxCross2 /> </button>
                         </div>
                      </div>
                      <div className="single-item-noti my-2">
                        <div className="left-part-noti">               
                          <div className="not-image">
                              <img src={sujan} alt="" />
                              <div className="media">
                                <MdForum />
                              </div>
                          </div>
                          <div className="not-info">
                                <h4> Mahmudul added to his favorite list Leather belt steve madden</h4>
                                <p> few seconds ago! </p>
                          </div>
                         </div>
                         <div className="noti-drop">
                            <button> <RxCross2 /> </button>
                         </div>
                      </div>
                      
                    </div>
             </div>
           </div>

        </div>


    </>
  )
}

export default Notification











