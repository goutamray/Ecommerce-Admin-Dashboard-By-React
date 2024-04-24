
import { MdOutlineCampaign } from "react-icons/md";

import "./ChangeLog.css"; 
const ChangeLog = () => {
  return (
    <>
      <div className="right-content">
         <div className="card p-3 shadow change-log ">
             <div className="version-1 p-3 my-2">
               <div className="icon"> <MdOutlineCampaign /> </div>
               <div className="version-text">
                <h2> Initial Release - Version 1.0 </h2>
                <p> hotash :: react admin dashboard template </p>
               </div>
             </div>

             <div className="version-2 p-3 my-2">
               <div className="icon2"> <MdOutlineCampaign /> </div>
               <div className="version-text">
                <h2> Initial Release - Version 1.0 </h2>
                <p> hotash :: react admin dashboard template </p>
               </div>
             </div>

             <ul>
              <li> Multi-language support added, including translation for English and Arabic. </li>
              <li> Site directionality (LTR & RTL) support included. </li>
              <li> Improved UI/UX for cards, padding, margin, border, color, and more. </li>
              <li> React Router library upgraded and new routing system implemented.</li>
              <li> Bootstrap and React-Bootstrap library upgraded.</li>
              <li> Components and JSON data simplified. </li>
             </ul>
         </div>
      </div>
    </>
  )
}

export default ChangeLog












