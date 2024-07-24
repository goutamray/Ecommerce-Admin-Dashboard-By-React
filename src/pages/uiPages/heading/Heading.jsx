import BreadCrumb from "../../../components/BreadCrumb/BreadCrumb"

import "./Heading.css"; 

const Heading = () => {
  return (
    <>
      <div className="right-content">
        <BreadCrumb title={"Headings Variant"} page={"User Interface"}/> 

        <div className="card p-3 my-4 custom-heading shadow">
          <h4 className="mb-3"> Custom Headings  </h4>

          <div className="all-headings">
            <h1> H1. Customize Heading Variants </h1>
            <h2> H2. Customize Heading Variants </h2>
            <h3> H3. Customize Heading Variants </h3>
            <h4> H4. Customize Heading Variants</h4>
            <h5> H5. Customize Heading Variants</h5>
            <h6> H6. Customize Heading Variants</h6>
          </div>
        </div>
      </div>
    </>
  )
}

export default Heading














