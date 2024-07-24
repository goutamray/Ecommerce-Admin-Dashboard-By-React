
// react icons 
import { IoMdPrint } from "react-icons/io";
import { IoMdDownload } from "react-icons/io";

// images 
import logo from "../../../assets/img/logo.webp"
import jama from "../../../assets/img/jama.webp"

// compontents
import BreadCrumb from "../../../components/BreadCrumb/BreadCrumb";

import "./InvoiceDetails.css"; 

const InvoiceDetails = () => {
  return (
    <>
      <div className="right-content">
         <BreadCrumb title={"Invoice Details"} page={"Invoices"}/> 
     

        <div className="card p-5 shadow invoice-details mt-4">
           <div className="logo-invoice">
               <img src={logo} alt="" />
              <h3>INVOICE #985466  </h3>
           </div>
           <div className="received-details">
               <div className="left-received">
                  <ul>
                    <li > <h5>Order Recieved  </h5> </li>
                    <li> Rangpur Shalban Mistripara, Rangpur </li>
                    <li> Shalban, Rangpur 1265. </li>
                    <li> +8801755302053 </li>
                    <li> developergoutam53@gmail.com  </li>
                  </ul>
               </div>
               <div className="right-received">
                  <ul>
                    <li> <h5> Shipment_details  </h5> </li>
                    <li> Nilphamari Khokshabari, Nilphamari </li>
                    <li> Khokshabari, Nilphamari 1200. </li>
                    <li> +8801767115941 </li>
                    <li> webgeniusbd.goutam53@gmail.com </li>
                  </ul>
               </div>
           </div>

         <div className="table-responsive my-4">
          <table className="table table-bordered table-striped">
             <thead>
               <tr> 
                 <th> UID </th>
                 <th> PRODUCT </th>
                 <th> PRICE </th>
                 <th> DISCOUNT  </th>
                 <th> QUANTITY </th>
                 <th> AMOUNT </th>
               </tr>
             </thead>
             <tbody>
                <tr>
                  <td> #5768</td>
                  <td className="image-box ">
                    <img src={jama} alt="" />
                    <p> modern summer short </p>
                  </td>
                  <td> $20 </td>
                  <td> 20% </td>
                  <td> 	03 </td>
                  <td> 	$15 </td>
                </tr>
                <tr>
                  <td> #5768</td>
                  <td className="image-box ">
                    <img src={jama} alt="" />
                    <p> modern summer short </p>
                  </td>
                  <td> $20 </td>
                  <td> 20% </td>
                  <td> 	03 </td>
                  <td> 	$15 </td>
                </tr>
                <tr>
                  <td> #5768</td>
                  <td className="image-box ">
                    <img src={jama} alt="" />
                    <p> modern summer short </p>
                  </td>
                  <td> $20 </td>
                  <td> 20% </td>
                  <td> 	03 </td>
                  <td> 	$15 </td>
                </tr>
                <tr>
                  <td> #5768</td>
                  <td className="image-box ">
                    <img src={jama} alt="" />
                    <p> modern summer short </p>
                  </td>
                  <td> $20 </td>
                  <td> 20% </td>
                  <td> 	03 </td>
                  <td> 	$15 </td>
                </tr>
                <tr>
                  <td> #5768</td>
                  <td className="image-box ">
                    <img src={jama} alt="" />
                    <p> modern summer short </p>
                  </td>
                  <td> $20 </td>
                  <td> 20% </td>
                  <td> 	03 </td>
                  <td> 	$15 </td>
                </tr>
                <tr>
                  <td> #5768</td>
                  <td className="image-box ">
                    <img src={jama} alt="" />
                    <p> modern summer short </p>
                  </td>
                  <td> $20 </td>
                  <td> 20% </td>
                  <td> 	03 </td>
                  <td> 	$15 </td>
                </tr>
             </tbody>
          </table>
        </div>

        <div className="sub-total-box ">
            <div className="row">
              <div className="col-sm-9"></div>
              <div className="col-sm-3 sub-box ">
                <ul>
                  <li> <span className="left"> Subtotal </span> : <span className="right"> $2,749.00 </span></li>

                  <li> <span className="left"> Discount </span> : <span className="right"> $134.00 </span></li>
                  <li> <span className="left"> Shipping </span> : <span className="right"> $60.00</span></li>
                  <li> <span className="left"> Total </span> : <span className="right"> <b>  $2,878.00 </b></span></li>
                  <li className="last-border "> <span className="left"> Status </span> : <span className="right"> <p> COD </p> </span> </li>
                </ul>
              </div>
            </div>
        </div>

        <div className="last-text py-4">
          <p> Thank you for ordering greeny. We offer a 7-day return policy on all products. If you have any complain about this order, please call or email us. (VAT has been calculated as per GO 02/Mushak/2019). This is a sytem generated invoice and no signature or seal is required. </p>
        </div>

        <div className="download-print-button">
          <button className="btn btn-dark"><span> <IoMdPrint /> </span> print this reciept </button>
          <button className="btn btn-success"> <span> <IoMdDownload /> </span> download as pdf </button>
        </div>

        </div>
  
      </div>
    </>
  )
}

export default InvoiceDetails; 







