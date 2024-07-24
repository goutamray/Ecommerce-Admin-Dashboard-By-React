
import {  useEffect } from "react";
import { Chart } from "react-google-charts";

// react icons 
import { FaRegUserCircle ,FaShoppingBag, FaStar, FaTrashAlt, FaCalendarAlt, FaCheck } from "react-icons/fa";
import { FaCartArrowDown, FaArrowTrendUp, FaRegEye,  FaAngleLeft, FaAngleRight, FaPlus } from "react-icons/fa6";
import { TbStars } from "react-icons/tb";
import { HiDotsHorizontal } from "react-icons/hi";
import { FiEdit } from "react-icons/fi";
import { TbBriefcase2 } from "react-icons/tb";
import { IoBookmarksSharp } from "react-icons/io5";
import { MdOutlineLayers } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { PiWarningLight } from "react-icons/pi";

// components 
import jama from "../../../assets//img/jama.webp"
import DashBoardBox from "../../../components/dashboardBox/DashBoardBox";
import BreadCrumb from "../../../components/BreadCrumb/BreadCrumb";


export const data = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7],
];

export const options = {
  backgroundColor: 'transparent',
  'chartArea' : {'height': "100%", 'width' :'90%'}
};


export const data2 = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7], // CSS-style declaration
];

export const options2 = {
  pieHole: 0.4,
  is3D: false,
  'chartArea' : {'height': "100%", 'width' :'90%'}
};


export const data3 = [
  ["Year", "Sales", "Expenses", "Profit"],
  ["2014", 1000, 400, 200],
  ["2015", 1170, 460, 250],
  ["2016", 660, 1120, 300],
  ["2017", 1030, 540, 350],
];


import "./Ecommerce.css";

const Ecommerce = () => {


  useEffect(() => {
    window.scrollTo(0,0)
  }, []);   


  return (
    <>
      <div className="right-content">
        <BreadCrumb title={"Ecommerce"} page={"DashBoard"}/>

        <div className="row dashboard-div">
          <div className="col-sm-8 box-div ">
              <DashBoardBox color={["#1ba054", "#4dd988"]} total={278} icon={< FaRegUserCircle/> } grow={true} discountColor={"#187d44"} discount={"+35%"} />
              <DashBoardBox color={["#bf10e1", "#ed67ff"]} total={325}  icon={< FaCartArrowDown /> } discountColor={"#a808c3"} discount={"+20%"}/>
              <DashBoardBox color={["#2d79e6", "#63b2f6"]} total={840}  icon={< FaShoppingBag/> } discountColor={"#2262d3"} discount={"+55%"} />

              <DashBoardBox color={["#e1950e", "#f4cf2b"]} total={120} icon={< TbStars/> } grow={true} discountColor={"#ae640f"} discount={"+45%"} />
          </div>
          <div className="col-sm-4 box-div2">
             <div className="anotherBox">
                 <div className="right-box">
                  <h4> Total Sales </h4>
                  <div className="dot-abcd">
                     <HiDotsHorizontal />
                  </div>
                 </div>
                 <div className="box-2">
                    <div className="left-content">
                      <h3> $3,787,681.00 </h3> 
                      <h5> 40.63% </h5>
                      <p> < FaArrowTrendUp/>  </p>
                    </div>
                    <p> $3,578.90 in last month </p>


                     <div className="cart-pai mt-5"> 
                        <Chart
                           chartType="PieChart"
                           data={data}
                           options={options}
                           width={"100%"}
                           height={"200px"}
                        />
                     </div>
                 </div>

             </div>
          </div>
        </div> 

        <div className="card table-box p-3 border-0 shadow">
           <div className="top-part">
            <h4> Best Selling Products </h4>
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

        <div className="row my-3 revenue-box-part ">
          <div className="col-sm-8 revenue-box-part-left ">
             <div className="card shadow p-3 abcd">
                 <div className="revenue-part">
                   <div className="rev-text">
                      <h4> Revenue Report </h4>
                   </div>
                   <div className="year-select">
                    <p> <FaCalendarAlt />  </p>
                
                     <select className="form-select" aria-label="Default select example">
                     
                         <option selected value="1"> Select Option</option>
                         <option value="2">Year 2021</option>
                         <option value="3">Year 2020</option>
                         <option value="3">Year 2020</option>
                         <option value="3">Year 2020</option>
                         <option value="3">Year 2020</option>
                         <option value="3">Year 2020</option>
                     </select>
                   </div>
                 </div>
                 <div className="earning-part">
                   <div className="earn-part1">
                       <div className="bag">
                          <span> <TbBriefcase2 /> </span>
                       </div>
                       <div className="text-info">
                         <p> invested</p>
                         <h4> 3,387.67K </h4>
                       </div>
                   </div>
                   <div className="earn-part1">
                       <div className="bag">
                          <span className="book"> <IoBookmarksSharp /> </span>
                       </div>
                       <div className="text-info">
                         <p> Earnings </p>
                         <h4> 2,856.35K </h4>
                       </div>
                   </div>
                   <div className="earn-part1">
                       <div className="bag">
                          <span className="layer"> <MdOutlineLayers /> </span>
                       </div>
                       <div className="text-info">
                         <p> Expenses</p>
                         <h4> 1,994.12K </h4>
                       </div>
                   </div>        
                 </div>

                 <div className="line-chart pt-5">
                 <Chart
                   chartType="Bar"
                   width="100%"
                   height="300px"
                   data={data3}
                 
                  />
                 </div>
             </div>
          </div>
          
          <div className="col-sm-4 revenue-box-part-right">
            <div className="card shadow p-3 right-part2 ">
                <div className="revenue-part">
                   <div className="rev-text">
                      <h4> Orders Overview </h4>
                   </div>
                   <p><HiDotsHorizontal /></p>
                 </div>
                 <div className="grap-chart pt-4">   
                 <Chart
                    chartType="PieChart"
                    width="100%"
                    height="200px"
                    data={data2}
                    options={options2}
                  />

                  <div className="total-box">
                       <div className="box-1">
                         <div className="left-dot">
                           <p> <HiDotsHorizontal /></p>
                           <h6> Pending </h6>
                         </div>
                         <p> 568 </p>
                       </div>
                       <div className="box-1">
                         <div className="left-dot">
                           <p className="shipped"> <FaPlus /></p>
                           <h6> Shipped </h6>
                         </div>
                         <p> 457 </p>
                       </div>
                       <div className="box-1">
                         <div className="left-dot">
                           <p className="recieved" > <FaCheck /></p>
                           <h6> Recieved </h6>
                         </div>
                         <p> 325 </p>
                       </div>
                       <div className="box-1">
                         <div className="left-dot">
                           <p className="cancelled"> <RxCross2 /></p>
                           <h6>Cancelled </h6>
                         </div>
                         <p> 158 </p>
                       </div>
                       <div className="box-1">
                         <div className="left-dot">
                           <p className="refunded"> <PiWarningLight /></p>
                           <h6> Refunded</h6>
                         </div>
                         <p> 237 </p>
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

export default Ecommerce
















