

// react icons 
import { FaCloudUploadAlt } from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";

import BreadCrumb from "../../../components/BreadCrumb/BreadCrumb";



import "./CategoryAdd.css";

const CategoryAdd = () => {

  return (
    <>
      <div className="right-content">
        <BreadCrumb title={"Category Add"} page={"Category"}/> 


        <div className="row my-4 product-upload-part ">
          <div className="col-sm-7 upload-part1 ">
             <div className="card shadow p-3 right-part2 ">
                <div className="revenue-part">
                   <div className="rev-text">
                      <h4> Add New Category </h4>
                   </div>
                   <p><HiDotsHorizontal /></p>
                 </div>

                 {/* product part  */}
                 <div className="product-upload-details">
                  <form >
                      <div className="title">
                          <p className="same-title" > Category Name </p>
                          <input type="text" 
                                 className="form-control" 
                                 name="name"
                                 />
                        </div>
                        <div className="description">
                          <p className="same-title"> Image Url </p>
                          <input type="text" 
                                 className="form-control" 
                                 name="photo"
                                  />
                        </div>
                        <div className="description">
                          <p className="same-title"> Color </p>
                          <input type="text" 
                                 className="form-control" 
                                 name="color"
                                />
                        </div>

                        <button type="submit" className="btn btn-lg btn-primary mt-5 w-100"> 
                          <span> <FaCloudUploadAlt /> </span>
                          publish and view 
                        </button>
                  </form>
              
                 </div>
                
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default CategoryAdd; 








