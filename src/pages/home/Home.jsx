
import { Outlet } from "react-router-dom";

// components 
import PageHeader from "../../components/PageHeader/PageHeader";
import SideBar from "../../components/sideBar/SideBar";

import { useContext } from "react";
import { MyContext } from "../../App";

import "./Home.css"; 

const Home = () => {

const context = useContext(MyContext); 

  return (
    <>
      <PageHeader title = {"Home"}/>     
      
      <div className="container-fluid">
        <div className="row">
           <div className={`col-sm-2 ${context.isToggleSidebar === true ? "toggle" : ""}` }>
            <div className="side-barr">
               <SideBar /> 
            </div>
           </div>
           <div className={`col-sm-10 output ${context.isToggleSidebar === true ? "toggle" : ""}`}>
         
             <Outlet /> 
       
           </div>
        </div>
      </div>
    </>
  )
}

export default Home





















