
// react icons 
import { FaAngleLeft, FaAngleRight, FaRegEye, FaShoppingBag, FaStar, FaTrashAlt } from "react-icons/fa";
import { MdWidgets } from "react-icons/md";
import { MdVerifiedUser } from "react-icons/md";
import { FiEdit } from "react-icons/fi";

import BreadCrumb from "../../../components/BreadCrumb/BreadCrumb";

import jama from "../../../assets/img/jama.webp";  


import "./CategoryList.css"; 

const CategoryList = () => {
  return (
    <>
         <div className="right-content">
        <BreadCrumb title={"Category List "} page={"Category"}/> 

        <div className="product-list-topper">
            <div className="row">
                <div className="col-sm-4 part1 ">
                    <div className="total-product ">
                        <div className="left-top-part ">
                           <h2> 547 </h2>
                           <span> <FaShoppingBag /> </span>
                        </div>
                        <p> total products </p>
                    </div>
                </div>
                <div className="col-sm-4 part1 ">
                    <div className="total-product category ">
                        <div className="left-top-part ">
                           <h2> 605 </h2>
                           <span className="widget"> <MdWidgets /></span>
                        </div>
                        <p> total_categories </p>
                    </div>
                </div>
                <div className="col-sm-4 part1 ">
                    <div className="total-product brand">
                        <div className="left-top-part ">
                           <h2> 249 </h2>
                           <span className="verify"> <MdVerifiedUser /> </span>
                        </div>
                        <p> total_barnds </p>
                    </div>
                </div>

            </div>
        </div>

        <div className="product-table card shadow p-3">
          <div className="row cartFilter">
               <div className="col-sm-3 col-single">
                  <h4 > SHOW BY </h4>
                  <select className="form-select" aria-label="Default select example">
                      <option selected value="1">12 Row </option>
                      <option value="2">24 Row </option>
                      <option value="3">36 Row </option>
                </select>
               </div>
               <div className="col-sm-3 col-single">
                  <h4 > RATING BY </h4>
                  <select className="form-select" aria-label="Default select example">
                      <option selected value="1"> 1 Star </option>
                      <option value="2"> 2 Star </option>
                      <option value="3"> 3 Star </option>
                      <option value="4"> 4 Star </option>
                      <option value="5"> 5 Star </option>
                </select>
               </div>
               <div className="col-sm-3 col-single">
                  <h4 > CATEGORY BY </h4>
                  <select className="form-select" aria-label="Default select example">
                      <option selected value="1">Mans</option>
                      <option value="2"> Womans</option>
                      <option value="3"> Kids </option>
                      <option value="3"> Accessory </option>
                </select>
               </div>
              
               <div className="col-sm-3 col-single">
                  <h4 > BRAND BY </h4>
                  <select className="form-select" aria-label="Default select example">
                      <option selected value="1"> Ecstasy</option>
                      <option value="2"> Freeland </option>
                      <option value="3"> Rongdhonu </option>
                </select>
               </div>
           </div>

           <div className="table-responsive custom-table">
              <table className="table table-bordered table-striped">
                <thead >
                    <tr className="table-primary">
                      <th>  uid </th>
                      <th> product </th>
                      <th> category </th>
                      <th> brand </th>
                      <th> price </th>
                      <th> stock </th>
                      <th> rating </th>
                      <th> order </th>
                      <th> sales </th>
                      <th> action </th>
                    </tr>
                </thead>
                <tbody>

                  <tr className="align-middle"> 
                    <td> <input type="checkbox" name="" /> #1 </td>
                    <td> 
                      <div className="table-product">
                        <img src={jama} alt="" />
                        <div className="product-box">
                          <div className="tab-content">
                             <p> Tops and skirt set for Female .....  </p>
                             <h6> Womens exclusive summer Tops......  </h6>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td> womans  </td>
                    <td> richman  </td>
                    <td> 
                       <p className="reg-price "> $21.00</p>
                       <p className="sale-price"> $19.00 </p>
                    </td>
                    <td> 30 </td>
                    <td> 
                       <div className="three-item">
                          <div className="star"> <FaStar /> </div>
                           <span> 4.9 </span>
                           <p> (16) </p>
                        </div>
                    </td>
                    <td> 380 </td>
                    <td> $38k </td>
                    <td>
                      <button className="eyeBtn" > <FaRegEye /> </button>
                      <button className="editBtn"> <FiEdit /> </button>
                      <button className="delBtn">  <FaTrashAlt /> </button>
                    </td>
                  </tr>

                  <tr className="align-middle"> 
                    <td> <input type="checkbox" name="" /> #2 </td>
                    <td> 
                      <div className="table-product">
                        <img src={jama} alt="" />
                        <div className="product-box">
                          <div className="tab-content">
                             <p> Tops and skirt set for Female .....  </p>
                             <h6> Womens exclusive summer Tops......  </h6>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td> mans  </td>
                    <td> richman  </td>
                    <td> 
                       <p className="reg-price "> $21.00</p>
                       <p className="sale-price"> $19.00 </p>
                    </td>
                    <td> 30 </td>
                    <td> 
                       <div className="three-item">
                          <div className="star"> <FaStar /> </div>
                           <span> 4.9 </span>
                           <p> (16) </p>
                        </div>
                    </td>
                    <td> 380 </td>
                    <td> $38k </td>
                    <td>
                      <button className="eyeBtn" > <FaRegEye /> </button>
                      <button className="editBtn"> <FiEdit /> </button>
                      <button className="delBtn">  <FaTrashAlt /> </button>
                    </td>
                  </tr>

                  <tr className="align-middle"> 
                    <td> <input type="checkbox" name="" /> #3 </td>
                    <td> 
                      <div className="table-product">
                        <img src={jama} alt="" />
                        <div className="product-box">
                          <div className="tab-content">
                             <p> Tops and skirt set for Female .....  </p>
                             <h6> Womens exclusive summer Tops......  </h6>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td> kids  </td>
                    <td> richman  </td>
                    <td> 
                       <p className="reg-price "> $21.00</p>
                       <p className="sale-price"> $19.00 </p>
                    </td>
                    <td> 30 </td>
                    <td> 
                       <div className="three-item">
                          <div className="star"> <FaStar /> </div>
                           <span> 4.9 </span>
                           <p> (16) </p>
                        </div>
                    </td>
                    <td> 380 </td>
                    <td> $38k </td>
                    <td>
                      <button className="eyeBtn" > <FaRegEye /> </button>
                      <button className="editBtn"> <FiEdit /> </button>
                      <button className="delBtn">  <FaTrashAlt /> </button>
                    </td>
               

                  </tr>
                  <tr className="align-middle"> 
                    <td> <input type="checkbox" name="" /> #4 </td>
                    <td> 
                      <div className="table-product">
                        <img src={jama} alt="" />
                        <div className="product-box">
                          <div className="tab-content">
                             <p> Tops and skirt set for Female .....  </p>
                             <h6> Womens exclusive summer Tops......  </h6>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td> accessory  </td>
                    <td> richman  </td>
                    <td> 
                       <p className="reg-price "> $21.00</p>
                       <p className="sale-price"> $19.00 </p>
                    </td>
                    <td> 30 </td>
                    <td> 
                       <div className="three-item">
                          <div className="star"> <FaStar /> </div>
                           <span> 4.9 </span>
                           <p> (16) </p>
                        </div>
                    </td>
                    <td> 380 </td>
                    <td> $38k </td>
                    <td>
                      <button className="eyeBtn" > <FaRegEye /> </button>
                      <button className="editBtn"> <FiEdit /> </button>
                      <button className="delBtn">  <FaTrashAlt /> </button>
                    </td>             
                  </tr>

                  <tr className="align-middle"> 
                    <td> <input type="checkbox" name="" /> #5 </td>
                    <td> 
                      <div className="table-product">
                        <img src={jama} alt="" />
                        <div className="product-box">
                          <div className="tab-content">
                             <p> Tops and skirt set for Female .....  </p>
                             <h6> Womens exclusive summer Tops......  </h6>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td> womans  </td>
                    <td> richman  </td>
                    <td> 
                       <p className="reg-price "> $21.00</p>
                       <p className="sale-price"> $19.00 </p>
                    </td>
                    <td> 30 </td>
                    <td> 
                       <div className="three-item">
                          <div className="star"> <FaStar /> </div>
                           <span> 4.9 </span>
                           <p> (16) </p>
                        </div>
                    </td>
                    <td> 380 </td>
                    <td> $38k </td>
                    <td>
                      <button className="eyeBtn" > <FaRegEye /> </button>
                      <button className="editBtn"> <FiEdit /> </button>
                      <button className="delBtn">  <FaTrashAlt /> </button>
                    </td>             
                  </tr>

                  <tr className="align-middle"> 
                    <td> <input type="checkbox" name="" /> #6 </td>
                    <td> 
                      <div className="table-product">
                        <img src={jama} alt="" />
                        <div className="product-box">
                          <div className="tab-content">
                             <p> Tops and skirt set for Female .....  </p>
                             <h6> Womens exclusive summer Tops......  </h6>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td> mans  </td>
                    <td> richman  </td>
                    <td> 
                       <p className="reg-price "> $21.00</p>
                       <p className="sale-price"> $19.00 </p>
                    </td>
                    <td> 30 </td>
                    <td> 
                       <div className="three-item">
                          <div className="star"> <FaStar /> </div>
                           <span> 4.9 </span>
                           <p> (16) </p>
                        </div>
                    </td>
                    <td> 380 </td>
                    <td> $38k </td>
                    <td>
                      <button className="eyeBtn" > <FaRegEye /> </button>
                      <button className="editBtn"> <FiEdit /> </button>
                      <button className="delBtn">  <FaTrashAlt /> </button>
                    </td>              
                  </tr>

                </tbody>
              </table>
              <div className="table-footer">
                <div className="footer-left">
                    <p> showing <b> 12 </b>  of <b> 60 </b> results </p>
                </div>
                <div className="footer-right">
                <nav aria-label="...">
                  <ul className="pagination">
                    <li className="page-item disabled">
                      <span className="page-link"> <FaAngleLeft /> </span>
                    </li>
                    <li className="page-item active"><a className="page-link" href="#">1</a></li>
                    <li className="page-item " aria-current="page">
                      <span className="page-link"> 2 </span>
                    </li>
                    <li className="page-item " aria-current="page">
                      <span className="page-link"> 3 </span>
                    </li>
                    <li className="page-item " aria-current="page">
                      <span className="page-link"> 4 </span>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">...</a></li>
                    <li className="page-item"><a className="page-link" href="#"> 20 </a></li>
                    <li className="page-item">
                      <a className="page-link" href="#"> <FaAngleRight /> </a>
                    </li>
                  </ul>
                </nav>
                </div>
              </div>
           </div>
        </div>
      </div>
    </>
  )
}

export default CategoryList; 
