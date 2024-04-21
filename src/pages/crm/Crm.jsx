
import { FaAngleLeft, FaAngleRight, FaRegEye, FaTrashAlt } from "react-icons/fa";
import { BiSolidDownload } from "react-icons/bi";
import { HiDotsHorizontal } from "react-icons/hi";

import goutam from "../../assets/img/goutam.png"
import Chart from "../../components/chart/Chart";

import { useEffect } from "react";


import "./Crm.css"; 
const Crm = () => {

  useEffect(() => {
    window.scrollTo(0,0)
  }, []); 

  return (
    <>
      <div className="right-content">
        <div className="dashboardBoxErapper shadow">
          <div className="dashboard">
            <h2> Crm  </h2>
            <p>
            <nav  aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item"><a href="#">DashBoard</a></li>
                <li className="breadcrumb-item active" aria-current="page"> Crm </li>
              </ol>
            </nav>
            </p>
          </div>
        </div>

        <div className="row my-3 crm-part ">
          <div className="col-sm-12">
            <div className="ppp-chart">
              <div className="card p-3">
                <div className="top-part">
                  <h4> Selling Overview </h4>
                  <p><HiDotsHorizontal /></p>
                </div>
                <div className="single-chart">
                      <Chart /> 
                </div>
              </div>  
            </div>
          </div>
        </div>


        <div className="row my-4">
          <div className="col-sm-12">
            <div className="my-chart">
              <div className="card shadow p-3 deals-part "> 

               <div className="top-part">
                 <h4> Deals_performance</h4>
                 <p><HiDotsHorizontal /></p>
               </div>

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
                  <h4 > STATUS BY </h4>
                  <select className="form-select" aria-label="Default select example">
                      <option selected value="1"> Won Leads </option>
                      <option value="2"> New Leads </option>
                      <option value="3"> Open Leads  </option>
                      <option value="3"> Lost Leads</option>
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
               <div className="col-sm-3 col-single">
                  <h4 >SEARCH BY </h4>
                  <div className="search">
                    <input type="search" placeholder="id / name / category / brand"/>
                  </div>
               </div>
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
          </div>
        </div>

        </div>

   
        <div className="copyRight text-center my-4">
           <p> © All Rights Reserved by ♥ <a href="#"> DeveloperGoutam </a>  </p>
        </div>

    </>
  )
}

export default Crm














