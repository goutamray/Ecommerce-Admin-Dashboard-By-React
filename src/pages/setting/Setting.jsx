
import { MdOutlineVerified } from "react-icons/md";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";


import "./Setting.css"; 
const Setting = () => {
  return (
    <> 
          <div className="right-content">
            <BreadCrumb title={"Setting"}/> 
              

          <div className="card p-5 shadow  mt-4 setting-page "> 
               <div className="left-setting">
                <h6> Informations </h6>
               </div>

               <div className="row my-3">
                <div className="col-sm-5">
                  <p className="left-message"> Lorem Ipsum is simply dummy text of the printing and typesetting industry dummy text ever since when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                </div>
                <div className="col-sm-7">
                <div className="product-upload-details">

                    <div className="all-details">
                      <div className="row">
                        <div className="col-sm-6">
                           <p className="same-title"> SITE TITLE </p>
                            <input type="text" placeholder="Type here" className="form-control"/>
                        </div>
                        
                        <div className="col-sm-6">
                           <p className="same-title"> TAGLINE </p>
                           <input type="text" placeholder="Type here" className="form-control"/>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-sm-6">
                           <p className="same-title"> EMAIL ADDRESS </p>
                            <input type="text" placeholder="Type here" className="form-control"/>
                        </div>
                        
                        <div className="col-sm-6">
                           <p className="same-title"> WEBSITE URL </p>
                           <input type="text" placeholder="Type here" className="form-control"/>                      
                        </div>
                      </div>

                      <div className="description">
                         <p className="same-title"> DESCRIPTION </p>
                          <textarea name="" id="" cols="30" rows="6" className="form-control" placeholder="Type here" ></textarea>
                      </div>

                    </div>
                 </div>
                </div>
               </div>

               <div className="left-setting">
                   <h6> Accessibility </h6>
               </div>

               <div className="row my-3">
                 <div className="col-sm-5 left-box-check ">
                  <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry dummy text ever since when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                  
                 </div>
                  <div className="col-sm-7">
                      <div className="checked-message">
                        <ul>
                          <li> <input type="checkbox" checked /> Send notification on each user registration</li>
                          <li> <input type="checkbox" checked/> All registration is enabled on this site </li>
                          <li> <input type="checkbox" /> You re sent a direct message</li>
                          <li> <input type="checkbox" /> New membership approval </li>
                        </ul>
                      </div>
                  </div>
                  <div className="save-btn mt-5">
                    <button className="btn btn-primary "> <span> <MdOutlineVerified /></span> SAVE ALL CHANGES </button>
                  </div>
            </div>


          </div>
         </div>


    </>
  )
}

export default Setting









