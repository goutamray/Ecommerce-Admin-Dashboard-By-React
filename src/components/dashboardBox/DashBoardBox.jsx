
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaArrowTrendDown } from "react-icons/fa6";
import { IoTimerOutline } from "react-icons/io5";



import "./DashBoardBox.css";
import { useState } from "react";

const DashBoardBox = (props) => {
  const [openBoxday, setOpenBoxDay ] = useState(false)

 const openBox = () => {
  setOpenBoxDay(() => !openBoxday)
 }

  return (
    <>
       <div className="dashboardBox" style={{  backgroundImage: `linear-gradient(to right, ${props.color?.[0]} , ${props.color?.[1]} )`  }}>
        {
          props.grow === true ?   <span className="cart"> <FaArrowTrendUp /> </span> : <span  className="cart"> <FaArrowTrendDown /> </span>
        }
          <div className="d-flex justify-content-between">
            <div className="col1">
               <h3 className="text-white"> Total Users </h3>
               <span className="text-white">{props.total} </span>
            </div>
            <div className="ml-auto">
              {
                props.icon ?  
                <span className="icon">
                  {props.icon}
               </span>
               : ""
              }
              
            </div>
          </div>

          <div className="last-month-box d-flex justify-content-between">
            <div className="month">
              <button style={{backgroundColor: props.discountColor}}> {props.discount}</button>
              <h4> Last Month </h4>
            </div>
            <div className="dot-icon">
              <button onClick={openBox}><BsThreeDotsVertical /> </button>
            {
              openBoxday === true && 
              <ul>
                  <li> <span> <IoTimerOutline /></span> <a href="#">Last Day </a></li>
                  <li> <span> <IoTimerOutline /></span> <a href="#">Last week </a></li>
                  <li> <span> <IoTimerOutline /></span> <a href="#">Last month </a></li>
                  <li> <span> <IoTimerOutline /></span> <a href="#">Last Year </a></li>
                </ul>
            }
                
               
         
            </div>
          </div>
       </div>
     
    </>
  )
}

export default DashBoardBox








