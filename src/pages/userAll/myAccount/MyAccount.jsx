
import BreadCrumb from "../../../components/BreadCrumb/BreadCrumb";
import goutam from "../../../assets/img/goutam.png"

// react icons 
import { FaCloudUploadAlt } from "react-icons/fa"; 
import { MdOutlineVerified } from "react-icons/md";
import { IoIosLock } from "react-icons/io";
import { FaEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";
import { MdAddModerator } from "react-icons/md";
import { MdVerifiedUser } from "react-icons/md";

import { useState } from "react";

import "./MyAccount.css"; 

const MyAccount = () => {

   const [activeTab, setActiveTab] = useState(0); 
   const [open , setOpen] = useState(false)
   const [open2 , setOpen2] = useState(false)
   const [open3 , setOpen3] = useState(false)


  return (
    <>
      <div className="right-content">
          <BreadCrumb title={"My Account"} page={"Users"}/> 

       <div className="row my-4">
        <div className="col-sm-12">
           <div className="card p-3 shadow tab-content-btn "> 
              <div className="tab-button">
                <button className={`  ${activeTab === 0 && "active"} `}  onClick={() => setActiveTab(0)}> Edit Profile </button>
                <button   className={`  ${activeTab === 1 && "active"} `}  onClick={() => setActiveTab(1)}> Change Password </button>
                <button  className={`  ${activeTab === 2 && "active"} `}  onClick={() => setActiveTab(2)}> Other Settings </button>
              </div>
  
          {
            activeTab === 0 && 
            <div className="edit-profile">
              <div className="public-private-info p-5">
                 <div className="public-info">
                     <h6> Public InFormation </h6>
                 </div>
                 <div className="profile-box my-4">
                    <div className="row">
                      <div className="col-sm-4">
                        <div className="profile-photo">
                          <img src={goutam} alt="" />
                          <button> <span> <FaCloudUploadAlt /> </span> Upload </button>
                        </div>
                      </div>
                      <div className="col-sm-8">        
                          <div className="row">
                            <div className="col-sm-6">                    
                                <fieldset>
                                   <legend> FullName </legend>
                                   <input type="text" placeholder="Type here" className="form-control" defaultValue="Goutam ray"/>
                                </fieldset>                    
                            </div>
                            <div className="col-sm-6">
                               <fieldset>
                                   <legend> Username </legend>
                                   <input type="text" placeholder="Type here" className="form-control" defaultValue="@goutam"/>
                                </fieldset>
                            </div>
                          </div>
                          <div className="row my-2">                 
                               <fieldset>
                                   <legend> Biography </legend>
                                   <textarea name="" id="" cols="30" rows="6" placeholder="Type here" className="form-control" defaultValue="I am Goutam ray. I am full stack Developer. "></textarea>                           
                                </fieldset>               
                          </div>                   
                      </div>
                    </div>
                 </div>
               </div>


              <div className="public-private-info px-5 py-2">
                 <div className="public-info">
                     <h6 className="pr-2">Private InFormation </h6>
                 </div>
                 <div className="profile-box my-4">
                    <div className="row">
                      <div className="col-sm-4">
                          <fieldset>
                              <legend> Unique Id </legend>
                              <input type="text" placeholder="Type here" className="form-control" defaultValue="Goutam ray"/>
                           </fieldset>   
                      </div>
                      <div className="col-sm-4">
                          <fieldset>
                              <legend> Role </legend>
                              <select name="" id="" className="form-select form-control" >
                                <option value="" selected> select option </option>
                                <option value="member"> member </option>
                                <option value="admin"> admin </option>
                                <option value="vendor"> vendor </option>
                                <option value="founder"> founder </option>
                              </select>
                           </fieldset>   
                      </div>
                      <div className="col-sm-4">
                          <fieldset>
                              <legend> Status </legend>
                              <select name="" id="" className="form-select form-control" >
                                <option value="" selected> select option </option>
                                <option value="approved"> approved </option>
                                <option value="pending"> pending </option>
                                <option value="blocked"> blocked </option>
                      
                              </select>
                           </fieldset>   
                      </div>                  
                    </div>

                    <div className="row my-3">
                      <div className="col-sm-4">
                          <fieldset>
                              <legend> Email</legend>
                              <input type="text" placeholder="Type here" className="form-control" defaultValue="goutamr362@gmail.com"/>
                           </fieldset>   
                      </div>
                      <div className="col-sm-4">
                          <fieldset>
                              <legend> Phone </legend>
                              <input type="text" placeholder="Type here" className="form-control" defaultValue="01755302053"/>
                           </fieldset>   
                      </div>
                      <div className="col-sm-4">
                          <fieldset>
                              <legend> Website </legend>
                              <input type="text" placeholder="Type here" className="form-control" defaultValue="https://developergoutam.com/"/>
                           </fieldset>   
                      </div>                  
                    </div>
                    <div className="row">
                      <fieldset>
                        <legend> Address </legend>
                        <textarea name="" id="" cols="30" rows="6" defaultValue="Shalbon mistripara , rangpur" className="form-control"></textarea>
                      </fieldset>
                    </div>

                 </div>
               </div>

              <div className="public-private-info px-5 py-2">
                 <div className="public-info">
                     <h6 className="pr-2">Social InFormation </h6>
                 </div>
                 <div className="profile-box my-4">
                    <div className="row my-3">
                      <div className="col-sm-6">
                          <fieldset>
                              <legend> Facebook</legend>
                              <input type="text" placeholder="Type here" className="form-control" defaultValue="https://example.com/"/>
                           </fieldset>   
                      </div>
                      <div className="col-sm-6">
                          <fieldset>
                              <legend> Twitter </legend>
                              <input type="text" placeholder="Type here" className="form-control" defaultValue="https://example.com/"/>
                           </fieldset>   
                       </div>
                       
                       <div className="row my-3">                                     
                       <div className="col-sm-6">
                          <fieldset>
                              <legend> Linkedin </legend>
                              <input type="text" placeholder="Type here" className="form-control" defaultValue="https://example.com/"/>
                           </fieldset>   
                       </div>                                     
                       <div className="col-sm-6">
                          <fieldset>
                              <legend> Instagram </legend>
                              <input type="text" placeholder="Type here" className="form-control" defaultValue="https://example.com/"/>
                           </fieldset>   
                       </div>                                     
                      </div>

                       <div className="row my-3">                                     
                       <div className="col-sm-6">
                          <fieldset>
                              <legend> Youtube </legend>
                              <input type="text" placeholder="Type here" className="form-control" defaultValue="https://example.com/"/>
                           </fieldset>   
                       </div>                                     
                       <div className="col-sm-6">
                          <fieldset>
                              <legend> Pinterest </legend>
                              <input type="text" placeholder="Type here" className="form-control" defaultValue="https://example.com/"/>
                           </fieldset>   
                       </div>                                     
                       </div>
                    </div>

                 </div>
                 <button className="btn btn-lg btn-primary save-btn "> <span><MdOutlineVerified /> </span> SAVE CHANGES</button>
               </div>
             </div>
          }
            

            {
              activeTab === 1 && 
              <div className="generate-Password my-5 px-5">
                <h6> Generate Password</h6>
                <div className="pass-form">         
                    <div className="my-2">
                        <span className="lock"> <IoIosLock />  </span>
                        <input type="text"  placeholder="current password" className="form-control"/>
                        <span className="view-hide">
                          
                             <button onClick={() => setOpen(!open)} > 
                              {
                                 open ?   <FaRegEye /> : <FaEyeSlash />
                              }
                             
                             </button> 
                          
                        
                         </span>
                     </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                  <div className="pass-form">   
                     <div className="my-2">
                        <span className="lock2"> <MdAddModerator />  </span>
                        <input type="text"  placeholder="new password" className="form-control"/>
                        <span className="view-hide2">
                           <button onClick={() => setOpen2(!open2)}> 
                              {
                                 open2 ?   <FaRegEye /> : <FaEyeSlash />
                              }
                             
                             </button> 
                         </span>
                       </div>
                     </div>
                  </div>
                  <div className="col-sm-6">
                  <div className="pass-form">   
                     <div className="my-2">
                        <span  className="lock2"> <MdVerifiedUser />  </span>
                        <input type="text"  placeholder="confirm password" className="form-control"/>
                        <span className="view-hide2">
                             <button onClick={() => setOpen3(!open3)}> 
                              {
                                 open3 ?   <FaRegEye /> : <FaEyeSlash />
                              }
                             
                             </button> 
                         </span>
                       </div>
                     </div>
                  </div>
                </div>
                <button className="btn btn-lg btn-primary save-btn mt-4 mb-0"> <span><MdOutlineVerified /> </span> SAVE CHANGES</button>
              </div>
            }

            {
              activeTab === 2 && 
             <div className="other-setting px-5 my-5">
                <div className="row">
                  
                  <div className="col-sm-6 ">
                      <div className="activity-email">
                        <h6> Activity Email Settings </h6>
                        <ul>
                          <li className="mt-4">
                          <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Someone adds you as a connection </label>
                          </div>
                          </li>
                          <li> 
                           <div className="form-check form-switch">
                              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked />
                               <label className="form-check-label" htmlFor="flexSwitchCheckChecked">you re sent a direct message </label>
                             </div>
                          </li>
                          <li> 
                           <div className="form-check form-switch">
                              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked />
                               <label className="form-check-label" htmlFor="flexSwitchCheckChecked">New membership approval </label>
                             </div>
                          </li>
                          <li> 
                           <div className="form-check form-switch">
                              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked />
                               <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Send Copy To Personal Email </label>
                             </div>
                          </li>
                          <li>
                          <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Tips on getting more out of PCT-themes </label>
                          </div>
                          </li>
                        </ul>
                      </div> 
                  </div>
                  <div className="col-sm-6 ">
                      <div className="activity-email">
                        <h6> Product Email Settings </h6>
                          <ul>
                            <li className="mt-4"> 
                              <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" checked/>
                                <label className="form-check-label" htmlFor="inlineCheckbox1">Someone adds you as a connection </label>
                               </div>
                            </li>
                            <li> 
                              <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" checked/>
                                <label className="form-check-label" htmlFor="inlineCheckbox1"> you re sent a direct message </label>
                               </div>
                            </li>
                            <li> 
                              <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" checked/>
                                <label className="form-check-label" htmlFor="inlineCheckbox1"> New membership approval </label>
                               </div>
                            </li>
                            <li> 
                              <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                <label className="form-check-label" htmlFor="inlineCheckbox1"> Send Copy To Personal Email  </label>
                               </div>
                            </li>
                            <li> 
                              <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                <label className="form-check-label" htmlFor="inlineCheckbox1"> Tips on getting more out of PCT-themes </label>
                               </div>
                            </li>
                          </ul>
                      </div> 
                  </div>
                </div>
                <button className="btn btn-lg btn-primary save-btn mt-4 mb-0"> <span><MdOutlineVerified /> </span> SAVE CHANGES</button>
             </div>
            }
           
           </div>
        </div>
       </div>  

 

          
      </div>
    </>
  )
}

export default MyAccount









