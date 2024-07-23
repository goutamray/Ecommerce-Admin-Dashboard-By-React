import { useEffect } from "react";


// react icons 
import { 
   FaCalendarAlt,
   FaCartArrowDown, 
   FaRegUserCircle, 
   FaShoppingBag } from "react-icons/fa";
import { TbStars } from "react-icons/tb";
import { HiDotsHorizontal } from "react-icons/hi";

// components 
import AnalyticsBox from "../../../components/analyticsBox/AnalyticsBox";
import BreadCrumb from "../../../components/BreadCrumb/BreadCrumb";

// images 
import bang from "../../../assets/img/bd.webp"
import de from "../../../assets/img/de.webp"
import ph from "../../../assets/img/ph.webp"
import sa from "../../../assets/img/sa.webp"
import us from "../../../assets/img/us.webp"

import Lines from "../../../components/chart/Lines";


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

// data 3 
export const data3 = [
  ["Year", "Sales", "Expenses", "Profit"],
  ["2014", 1000, 400, 200],
  ["2015", 1170, 460, 250],
  ["2016", 660, 1120, 300],
  ["2017", 1030, 540, 350],
];


import "./Analytics.css"

const Analyticks = () => {

  useEffect(() => {
    window.scrollTo(0,0)
  }, []); 

  return (
    <>
      <div className="right-content">
        <BreadCrumb title={"Analyticks"} page={"Dashboard"}/>

        <div className="row">
          <div className="col-sm-12 box-div analytics ">
              <AnalyticsBox color={["#1ba054", "#4dd988"]} total={"136,758K"} icon={< FaRegUserCircle /> } grow={true} content={"Impressions"}  />
              <AnalyticsBox color={["#bf10e1", "#ed67ff"]} total={"125,964K"}  icon={< FaCartArrowDown /> } content={"Engagements"} />
              <AnalyticsBox color={["#2d79e6", "#63b2f6"]} total={"141,253K"}  icon={< FaShoppingBag/> } content={"Conversions"} />

              <AnalyticsBox color={["#e1950e", "#f6304e"]} total={"154,179K"} icon={< TbStars/> } grow={true} content={"Bounce Rate"} />
          </div>
        </div>

        <div className="row my-3 visitor-part ">
          <div className="col-sm-7 visitor-part-left">
             <div className="card shadow p-3 analytic-part ">
                 <div className="revenue-part">
                   <div className="rev-text">
                      <h4> Visitors Device </h4>
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
                 <div className="line-chart pt-5"> 
                     <Lines /> 
                 </div>
             </div>
          </div>

          <div className="col-sm-5 visitor-part-right">
            <div className="card shadow p-3 overview-part ">
                <div className="revenue-part">
                   <div className="rev-text">
                      <h4> Orders Overview </h4>
                   </div>
                   <p><HiDotsHorizontal /></p>
                 </div>
                 <div className="country pt-4 mt-2">
                   <div className="single-country">
                      <div className="flag">
                        <img src={bang} alt="" />
                        <div className="name">
                           <h5> COUNTRY </h5>
                           <h4> Bangladesh </h4>
                        </div>
                      </div>
                      <div className="value">
                        <p> VALUE </p>
                        <h6> 2500 </h6>
                      </div>
                      <div className="seo">
                        <p> SEO </p>
                        <h5> 90% </h5>
                      </div>
                   </div>
                   <div className="single-country">
                      <div className="flag">
                        <img src={us} alt="" />
                        <div className="name">
                           <h5> COUNTRY </h5>
                           <h4> United State </h4>
                        </div>
                      </div>
                      <div className="value">
                        <p> VALUE </p>
                        <h6> 1400 </h6>
                      </div>
                      <div className="seo">
                        <p> SEO </p>
                        <h5> 85% </h5>
                      </div>
                   </div>
                   <div className="single-country">
                      <div className="flag">
                        <img src={sa} alt="" />
                        <div className="name">
                           <h5> COUNTRY </h5>
                           <h4> Saudi Arabia </h4>
                        </div>
                      </div>
                      <div className="value">
                        <p> VALUE </p>
                        <h6> 3900 </h6>
                      </div>
                      <div className="seo">
                        <p> SEO </p>
                        <h5> 65% </h5>
                      </div>
                   </div>
                   <div className="single-country">
                      <div className="flag">
                        <img src={ph} alt="" />
                        <div className="name">
                           <h5> COUNTRY </h5>
                           <h4> Philippines </h4>
                        </div>
                      </div>
                      <div className="value">
                        <p> VALUE </p>
                        <h6> 5298 </h6>
                      </div>
                      <div className="seo">
                        <p> SEO </p>
                        <h5> 55% </h5>
                      </div>
                   </div>
                   <div className="single-country">
                      <div className="flag">
                        <img src={de} alt="" />
                        <div className="name">
                           <h5> COUNTRY </h5>
                           <h4> Germany </h4>
                        </div>
                      </div>
                      <div className="value">
                        <p> VALUE </p>
                        <h6> 4170 </h6>
                      </div>
                      <div className="seo">
                        <p> SEO </p>
                        <h5> 50% </h5>
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

export default Analyticks; 


