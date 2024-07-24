import BreadCrumb from "../../../components/BreadCrumb/BreadCrumb"
import goutam from "../../../assets/img/goutam.png"

import "./Avater.css";

const Avater = () => {
  return (
    <>
      <div className="right-content">
        <BreadCrumb title={"Avatars Variant" } page={"User Interface"}/> 

        <div className="card p-3 my-4 shadow custom-ava ">
          <h4> Custom Avaters </h4>
          <div className="custom-avater">
            <img className="first-image" src={goutam} alt="" />  
            <img className="second-image" src={goutam} alt="" />
            <img className="third-image" src={goutam} alt="" />
            <img className="four-image" src={goutam} alt="" />
            <img className="five-image" src={goutam} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Avater


