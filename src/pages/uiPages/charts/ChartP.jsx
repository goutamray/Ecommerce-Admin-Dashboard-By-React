
import BreadCrumb from "../../../components/BreadCrumb/BreadCrumb";
import DashBoardBox from "../../../components/dashboardBox/DashBoardBox";
import Chart2 from "../../../components/chart/Chart2";

// react icons 
import { 
   FaCalendarAlt, 
   FaCartArrowDown, FaCheck,
   FaPlus, FaRegUserCircle, 
   FaShoppingBag } from "react-icons/fa";
import { IoBookmarksSharp } from "react-icons/io5";
import { MdOutlineLayers } from "react-icons/md";
import { TbBriefcase2, TbStars } from "react-icons/tb";
import { Chart } from "react-google-charts";
import { RxCross2 } from "react-icons/rx";
import { PiWarningLight } from "react-icons/pi";
import { HiDotsHorizontal } from "react-icons/hi";
import { FaArrowTrendUp } from "react-icons/fa6";

import "./Chart.css"

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


const ChartP = () => {
  return (
    <>
      <div className="right-content">
        <BreadCrumb title={"Charts Variant"} page={"User Interface"}/>

        <div className="row my-5 revenue-box-part">
          <div className="col-sm-7 revenue-box-part-left">
             <div className="step-area-chart">
                 <h3> Step Area Chart </h3>
                 <div className="card p-3 shadow my-4">
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
          </div>
          <div className="col-sm-5 revenue-box-part-right">
            <div className="step-pie-chart">
                 <h3> Round Pie Chart</h3>
                 <div className="card p-3 shadow my-4">
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

        <div className="row my-5 dashboard-div">
          <div className="col-sm-7 box-div">
             <div className="step-area-chart">
                 <h3> Arrow Icon Chart </h3>
                 <div className="col-sm-8 box-div abcd">
                  <DashBoardBox color={["#1ba054", "#4dd988"]} total={278} icon={< FaRegUserCircle/> } grow={true} discountColor={"#187d44"} discount={"+35%"} />
                  <DashBoardBox color={["#bf10e1", "#ed67ff"]} total={325}  icon={< FaCartArrowDown /> } discountColor={"#a808c3"} discount={"+20%"}/>
                  <DashBoardBox color={["#2d79e6", "#63b2f6"]} total={840}  icon={< FaShoppingBag/> } discountColor={"#2262d3"} discount={"+55%"} />

                  <DashBoardBox color={["#e1950e", "#f4cf2b"]} total={120} icon={< TbStars/> } grow={true} discountColor={"#ae640f"} discount={"+45%"} />
             </div>
                 </div>
             </div>
             <div className="col-sm-5 box-div2">
                <div className="step-pie-chart">
                    <h3> Natural Area Chart </h3>
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
                      <Chart2 /> 
                </div>
              </div>  
            </div>
          </div>
        </div>
      

      </div>
    </>
  )
}

export default ChartP; 















