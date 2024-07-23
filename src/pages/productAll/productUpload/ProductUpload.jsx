
import { HiDotsHorizontal } from "react-icons/hi";
import { MdOutlineCollections } from "react-icons/md";
import { FaCloudUploadAlt } from "react-icons/fa";

import shirt1 from "../../../assets/product/01.webp";
import shirt2 from "../../../assets/product/02.webp";
import shirt3 from "../../../assets/product/03.webp";
import shirt4 from "../../../assets/product/04.webp";


import BreadCrumb from "../../../components/BreadCrumb/BreadCrumb";



import "./ProductUpload.css"; 
const ProductUpload = () => {
  return (
    <>
      <div className="right-content">
        <BreadCrumb title={" Product Upload"} page={"Products"}/> 


        <div className="row my-4 product-upload-part ">
          <div className="col-sm-7 upload-part1 ">
             <div className="card shadow p-3 right-part2 ">
                <div className="revenue-part">
                   <div className="rev-text">
                      <h4> Basic Information </h4>
                   </div>
                   <p><HiDotsHorizontal /></p>
                 </div>

                 {/* product part  */}
                 <div className="product-upload-details">
                    <div className="title">
                      <p className="same-title" > TITLE </p>
                      <input type="text" placeholder="Type here" className="form-control"/>
                    </div>
                    <div className="description">
                      <p className="same-title"> DESCRIPTION </p>
                      <textarea name="" id="" cols="30" rows="6" className="form-control" placeholder="message"></textarea>
                    </div>
                    <div className="all-details">
                      <div className="row">
                        <div className="col-sm-6">
                          <p className="same-title"> CATEGORY </p>
                           <select name="" id="" className="form-control">
                            <option value="Mans" selected> Mans </option>
                            <option value="Womans"> Womans </option>
                            <option value="Accessory"> Accessory </option>
                           </select>
                        </div>
                        <div className="col-sm-6">
                        <p className="same-title"> BRAND </p>
                           <select name="" id="" className="form-control">
                            <option value="Richman" selected> Richman </option>
                            <option value="Lubana"> Lubana </option>
                            <option value="Ecstasy"> Ecstasy </option>
                           </select>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-sm-6">
                           <p className="same-title"> REGULAR PRICE </p>
                            <input type="text" placeholder="Type here" className="form-control"/>
                        </div>
                        
                        <div className="col-sm-6">
                           <p className="same-title"> DISCOUNT PRICE </p>
                           <input type="text" placeholder="Type here" className="form-control"/>
                        
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-6">
                           <p className="same-title"> SHIPPING FEE </p>
                            <input type="text" placeholder="Type here" className="form-control"/>
                        </div>
                        
                        <div className="col-sm-6">
                           <p className="same-title"> TAX RATE </p>
                           <input type="text" placeholder="Type here" className="form-control"/>
                        
                        </div>
                      </div>

                      <div className="description">
                         <p className="same-title"> TAGS </p>
                          <textarea name="" id="" cols="30" rows="6" className="form-control" placeholder="message" ></textarea>
                      </div>

                    </div>
                 </div>
                
            </div>
          </div>

          <div className="col-sm-5 upload-part2">
          <div className="card shadow p-3 right-part2 ">
                <div className="revenue-part">
                   <div className="rev-text">
                      <h4> Organization </h4>
                   </div>
                   <p><HiDotsHorizontal /></p>
                 </div>

                <div className="row custom-row ">
                  <div className="col-sm-10 right-part2-category ">
                      <p className="same-title" > ADD CATEGORY </p>
                      <input type="text" placeholder="Type here" className="form-control"/>
                  </div>
                  <div className="col-sm-2 cat-btn ">
                    <button className="btn btn-primary"> ADD </button>
                  </div>
                </div>

                <div className="row custom-row ">
                  <div className="col-sm-10 right-part2-category ">
                      <p className="same-title" > ADD BRAND </p>
                      <input type="text" placeholder="Type here" className="form-control"/>
                  </div>
                  <div className="col-sm-2 cat-btn ">
                    <button className="btn btn-primary"> ADD </button>
                  </div>
                </div>
                <div className="row custom-row ">
                  <div className="col-sm-10 right-part2-category ">
                      <p className="same-title" > ADD COLOR </p>
                      <input type="text" placeholder="Type here" className="form-control"/>
                  </div>
                  <div className="col-sm-2 cat-btn ">
                    <button className="btn btn-primary"> ADD </button>
                  </div>
                </div>
                <div className="row custom-row ">
                  <div className="col-sm-10 right-part2-category ">
                      <p className="same-title" > ADD SIZE </p>
                      <input type="text" placeholder="Type here" className="form-control"/>
                  </div>
                  <div className="col-sm-2 cat-btn ">
                    <button className="btn btn-primary"> ADD </button>
                  </div>
                </div>

            </div>

            <div className="card p-4 mt-4 shadow size-color ">
                     <div className="row">
                        <div className="col-sm-6">
                          <p className="same-title"> SIZE</p>
                            <select name="" id="" className="form-control" >
                               <option value="Sm" selected> Sm </option>
                               <option value="Md"> Md </option>
                                <option value="Lg"> Lg </option>
                                <option value="Xl"> Xl </option>
                                <option value="Xxl"> Xxl </option>
                             </select>
                        </div>
                        <div className="col-sm-6">
                           <p className="same-title"> COLOR </p>
                               <select name="" id="" className="form-control">
                                 <option value="Red" selected> Red </option>
                                 <option value="Green"> Green </option>
                                  <option value="Blue"> Blue </option>
                                  <option value="Pink"> Pink </option>
                                  <option value="Purple"> Purple </option>
                               </select>
                        </div>
                      </div>

                     <div className="row">
                        <div className="col-sm-6">
                           <p className="same-title"> STOCK</p>
                            <input type="text" placeholder="Type here" className="form-control"/>
                        </div>
                        
                        <div className="col-sm-6">
                           <p className="same-title"> WEIGHT </p>
                           <input type="text" placeholder="Type here" className="form-control"/>
                        
                        </div>
                      </div>
                  </div>


          </div>
        </div>

      <div className="row">
        <div className="col">
          <div className="card shadow p-3 media-image "> 
               <div className="revenue-part">
                   <div className="rev-text">
                      <h4> Media And Published </h4>
                   </div>
                   <p><HiDotsHorizontal /></p>
                 </div>
               <div className="product-image-upload">
                  <div className="box-product-1">
                     <img src={shirt1} alt="" />
                  </div>
                  <div className="box-product-1">
                     <img src={shirt2} alt="" />
                  </div>
                  <div className="box-product-1">
                     <img src={shirt3} alt="" />
                  </div>
                  <div className="box-product-1">
                     <img src={shirt4} alt="" />
                  </div>
                  <div className="box-product-1">
                     <div className="collection"> <MdOutlineCollections /> </div>
                    <a href=""> image upload  </a>
                  </div>
               </div>
               <button className="btn btn-lg btn-primary mt-5"> <span> <FaCloudUploadAlt /> </span> publish and view </button>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default ProductUpload












