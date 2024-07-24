import BreadCrumb from "../../../components/BreadCrumb/BreadCrumb"

// react icons 
import { MdOutlineVerifiedUser } from "react-icons/md";
import { IoMail } from "react-icons/io5";


import "./Fields.css"; 

const Fields = () => {
  return (
    <>
      <div className="right-content">
        <BreadCrumb title={"Fields Variant"} page={"User Interface"}/> 
   
        <div className="card p-3 my-5 shadow">
          <div className="row"> 
             <h4 className="head-line"> Icon fields </h4>
          </div>
          <div className="row">
         
            <div className="col-sm-4">          
             <div className="fields-header">
                 <div className="my-3">
                  <h4 className="custom-size "> Small Size </h4>
                </div>
                   <div className="mb-3 custon-field ">
                      <span className="icon"> <IoMail /> </span>         
                      <input type="email" className="form-control" placeholder="Enter your email" autoFocus />                                 
                    </div>             

                    <div className="mb-3 custon-field">    
                      <span className="icon">  <MdOutlineVerifiedUser /> </span>                
                        <select className="form-select" >
                          <option selected> Select User Role </option>
                          <option value="1"> Admin </option>
                          <option value="2"> Member </option>
                          <option value="3"> Client </option>
                        </select>               
                    </div>
                  
                   <div className="my-3 custon-field">
                      <textarea rows="5" className="form-control" placeholder="Message "> message </textarea>
                 </div>
             </div>
           </div>

           <div className="col-sm-4">          
             <div className="fields-header">

             <div className="my-3">
                  <h4 className="custom-size "> Medium Size </h4>
                </div>
                   <div className="mb-3 custon-field ">
                      <span className="icon"> <IoMail /> </span>         
                      <input type="email" className="form-control abcde" placeholder="Enter your email" autoFocus />                                 
                    </div>             

                    <div className="mb-3 custon-field">    
                      <span className="icon">  <MdOutlineVerifiedUser /> </span>                
                        <select className="form-select abcde" >
                          <option selected> Select User Role </option>
                          <option value="1"> Admin </option>
                          <option value="2"> Member </option>
                          <option value="3"> Client </option>
                        </select>               
                    </div>
                  
                   <div className="my-3 custon-field">
                      <textarea rows="6" className="form-control" placeholder="Message "> message </textarea>
                 </div>
             </div>
           </div>


           <div className="col-sm-4">          
             <div className="fields-header">

                <div className="my-3">
                  <h4 className="custom-size "> Large Size </h4>
                </div>
                   <div className="mb-3 custon-field ">
                      <span className="icon"> <IoMail /> </span>         
                      <input type="email" className="form-control defg" placeholder="Enter your email" autoFocus />                                 
                    </div>             

                    <div className="mb-3 custon-field">    
                      <span className="icon">  <MdOutlineVerifiedUser /> </span>                
                        <select className="form-select defg" >
                          <option selected> Select User Role </option>
                          <option value="1"> Admin </option>
                          <option value="2"> Member </option>
                          <option value="3"> Client </option>
                        </select>               
                    </div>
                  
                   <div className="my-3 custon-field">
                      <textarea rows="7" className="form-control" placeholder="Message "> message </textarea>
                 </div>
             </div>
           </div>


          </div>
         </div>


            
        <div className="card p-3 my-5 shadow">
          <div className="row"> 
             <h4  className="head-line"> Label Fields </h4>
          </div>
          <div className="row">
         
            <div className="col-sm-4">          
             <div className="fields-header">
                 <div className="my-3">
                  <h4 className="custom-size "> Small Size </h4>
                </div>
                   <div className="mb-3 custon-field ">
                   <span className="icon-abc">  <IoMail /> </span> 
                      <label > TEXT FIELD </label>        
                      <input type="email" className="form-control" placeholder="Enter your email" autoFocus />                                 
                    </div>             

                    <div className="mb-3 custon-field">    
                    <span className="icon-abc">  <MdOutlineVerifiedUser /> </span>      
                      <label > SELECT OPTION </label>          
                        <select className="form-select" >
                          <option selected> Select User Role </option>
                          <option value="1"> Admin </option>
                          <option value="2"> Member </option>
                          <option value="3"> Client </option>
                        </select>               
                    </div>
                  
                   <div className="my-3 custon-field">
                   <label > LONG TEXTAREA </label>   
                      <textarea rows="5" className="form-control" placeholder="Message "> message </textarea>
                 </div>
             </div>
           </div>

           <div className="col-sm-4">          
             <div className="fields-header">

             <div className="my-3">
                  <h4 className="custom-size "> Medium Size </h4>
                </div>
                   <div className="mb-3 custon-field ">
                   <span className="icon-abc"> <IoMail /> </span>    
                      <label > TEXT FIELD </label>       
                      <input type="email" className="form-control abcde" placeholder="Enter your email" autoFocus />                                 
                    </div>             

                    <div className="mb-3 custon-field">    
                    <span className="icon-abc">   <MdOutlineVerifiedUser /> </span>          
                      <label > SELECT OPTION </label>        
                        <select className="form-select abcde" >
                          <option selected> Select User Role </option>
                          <option value="1"> Admin </option>
                          <option value="2"> Member </option>
                          <option value="3"> Client </option>
                        </select>               
                    </div>
                  
                   <div className="my-3 custon-field">
                    <label > LONG TEXTAREA </label>  
                      <textarea rows="6" className="form-control" placeholder="Message "> message </textarea>
                 </div>
             </div>
           </div>


           <div className="col-sm-4">          
             <div className="fields-header">

                <div className="my-3">
                  <h4 className="custom-size "> Large Size </h4>
                </div>
                   <div className="mb-3 custon-field ">
                   <span className="icon-abc">  <IoMail /> </span> 
                      <label > TEXT FIELD </label>          
                      <input type="email" className="form-control defg" placeholder="Enter your email" autoFocus />                                 
                    </div>             

                    <div className="mb-3 custon-field">    
                      <span className="icon-abc">  <MdOutlineVerifiedUser /> </span>         
                      <label > SELECT OPTION </label>      
                         
                        <select className="form-select defg" >
                          <option selected> Select User Role </option>
                          <option value="1"> Admin </option>
                          <option value="2"> Member </option>
                          <option value="3"> Client </option>
                        </select>               
                    </div>
                  
                   <div className="my-3 custon-field">
                      <label > LONG TEXTAREA </label>  
                      <textarea rows="7" className="form-control" placeholder="Message "> message </textarea>
                 </div>
             </div>
           </div>


          </div>
         </div>
      </div>
    </>
  )
}

export default Fields


