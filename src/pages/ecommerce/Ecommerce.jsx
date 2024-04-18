

import { FaRegUserCircle ,FaShoppingBag, FaStar, FaTrashAlt } from "react-icons/fa";
import { FaCartArrowDown, FaArrowTrendUp, FaRegEye } from "react-icons/fa6";

import { TbStars } from "react-icons/tb";
import { HiDotsHorizontal } from "react-icons/hi";
import { Chart } from "react-google-charts";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { FiEdit } from "react-icons/fi";

import jama from "../../assets/img/jama.webp"



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


import DashBoardBox from "../../components/dashboardBox/DashBoardBox";
import "./Ecommerce.css";

const Ecommerce = () => {
  return (
    <>
      <div className="right-content">
        <div className="dashboardBoxErapper shadow">
          <div className="dashboard">
            <h2> Ecommerce  </h2>
            <p>
            <nav  aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item"><a href="#">DashBoard</a></li>
                <li className="breadcrumb-item active" aria-current="page"> Ecommerce </li>
              </ol>
            </nav>
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-8 box-div ">
              <DashBoardBox color={["#1ba054", "#4dd988"]} total={278} icon={< FaRegUserCircle/> } grow={true} discountColor={"#187d44"} discount={"+35%"} />
              <DashBoardBox color={["#bf10e1", "#ed67ff"]} total={325}  icon={< FaCartArrowDown /> } discountColor={"#a808c3"} discount={"+20%"}/>
              <DashBoardBox color={["#2d79e6", "#63b2f6"]} total={840}  icon={< FaShoppingBag/> } discountColor={"#2262d3"} discount={"+55%"} />

              <DashBoardBox color={["#e1950e", "#f4cf2b"]} total={120} icon={< TbStars/> } grow={true} discountColor={"#ae640f"} discount={"+45%"} />
          </div>
          <div className="col-sm-4">
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

export default Ecommerce
















