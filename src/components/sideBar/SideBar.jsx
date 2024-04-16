import { MdDashboard } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa";
import { FaProductHunt } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";

import "./SideBar.css"; 
const SideBar = () => {
  return (
    <>
      <div className="sideBar-wrapper">
        <div className="all-left-menu">
          <h4> MAIN PAGES </h4>
          <ul>
            <li> 
              <button>
                <span className="icon"> <MdDashboard /> </span>
                    DashBoard  
                <span className="angle"> <FaAngleRight /> </span>
            </button>
           </li>
            <li> 
              <button>
                <span className="icon"> <FaProductHunt /> </span>
                    Products  
                <span className="angle"> <FaAngleRight /> </span>
            </button>
           </li>
            <li> 
              <button>
                <span className="icon"> <FaCartArrowDown /> </span>
                    Orders 
                <span className="angle"> <FaAngleRight /> </span>
            </button>
           </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default SideBar; 














