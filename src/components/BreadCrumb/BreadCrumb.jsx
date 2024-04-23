

import "./BreadCrumb.css"; 
const BreadCrumb = ({ title, page }) => {
  return (
    <>
      <div className="dashboardBoxErapper shadow">
          <div className="dashboard">
            <h2> { title } </h2>
            <p>
            <nav  aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item"><a href="#">{ page ? page : ""}</a></li>
                <li className="breadcrumb-item active" aria-current="page"> { title } </li>
              </ol>
            </nav>
            </p>
          </div>
      </div>
    </>
  )
}

export default BreadCrumb








