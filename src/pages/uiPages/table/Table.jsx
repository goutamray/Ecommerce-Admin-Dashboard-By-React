
// react icons 
import {  FaRegEye, FaStar, FaTrashAlt } from "react-icons/fa"
import BreadCrumb from "../../../components/BreadCrumb/BreadCrumb"
import { FiEdit } from "react-icons/fi"
import { BiSolidDownload } from "react-icons/bi"
import { HiDotsHorizontal } from "react-icons/hi"

// images 
import jama from "../../../assets//img/jama.webp"
import goutam from "../../../assets/img/goutam.png"

import "./Table.css";

const Table = () => {
  return (
    <>
      <div className="right-content">
        <BreadCrumb title={"Tables_variant"} page={"User Interface"}/>

        <div className="card table-box p-3 border-0 shadow abcde">
           <div className="top-part">
            <h4> Primary Fixed Table </h4>
          
           </div>



           <div className="table-responsive">
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

            
           </div>
        </div>

        <div className="row my-4">
          <div className="col-sm-12">
            <div className="my-chart">
              <div className="card shadow p-3 deals-part "> 

               <div className="top-part">
                 <h4> Horizontal Scroll Table </h4>
                 <p><HiDotsHorizontal /></p>
               </div>

              <div className="table-responsive">
              <table className="table table-bordered table-striped">
                <thead >
                    <tr className="table-primary">
                      <th> S.L </th>
                      <th> REPRESENTER </th>
                      <th> EMAIL </th>
                      <th> AMOUNT </th>
                      <th> STATUS </th>
                      <th> ISSUE DATE</th>
                      <th> action </th>
                    </tr>
                </thead>
                <tbody>

                  <tr className="align-middle"> 
                    <td> <input type="checkbox" name="" /> 1 </td>
                    <td> 
                      <div className="table-product">
                        <img src={goutam} alt="" />
                        <div className="product-box">
                          <div className="tab-content">
                             <p> Goutam Ray </p>
                         
                          </div>
                        </div>
                      </div>
                    </td>
                    <td> goutamr362@gmail.com  </td>
                    <td> $7,920.00 </td>
                    <td> <p className="won"> Won Leads </p> </td>
                    <td> 15/06/2022 14:02</td>
                    <td>
                      <button className="eyeBtn" > <FaRegEye /> </button>
                      <button className="editBtn"> <BiSolidDownload /> </button>
                      <button className="delBtn">  <FaTrashAlt /> </button>
                    </td>
                  </tr>

                  <tr className="align-middle"> 
                    <td> <input type="checkbox" name="" /> 2 </td>
                    <td> 
                      <div className="table-product">
                        <img src={goutam} alt="" />
                        <div className="product-box">
                          <div className="tab-content">
                             <p> Shanto Ray  </p>
                        
                          </div>
                        </div>
                      </div>
                    </td>
                    <td> developergoutam53@gmail.com  </td>
                    <td> $5,347.00 </td>
                   
                    <td><p className="new"> New Leads </p> </td>
                    <td>15/06/2022 14:02 </td>
                    <td>
                      <button className="eyeBtn" > <FaRegEye /> </button>
                      <button className="editBtn"> <BiSolidDownload /> </button>
                      <button className="delBtn">  <FaTrashAlt /> </button>
                    </td>
                  </tr>

                  <tr className="align-middle"> 
                    <td> <input type="checkbox" name="" /> 3 </td>
                    <td> 
                      <div className="table-product">
                        <img src={goutam} alt="" />
                        <div className="product-box">
                          <div className="tab-content">
                             <p> Hori Shankor Ray  </p>
                            
                          </div>
                        </div>
                      </div>
                    </td>
                    <td> devGoutam@gmail.com </td>
                    <td> $6,890.00  </td>
                   
                    <td><p className="open"> Open Leads </p> </td>
                    <td> 15/06/2022 14:02</td>
                    <td>
                      <button className="eyeBtn" > <FaRegEye /> </button>
                      <button className="editBtn"> <BiSolidDownload /> </button>
                      <button className="delBtn">  <FaTrashAlt /> </button>
                    </td>
               

                  </tr>
                  <tr className="align-middle"> 
                    <td> <input type="checkbox" name="" /> 4 </td>
                    <td> 
                      <div className="table-product">
                        <img src={goutam} alt="" />
                        <div className="product-box">
                          <div className="tab-content">
                             <p> Durjay Ray  </p>
                   
                          </div>
                        </div>
                      </div>
                    </td>
                    <td> 	kurulus@gmail.com </td>
                    <td>$6,872.00  </td>
                  
                    <td> <p className="won"> Won Leads </p> </td>
                    <td> 15/06/2022 14:02 </td>
                    <td>
                      <button className="eyeBtn" > <FaRegEye /> </button>
                      <button className="editBtn"> <BiSolidDownload /> </button>
                      <button className="delBtn">  <FaTrashAlt /> </button>
                    </td>             
                  </tr>

                  <tr className="align-middle"> 
                    <td> <input type="checkbox" name="" /> 5 </td>
                    <td> 
                      <div className="table-product">
                        <img src={goutam} alt="" />
                        <div className="product-box">
                          <div className="tab-content">
                             <p> Uttam Ray  </p>
                     
                          </div>
                        </div>
                      </div>
                    </td>
                    <td> johara@gmail.com </td>
                    <td> $4,578.00 </td>
                   
                    <td> <p className="open"> Open Leads </p> </td>
                    <td> 15/06/2022 14:02 </td>
                    <td>
                      <button className="eyeBtn" > <FaRegEye /> </button>
                      <button className="editBtn"> <BiSolidDownload /> </button>
                      <button className="delBtn">  <FaTrashAlt /> </button>
                    </td>             
                  </tr>

                  <tr className="align-middle"> 
                    <td> <input type="checkbox" name="" /> 6 </td>
                    <td> 
                      <div className="table-product">
                        <img src={goutam} alt="" />
                        <div className="product-box">
                          <div className="tab-content">
                             <p> Manik Ray  </p>
                         
                          </div>
                        </div>
                      </div>
                    </td>
                    <td> labonno@gmail.com </td>
                    <td>$4,978.00 </td>        
                    <td> 
                      <p className="lost"> Lost Leads </p>
                    </td>
                    <td> 15/06/2022 14:02</td>
                    <td>
                      <button className="eyeBtn" > <FaRegEye /> </button>
                      <button className="editBtn"> <BiSolidDownload /> </button>
                      <button className="delBtn">  <FaTrashAlt /> </button>
                    </td>              
                  </tr>
                  <tr className="align-middle"> 
                    <td> <input type="checkbox" name="" /> 6 </td>
                    <td> 
                      <div className="table-product">
                        <img src={goutam} alt="" />
                        <div className="product-box">
                          <div className="tab-content">
                             <p> Manik Ray  </p>
                         
                          </div>
                        </div>
                      </div>
                    </td>
                    <td> labonno@gmail.com </td>
                    <td>$4,978.00 </td>        
                    <td> 
                      <p className="lost"> Lost Leads </p>
                    </td>
                    <td> 15/06/2022 14:02</td>
                    <td>
                      <button className="eyeBtn" > <FaRegEye /> </button>
                      <button className="editBtn"> <BiSolidDownload /> </button>
                      <button className="delBtn">  <FaTrashAlt /> </button>
                    </td>              
                  </tr>
                  <tr className="align-middle"> 
                    <td> <input type="checkbox" name="" /> 6 </td>
                    <td> 
                      <div className="table-product">
                        <img src={goutam} alt="" />
                        <div className="product-box">
                          <div className="tab-content">
                             <p> Manik Ray  </p>
                         
                          </div>
                        </div>
                      </div>
                    </td>
                    <td> labonno@gmail.com </td>
                    <td>$4,978.00 </td>        
                    <td> 
                      <p className="lost"> Lost Leads </p>
                    </td>
                    <td> 15/06/2022 14:02</td>
                    <td>
                      <button className="eyeBtn" > <FaRegEye /> </button>
                      <button className="editBtn"> <BiSolidDownload /> </button>
                      <button className="delBtn">  <FaTrashAlt /> </button>
                    </td>              
                  </tr>
                  <tr className="align-middle"> 
                    <td> <input type="checkbox" name="" /> 6 </td>
                    <td> 
                      <div className="table-product">
                        <img src={goutam} alt="" />
                        <div className="product-box">
                          <div className="tab-content">
                             <p> Manik Ray  </p>
                         
                          </div>
                        </div>
                      </div>
                    </td>
                    <td> labonno@gmail.com </td>
                    <td>$4,978.00 </td>        
                    <td> 
                      <p className="lost"> Lost Leads </p>
                    </td>
                    <td> 15/06/2022 14:02</td>
                    <td>
                      <button className="eyeBtn" > <FaRegEye /> </button>
                      <button className="editBtn"> <BiSolidDownload /> </button>
                      <button className="delBtn">  <FaTrashAlt /> </button>
                    </td>              
                  </tr>

                </tbody>
              </table>

            

             </div>
            </div>
          </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Table
