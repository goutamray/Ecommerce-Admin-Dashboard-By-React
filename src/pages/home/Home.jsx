
import { Outlet } from "react-router-dom";
import PageHeader from "../../components/PageHeader/PageHeader";
import SideBar from "../../components/sideBar/SideBar";

import "./Home.css"; 
const Home = () => {
  return (
    <>
      <PageHeader title = {"Home"}/>     
      
      <div className="container-fluid">
        <div className="row">
           <div className="col-sm-2">
              <SideBar /> 
           </div>
           <div className="col-sm-10 output">
         
             <Outlet /> 
       
           </div>
        </div>
      </div>
    </>
  )
}

export default Home





















