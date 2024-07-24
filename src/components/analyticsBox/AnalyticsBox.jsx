
import { useState } from "react";

// react icons 
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaArrowTrendDown } from "react-icons/fa6";
import { IoTimerOutline } from "react-icons/io5";
import { PiChartLineBold } from "react-icons/pi";

import "./AnalyticksBox.css";

const AnalyticsBox = (props) => {
  const [openBoxday, setOpenBoxDay ] = useState(false)

 const openBox = () => { 
  setOpenBoxDay(() => !openBoxday)
 }

  return (
    <>
      <div className="dashboardBox analyticks " style={{  backgroundImage: `linear-gradient(to right, ${props.color?.[0]} , ${props.color?.[1]} )`  }}>
        {
          props.grow === true ?   <span className="cart"> <PiChartLineBold /> </span> : <span  className="cart"> <FaArrowTrendDown /> </span>
        }
          <div className="d-flex justify-content-between">
            <div className="col1">
               <span className="text-white">{props.total} </span>
               <h3 className="text-white"> {props.content} </h3>
            </div>
            <div className="ml-auto">
            <div className="last-month-box d-flex justify-content-between">

                <div className="dot-icon analy">
                  <button onClick={openBox}><BsThreeDotsVertical /> </button>
                {
                  openBoxday === true && 
                  <ul>
                      <li> <span> <IoTimerOutline /></span> <a href="#">Edit </a></li>
                      <li> <span> <IoTimerOutline /></span> <a href="#">Delete</a></li>
                      <li> <span> <IoTimerOutline /></span> <a href="#">Download </a></li>
                      
                    </ul>
                }
                </div>
              </div>
            </div>
          </div>
       </div>
    </>
  )
}

export default AnalyticsBox











