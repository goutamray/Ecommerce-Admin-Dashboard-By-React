
// images 
import doc1 from "../../../assets/document/Screenshot_1.png"
import doc2 from "../../../assets/document/Screenshot_2.png"
import doc3 from "../../../assets/document/Screenshot_3.png"
import doc4 from "../../../assets/document/Screenshot_4.png"
import doc5 from "../../../assets/document/Screenshot_5.png"
import doc6 from "../../../assets/document/Screenshot_6.png"

import BreadCrumb from "../../../components/BreadCrumb/BreadCrumb";

import "./Documentation.css"; 

const Documentation = () => {
  return (
    <>
      <div className="right-content">
        <BreadCrumb title={"Documentation"} page={"others"} /> 

        <div className="card p-4 shadow my-4 document ">
          <div className="first-box">
             <h2> 01. How to install this react template? </h2>
             <p> First install the LTS Version of nodejs from nodejs.org. No need if already installed. Then open the entire project in any terminal and write this command <a href="#"> npm create vite@latest  </a> and press the enter button of the keyboard. After <a href="#">node_modules </a> install complete then <a href="#"> npm run dev </a> this command should be run. After a while you can see your project installed and running in your default browser. </p>
             <div className="image-group">
              <img src={doc1} alt="" />
              <img src={doc3} alt="" />
              <img src={doc2} alt="" />
             </div>
          </div>         
          <div className="first-box">
             <h2> 02. How to live this project on my server? </h2>
             <p> Open the entire project in a terminal and use the npm run build command line. You see a folder named build will be created inside your project. Then Upload this build folder to your server. </p>
             <div className="image-group">
              <img src={doc4} alt="" />
          
             </div>
          </div>         
          <div className="first-box">
             <h2> 03. How do I change my pages path name?</h2>
             <p>Go to the app.js file of the project, you can see that the path of all the pages is defined there. From there you can change the path of your page via variable or string. </p>
             <div className="image-group">
              <img src={doc5} alt="" />
             
             </div>
          </div>         
          <div className="first-box">
             <h2> 04. How to change my content like text, images, icon?</h2>
             <p>All the data in this template is arranged in JSON format. All kinds of data are kept there by creating JSON files according to the name of each page separately inside the data folder. Any changes from there will show on your website. </p>
             <div className="image-group">
              <img src={doc6} alt="" />
            
             </div>
          </div>         
        </div>
        <div className="footer-text ">
           <h1> NEED TO MORE SUPPORT? </h1>
           <button className="btn btn-lg btn-primary"> Contact Us </button>
        </div>
      </div>
    </>
  )
}

export default Documentation

