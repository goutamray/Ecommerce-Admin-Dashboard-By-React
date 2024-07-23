import { Link } from "react-router-dom";
import error from "../../assets/img/404.webp"


const NotFound = () => {
  return (
    <>
      <div className="right-content">
         <div className="all-error">
          <img src={error} alt="" />
          <div className="content-error">
            <h2> OOOPS! THIS PAGE CANT BE FOUND. </h2>
            <p> Its looks like nothing was found at this location. </p>
            <button className="btn btn-primary btn-lg">
              <Link to="/ecommerce">  Back To Home </Link> </button>
          </div>
         </div>
      </div>
    </>
  )
}

export default NotFound; 




