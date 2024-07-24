
// react icons 
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { MdOutlineDialpad } from "react-icons/md";
import { FaFacebookMessenger } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";
import { MdMarkChatRead } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { IoSend } from "react-icons/io5";

// images 
import photo from "../../assets/img/goutam.png";
import sujan from "../../assets/img/sujan.jpeg";


import "./Message.css";
const Message = () => {
  return (
    <>
    <div className="right-content">
      <div className="message-box">
        <div className="row">
          <div className="col-sm-4 ">
            <div className="card px-2 py-4 left-user-search ">
              <div className="search-box">
                <div className="left-search">
                  <span> <IoSearch /> </span>
                  <input type="search" placeholder="search username"/>
                </div>
                <p> <MdOutlineDialpad /> </p>
               </div>
               <div className="user-message-box">
            <div className="bottom-bar-notification">
                 <div className="single-item-noti custom my-2">
                         <div className="not-image">
                            <img src={photo} alt="" className="mail-img "/>
                            <div className="media-act "> </div>
                         </div>
                         <div className="not-info">
                              <h4> <span> <b>Goutam ray </b> ~ Now  </span></h4>
                              <h6> <a href=""> Lorem ipsum dolor sit amet.......</a>   </h6>
                         </div>
                         <div className="noti-drop">
                            <button className="count"> 03 </button>
                         </div>
                         <div className="noti-drop">
                            <button> <BsThreeDotsVertical /> </button>
                         </div>
                  </div>

                  <div className="single-item-noti custom my-2 no-bg ">
                         <div className="not-image">
                            <img src={photo} alt="" className="mail-img "/>
                            <div className="media-act not-active "> </div>
                         </div>
                         <div className="not-info">
                              <h4> <span> <b>Goutam ray </b> ~ Now  </span></h4>
                              <h6>  Lorem ipsum dolor sit amet, consectetur </h6>
                         </div>
                         <div className="noti-drop">
                            <button> <BsThreeDotsVertical /> </button>
                         </div>
                  </div>

                  <div className="single-item-noti custom my-2 no-bg ">
                         <div className="not-image">
                            <img src={photo} alt="" className="mail-img "/>
                            <div className="media-act "> </div>
                         </div>
                         <div className="not-info">
                              <h4> <span> <b>Goutam ray </b> ~ Now  </span></h4>
                              <h6> <a href=""> Lorem ipsum dolor sit amet, consectetur </a>   </h6>
                         </div>
                         <div className="noti-drop">
                            <button> <BsThreeDotsVertical /> </button>
                         </div>
                  </div>

                  <div className="single-item-noti custom my-2 no-bg ">
                         <div className="not-image">
                            <img src={photo} alt="" className="mail-img "/>
                            <div className="media-act not-active"> </div>
                         </div>
                         <div className="not-info">
                              <h4> <span> <b>Goutam ray </b> ~ Now  </span></h4>
                              <h6>  Lorem ipsum dolor sit amet, consectetur </h6>
                         </div>
                         <div className="noti-drop">
                            <button> <BsThreeDotsVertical /> </button>
                         </div>
                  </div>

                  <div className="single-item-noti custom my-2 no-bg ">
                         <div className="not-image">
                            <img src={photo} alt="" className="mail-img "/>
                            <div className="media-act not-active"> </div>
                         </div>
                         <div className="not-info">
                              <h4> <span> <b>Goutam ray </b> ~ Now  </span></h4>
                              <h6>  Lorem ipsum dolor sit amet . . . . . . </h6>
                         </div>
                         <div className="noti-drop">
                            <button className="count"> 01 </button>
                         </div>
                         <div className="noti-drop">
                            <button> <BsThreeDotsVertical /> </button>
                         </div>
                  </div>

                  <div className="single-item-noti custom my-2 no-bg ">
                         <div className="not-image">
                            <img src={photo} alt="" className="mail-img "/>
                            <div className="media-act "> </div>
                         </div>
                         <div className="not-info">
                              <h4> <span> <b>Goutam ray </b> ~ Now  </span></h4>
                              <h6> <a href=""> Lorem ipsum dolor sit amet, consectetur </a>   </h6>
                         </div>
                         <div className="noti-drop">
                            <button> <BsThreeDotsVertical /> </button>
                         </div>
                  </div>

                 
               </div>
            </div>
            </div>
           
          </div>

        <div className="col-sm-8">
          <div className="card p-4 shadow message-and-replay ">
             <div className="message-top-bar">

               <div className="bottom-bar-notification chat-message ">
                   <div className="single-item-noti abcde custom my-2 no-bg ">
                     <div className="custom-name">
                        <div className="not-image">
                            <img src={photo} alt="" className="mail-img "/>
                            <div className="media-act "> </div>
                         </div>
                         <div className="not-info">
                              <h4> <span> <b>Goutam ray </b> ~ Now  </span></h4>
                              <h6> active now </h6>
                         </div>
                     </div>
                        

                        <div className="d-flex gap-2">
                           <div className="noti-drop">
                              <button className="message-trash"> <FaFacebookMessenger /> </button>
                           </div>
                           <div className="noti-drop">
                              <button className="message-trash"> <FaTrash /> </button>
                           </div>
                           <div className="noti-drop">
                              <button className="message-trash"> <MdMarkChatRead /> </button>
                           </div>
                           <div className="noti-drop">
                              <button className="message-trash"> <FaRegUserCircle /> </button>
                           </div>
                        </div>
                   
                      
                    </div>

                 <div className="message-part-body"> 
                    <div className="client-message">
                        <ul>
                          <li>
                            <div className="client-photo">
                               <img src={photo} alt="" />
                            </div>
                            <div className="client-message">
                               <div className="chat-text">
                                <p className="first-message"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo dolore animi dolores autem assumenda fuga consequuntur, laboriosam laborum minus provident error officia quasi atque deleniti. </p>
                               </div>
                               <div className="chat-text2 my-2">
                                <p> Omnis dolorum tempora consequatur </p>
                               </div>
                               <p> 2 minute ago! </p>
                            </div>
                          </li>
                        </ul>
                    </div>

                    <div className="user-message-replay my-4">
                       <ul>
                          <li>

                            <div className="client-message">
                               <div className="chat-text">
                                <p className="first-message second "> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo dolore animi dolores autem assumenda fuga consequuntur, laboriosam laborum minus provident error officia quasi atque deleniti. </p>
                               </div>
                               <div className="chat-text2 my-2">
                                <p className="second "> Omnis dolorum tempora consequatur </p>
                               </div>
                               <p> 2 minute ago! </p>
                            </div>

                            <div className="client-photo">
                               <img src={sujan} alt="" />
                            </div>

                          </li>
                        </ul>
                    </div>

                    <div className="client-message ">
                        <ul>
                          <li>
                            <div className="client-photo">
                               <img src={photo} alt="" />
                            </div>
                            <div className="client-message">
                               <div className="chat-text">
                                <p className="first-message"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo dolore animi dolores autem assumenda fuga consequuntur, laboriosam laborum minus provident error officia quasi atque deleniti. </p>
                               </div>
                               <div className="chat-text2 my-2">
                                <p> Omnis dolorum tempora consequatur </p>
                               </div>
                               <p> 2 minute ago! </p>
                            </div>
                          </li>
                        </ul>
                    </div>

                    <div className="user-message-replay my-4">
                       <ul>
                          <li>

                            <div className="client-message">
                               <div className="chat-text">
                                <p className="first-message second "> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo dolore animi dolores autem assumenda fuga consequuntur, laboriosam laborum minus provident error officia quasi atque deleniti. </p>
                               </div>
                               <div className="chat-text2 my-2">
                                <p className="second "> Omnis dolorum tempora consequatur </p>
                               </div>
                               <p> 2 minute ago! </p>
                            </div>

                            <div className="client-photo">
                               <img src={sujan} alt="" />
                            </div>

                          </li>
                        </ul>
                    </div>

                   </div>

                   <div className="send-message-part">
                     <input type="search" placeholder="Type a message"/>
                     <span> <IoSend /> </span>
                   </div>
                </div>

               </div>
            </div>
          </div>
        </div>
      </div>

      </div>
    </>
  )
}

export default Message











