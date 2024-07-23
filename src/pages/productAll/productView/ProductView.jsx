
// react icons 
import { FaStoreAlt , FaStarHalfAlt, FaStar} from "react-icons/fa";
import { MdPix , MdSummarize, MdVerified, MdOutlineReply} from "react-icons/md";
import { IoMdSettings , IoIosColorPalette} from "react-icons/io";
import { IoPricetagSharp } from "react-icons/io5";
import { FaCartArrowDown } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";


import BreadCrumb from "../../../components/BreadCrumb/BreadCrumb";

// product images
import goutam from "../../..//assets/img/goutam.png";
import sujan from "../../../assets/img/sujan.jpeg";
import shirt1 from "../../../assets/product/01.webp";
import shirt2 from "../../../assets/product/02.webp";
import shirt3 from "../../../assets/product/03.webp";
import shirt4 from "../../../assets/product/04.webp";
import shirt5 from "../../../assets/product/05.webp";



import "./ProductView.css";
const ProductView = () => {
  return (
    <>
      <div className="right-content">
        <BreadCrumb title={"Product View"} page={"Products"}/> 
        


       <div className="product-view card shadow p-4 my-4 dark-mode ">
           <div className="row product-view-part ">
            <div className="col-md-5 left-view-part ">
                <h6> Product Gallery </h6>
                <div className="product-view-galary">
                    <img src={shirt1} alt="" />
                    <div className="galary-view">
                      <div className="single-img-view">
                         <div className="img-box">
                           <img src={shirt2} alt="" />
                         </div>
                         <div className="img-box">
                           <img src={shirt3} alt="" />
                         </div>
                         <div className="img-box">
                           <img src={shirt4} alt="" />
                         </div>
                         <div className="img-box">
                           <img src={shirt5} alt="" />
                         </div>
                      </div>
                    </div>
                </div>
            </div>
            <div className="col-md-7 right-view-part">
                <h6> Product Details </h6>
                <div className="product-description">
                    <h3> Formal suits for men wedding slim fit 3 piece dress business party jacket </h3>
                    <div className="product-view-meta">
                       <span className="brand"> <FaStoreAlt /> </span>
                       <h5> brand </h5>
                       <span> : </span>
                       <p> ecstasy </p>
                    </div>

                    <div className="product-view-meta">
                       <span className="brand"> <MdPix /> </span>
                       <h5> Category </h5>
                       <span> : </span>
                       <p> Mans </p>
                    </div>

                    <div className="product-view-meta">
                       <span className="brand"> <IoMdSettings /> </span>
                       <h5> Tags </h5>
                       <span> : </span>
                       <ul>
                        <li> party </li>
                        <li> dress </li>
                        <li> smart </li>
                        <li> man </li>
                        <li> styles</li>
                       </ul>
                    </div>

                    <div className="product-view-meta">
                       <span className="brand"> <IoIosColorPalette /> </span>
                       <h5> Color </h5>
                       <span> : </span>
                       <ul>
                        <li> red </li>
                        <li> green </li>
                        <li> blue </li>
                        <li> yellow </li>
                        <li> purple </li>
                       </ul>
                    </div>

                    <div className="product-view-meta">
                       <span className="brand"> <MdSummarize /> </span>
                       <h5> Size </h5>
                       <span> : </span>
                       <ul>
                        <li> sm </li>
                        <li> md </li>
                        <li> lg </li>
                        <li> xl </li>
                        <li> xxl </li>
                       </ul>
                    </div>

                    <div className="product-view-meta">
                       <span className="brand"> <IoPricetagSharp /> </span>
                       <h5> Price </h5>
                       <span> : </span>
                       <p> <span className="sale-price"> $37.00  </span> <span className="reg-price"> $42.00 </span> </p>
                    </div>

                    <div className="product-view-meta">
                       <span className="brand"> <FaCartArrowDown /> </span>
                       <h5> Stock </h5>
                       <span> : </span>
                       <p> (68) Piece </p>
                    </div>
                    <div className="product-view-meta">
                       <span className="brand"> <FaStarHalfAlt /> </span>
                       <h5> Review </h5>
                       <span> : </span>
                       <p> (03) Review </p>
                    </div>

                    <div className="product-view-meta">
                       <span className="brand"> <MdVerified /> </span>
                       <h5> Published </h5>
                       <span> : </span>
                       <p> 02 Feb 2020 </p>
                    </div>

  
                </div>
                
            </div>
           </div>

           <div className="row">
            <div className="col">
               <div className="product-short-desc">
                  <h6> Product Description </h6>
                  <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae reprehenderit repellendus expedita esse cupiditate quos doloremque rerum, corrupti ab illum est nihil, voluptate ex dignissimos! Sit voluptatem delectus nam, molestiae, repellendus ab sint quo aliquam debitis amet natus doloremque laudantium? Repudiandae, consequuntur, officiis quidem quo deleniti, autem non laudantium sequi error molestiae ducimus accusamus facere velit consectetur vero dolore natus nihil temporibus aspernatur quia consequatur? Consequuntur voluptate deserunt repellat tenetur debitis molestiae doloribus dicta. In rem illum dolorem atque ratione voluptates asperiores maxime doloremque laudantium magni neque ad quae quos quidem, quaerat rerum ducimus blanditiis reiciendis </p>
                </div>
                <div className="customer">
                     <h6> Rating Analytics </h6>     
                </div>
                   <div className="row">
                    <div className="col-sm-3"></div>

                    <div className="col-sm-4 custom-progress">
                        <div className="progress-box">
                            <ul>
                              <li>
                                <span> 5 Star </span>
                                <div className="review-width">
                                  <div className="review-color"></div>
                                </div>
                                <span>(25)</span>
                              </li>
                              <li>
                                <span> 4 Star </span>
                                <div className="review-width">
                                  <div className="review-color four"></div>
                                </div>
                                <span>(20)</span>
                              </li>
                              <li>
                                <span> 3 Star </span>
                                <div className="review-width">
                                  <div className="review-color three"></div>
                                </div>
                                <span>(15)</span>
                              </li>
                              <li>
                                <span> 2 Star </span>
                                <div className="review-width">
                                  <div className="review-color two"></div>
                                </div>
                                <span>(10)</span>
                              </li>
                              <li>
                                <span> 1 Star </span>
                                <div className="review-width">
                                  <div className="review-color one"></div>
                                </div>
                                <span>(5)</span>
                              </li>
                            </ul>
                        </div> 
                    </div>

                    <div className="col-sm-3 custom-progress">
                      <div className="total-review">
                         <h3> Total Review (38) </h3>
                         <h4> 4.9  </h4>
                         <div className="rev-icon">
                          <span> <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStarHalfAlt /> </span>
                         </div>
                         <p> Your Average Rating Star </p>
                      </div>
                    </div>
                    <div className="col-sm-2"></div>
                   </div>

                <div className="customer bottom">
                     <h6 > Customer_reviews </h6>     
                </div>

                <div className="row my-4">
                  <div className="col-sm-11 left-cutomer-rev p-5">
                     <div className="customer-single-box ">
                        <div className="name-box">
                           <img src={sujan} alt="" />
                           <div className="name-time">
                              <h3> Goutam ray </h3>
                              <p> 25 minutes ago! </p>
                           </div>
                        </div>
                        <div className="replay-btn">
                          <button className="btn btn-primary"><span> <MdOutlineReply /> </span> Replay </button>
                        </div>
                     </div>
                     <div className="rating-customer mt-2">
                       <span> <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStarHalfAlt /> </span>
                     </div>
                     <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quo nostrum dolore fugiat ducimus labore debitis unde autem recusandae? Eius harum tempora quis minima, adipisci natus quod magni omnis quas. </p>
                  </div>
                  <div className="col-sm-1 right-part-rev ">
                    <span> <BsThreeDotsVertical /> </span>
                  </div>
                </div>


                <div className="row my-4 ">
                  <div className="col-sm-1 left-cutomer-gap "> </div>
                  <div className="col-sm-10 left-cutomer-rev p-5 admin">
                     <div className="customer-single-box ">
                        <div className="name-box">
                           <img src={goutam} alt="" className="sujan"/>
                           <div className="name-time">
                              <h3> Goutam ray </h3>
                              <p> 25 minutes ago! </p>
                           </div>
                        </div>
                        <div className="replay-btn">
                          <button className="btn btn-primary"><span> <MdOutlineReply /> </span> Replay </button>
                        </div>
                     </div>
                     <div className="rating-customer mt-2">
                       <span > <p> Admin </p> </span>
                     </div>
                     <p className="admin-text"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quo nostrum dolore fugiat ducimus labore debitis unde autem recusandae? Eius harum tempora quis minima, adipisci natus quod magni omnis quas. </p>
                  </div>
                  <div className="col-sm-1 right-part-rev ">
                    <span> <BsThreeDotsVertical /> </span>
                  </div>
                </div>

                <div className="row my-4 ">
                  <div className="col-sm-1 left-cutomer-gap "> </div>
                  <div className="col-sm-10 left-cutomer-rev p-5 admin">
                     <div className="customer-single-box ">
                        <div className="name-box">
                           <img src={goutam} alt="" />
                           <div className="name-time">
                              <h3> Goutam ray </h3>
                              <p> 25 minutes ago! </p>
                           </div>
                        </div>
                        <div className="replay-btn">
                          <button className="btn btn-primary"><span> <MdOutlineReply /> </span> Replay </button>
                        </div>
                     </div>
                     <div className="rating-customer mt-2">
                   
                     </div>
                     <p className="admin-text"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quo nostrum dolore fugiat ducimus labore debitis unde autem recusandae? Eius harum tempora quis minima, adipisci natus quod magni omnis quas. </p>
                  </div>
                  <div className="col-sm-1 right-part-rev ">
                    <span> <BsThreeDotsVertical /> </span>
                  </div>
                </div>
            
                <div className="row my-4">
                  <div className="col-sm-11 left-cutomer-rev p-5">
                     <div className="customer-single-box ">
                        <div className="name-box">
                           <img src={sujan} alt="" />
                           <div className="name-time">
                              <h3> Goutam ray </h3>
                              <p> 25 minutes ago! </p>
                           </div>
                        </div>
                        <div className="replay-btn">
                          <button className="btn btn-primary"><span> <MdOutlineReply /> </span> Replay </button>
                        </div>
                     </div>
                     <div className="rating-customer mt-2">
                       <span> <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStarHalfAlt /> </span>
                     </div>
                     <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quo nostrum dolore fugiat ducimus labore debitis unde autem recusandae? Eius harum tempora quis minima, adipisci natus quod magni omnis quas. </p>
                  </div>
                  <div className="col-sm-1 right-part-rev ">
                    <span> <BsThreeDotsVertical /> </span>
                  </div>
                </div>
 
                <div className="row my-4 ">
                  <div className="col-sm-1 left-cutomer-gap "> </div>
                  <div className="col-sm-10 left-cutomer-rev p-5 admin">
                     <div className="customer-single-box ">
                        <div className="name-box">
                           <img src={goutam} alt="" />
                           <div className="name-time">
                              <h3> Goutam ray </h3>
                              <p> 25 minutes ago! </p>
                           </div>
                        </div>
                        <div className="replay-btn">
                          <button className="btn btn-primary"><span> <MdOutlineReply /> </span> Replay </button>
                        </div>
                     </div>
                     <div className="rating-customer mt-2">
                       <span > <p> Admin </p> </span>
                     </div>
                     <p className="admin-text"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quo nostrum dolore fugiat ducimus labore debitis unde autem recusandae? Eius harum tempora quis minima, adipisci natus quod magni omnis quas. </p>
                  </div>
                  <div className="col-sm-1 right-part-rev ">
                    <span> <BsThreeDotsVertical /> </span>
                  </div>
                </div>

                <div className="row my-4">
                  <div className="col-sm-11 left-cutomer-rev p-5">
                     <div className="customer-single-box ">
                        <div className="name-box">
                           <img src={sujan} alt="" className="sujan" />
                           <div className="name-time">
                              <h3> Goutam ray </h3>
                              <p> 25 minutes ago! </p>
                           </div>
                        </div>
                        <div className="replay-btn">
                          <button className="btn btn-primary"><span> <MdOutlineReply /> </span> Replay </button>
                        </div>
                     </div>
                     <div className="rating-customer mt-2">
                       <span> <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStarHalfAlt /> </span>
                     </div>
                     <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quo nostrum dolore fugiat ducimus labore debitis unde autem recusandae? Eius harum tempora quis minima, adipisci natus quod magni omnis quas. </p>
                  </div>
                  <div className="col-sm-1 right-part-rev ">
                    <span> <BsThreeDotsVertical /> </span>
                  </div>
                </div>

              </div>
            </div>

            <div className="row">
                 <div className="col form-col ">
                    <div className="customer review-replay ">
                     <h6> Review Reply Form </h6>     
                   </div>
                   <div className="message-form">
                    <textarea name="" id="" cols="30" rows="10" placeholder="message"></textarea>
                   </div>
                   <button className=" btn btn-primary drop-btn mt-2"> drop your replies </button>
                </div>
            </div>

         </div>
      </div>
    </>
  )
}

export default ProductView
















