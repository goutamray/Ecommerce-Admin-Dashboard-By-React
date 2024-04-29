import BreadCrumb from "../../../components/BreadCrumb/BreadCrumb"

import "./Alert.css"

const Alert = () => {
  return (
    <>
      <div className="right-content">
        <BreadCrumb title={"Alerts Variant"} page={"User Interface"}/> 

        <div className="card my-4 p-3 custom-alert">
            <h4 className="mb-3"> Bootstrap Alerts </h4>

            <div className="alert alert-primary  d-flex justify-content-between" role="alert">
              A simple primary alert—check it out!
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
            <div className="alert alert-secondary  d-flex justify-content-between" role="alert">
              A simple secondary alert—check it out!
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
            <div className="alert alert-success  d-flex justify-content-between" role="alert">
              A simple success alert—check it out!
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
            <div className="alert alert-danger  d-flex justify-content-between" role="alert">
              A simple danger alert—check it out!
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
            <div className="alert alert-warning  d-flex justify-content-between" role="alert">
              A simple warning alert—check it out!
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
            <div className="alert alert-info  d-flex justify-content-between" role="alert">
              A simple info alert—check it out!
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
            <div className="alert alert-light  d-flex justify-content-between" role="alert">
              A simple light alert—check it out!
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
            <div className="alert alert-dark  d-flex justify-content-between" role="alert">
              A simple dark alert—check it out!
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        </div>
      </div>
    </>
  )
}

export default Alert

