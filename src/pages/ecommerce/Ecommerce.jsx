

import { FaRegUserCircle } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa6";
import { FaShoppingBag } from "react-icons/fa";
import { TbStars } from "react-icons/tb";
import { HiDotsHorizontal } from "react-icons/hi";
import { FaArrowTrendUp } from "react-icons/fa6";
import { Chart } from "react-google-charts";

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
          </div>
        </div>

        <div className="row">
          <div className="col-sm-8 box-div ">
              <DashBoardBox color={["#1ba054", "#4dd988"]} total={278} icon={< FaRegUserCircle/> } grow={true} />
              <DashBoardBox color={["#bf10e1", "#ed67ff"]} total={325}  icon={< FaCartArrowDown /> }/>
              <DashBoardBox color={["#2d79e6", "#63b2f6"]} total={840}  icon={< FaShoppingBag/>  }/>

              <DashBoardBox color={["#e1950e", "#f4cf2b"]} total={120} icon={< TbStars/> } grow={true}/>
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

           <div className="row">
            
           </div>
        </div>
      </div>
    </>
  )
}

export default Ecommerce
















