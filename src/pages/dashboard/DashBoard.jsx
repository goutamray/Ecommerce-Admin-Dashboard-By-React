

import PageHeader from "../../components/PageHeader/PageHeader";

import "./Dashboard.css";
import SideBar from "../../components/sideBar/SideBar";

const DashBoard = () => {
  return (
    <>
    <PageHeader title = {"Dashboard"}/> 
      
      <div className="container-fluid">
        <div className="row">
           <div className="col-sm-2">
              <SideBar /> 
           </div>
           <div className="col-sm-10">
            <h2> output </h2>
           </div>
        </div>
      </div>
    </>
  )
}

export default DashBoard;     
















