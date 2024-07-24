
// components 
import BreadCrumb from "../../../components/BreadCrumb/BreadCrumb"
import ColorBox from "../../../components/color-Box/ColorBox";

import "./Color.css";
const Color = () => {
  return (
    <>
      <div className="right-content">
        <BreadCrumb title={"Colors Variant"} page={"User Interface"} />

        <div className="card p-3 shadow my-4 ">
         <h4 > Red Variants </h4>
           <div className="row color-row ">
            <div className="col-sm-2 custom-coll ">
                <ColorBox bg={"#fff1f3"} color={"red-100"}/>
            </div>
            <div className="col-sm-2">
               <ColorBox bg={"#ffdfe4"} color={"red-200"}/>
            </div>
            <div className="col-sm-2">
               <ColorBox bg={"#ffc4cd"} color={"red-300"}/>
            </div>
            <div className="col-sm-2">
               <ColorBox bg={"#ff9baa"} color={"red-400"}/>
            </div>
            <div className="col-sm-2">
               <ColorBox bg={"#ff6179"} color={"red-500"}/>
            </div>
            <div className="col-sm-2">
               <ColorBox bg={"#ff304f"} color={"red-600"}/>
            </div>
            <div className="col-sm-2">
               <ColorBox bg={"#f11133"} color={"red-700"}/>
            </div>
            <div className="col-sm-2">
               <ColorBox bg={"#e00b2b"} color={"red-800"}/>
            </div>
            <div className="col-sm-2">
               <ColorBox bg={"#a70d24"} color={"red-900"}/>
            </div>
           </div>
        </div>

        <div className="card p-3 shadow my-4 ">
         <h4 > Dark Variants</h4>
           <div className="row color-row ">
            <div className="col-sm-2 custom-coll ">
                <ColorBox bg={"#39496b"} color={"dark-100"}/>
            </div>
            <div className="col-sm-2">
               <ColorBox bg={"#2f3f61"} color={"dark-200"}/>
            </div>
            <div className="col-sm-2">
               <ColorBox bg={"#253557"} color={"dark-300"}/>
            </div>
            <div className="col-sm-2">
               <ColorBox bg={"#1b2b4d"} color={"dark-400"}/>
            </div>
            <div className="col-sm-2">
               <ColorBox bg={"#112143"} color={"dark-500"}/>
            </div>
            <div className="col-sm-2">
               <ColorBox bg={"#071739"} color={"dark-600"}/>
            </div>
            <div className="col-sm-2">
               <ColorBox bg={"#010c2c"} color={"dark-700"}/>
            </div>
            <div className="col-sm-2">
               <ColorBox bg={"#00031f"} color={"dark-800"}/>
            </div>
            <div className="col-sm-2">
               <ColorBox bg={"#000015"} color={"dark-900"}/>
            </div>
           </div>
        </div>

        <div className="card p-3 shadow my-4 ">
         <h4 > Gray Variants</h4>
           <div className="row color-row ">
            <div className="col-sm-2 custom-coll ">
                <ColorBox bg={"#f8f8f8"} color={"gray-100"}/>
            </div>
            <div className="col-sm-2">
               <ColorBox bg={"#f0f0f0"} color={"gray-200"}/>
            </div>
            <div className="col-sm-2">
               <ColorBox bg={"#e4e4e4"} color={"gray-300"}/>
            </div>
            <div className="col-sm-2">
               <ColorBox bg={"#d1d1d1"} color={"gray-400"}/>
            </div>
            <div className="col-sm-2">
               <ColorBox bg={"#b4b4b4"} color={"gray-500"}/>
            </div>
            <div className="col-sm-2">
               <ColorBox bg={"#9a9a9a"} color={"gray-600"}/>
            </div>
            <div className="col-sm-2">
               <ColorBox bg={"#818181"} color={"gray-700"}/>
            </div>
            <div className="col-sm-2">
               <ColorBox bg={"#6a6a6a"} color={"gray-800"}/>
            </div>
            <div className="col-sm-2">
               <ColorBox bg={"#5a5a5a"} color={"gray-900"}/>
            </div>
           </div>
        </div>

        <div className="card p-3 shadow my-4 ">
         <h4 > Blue Variants </h4>
           <div className="row color-row ">
            <div className="col-sm-2 custom-coll ">
                <ColorBox bg={"#eff8ff"} color={"gray-100"}/>
            </div>
            <div className="col-sm-2">
               <ColorBox bg={"#dcedfd"} color={"gray-200"}/>
            </div>
            <div className="col-sm-2">
               <ColorBox bg={"#c1e1fc"} color={"gray-300"}/>
            </div>
            <div className="col-sm-2">
               <ColorBox bg={"#96cefa"} color={"gray-400"}/>
            </div>
            <div className="col-sm-2">
               <ColorBox bg={"##64b3f6"} color={"gray-500"}/>
            </div>
            <div className="col-sm-2">
               <ColorBox bg={"#4094f1"} color={"gray-600"}/>
            </div>
            <div className="col-sm-2">
               <ColorBox bg={"#2b77e5"} color={"gray-700"}/>
            </div>
            <div className="col-sm-2">
               <ColorBox bg={"#2262d3"} color={"gray-800"}/>
            </div>
            <div className="col-sm-2">
               <ColorBox bg={"#2351af"} color={"gray-900"}/>
            </div>
           </div>
        </div>

        <div className="card p-3 shadow my-4 ">
         <h4 > Green Variants </h4>
           <div className="row color-row ">
            <div className="col-sm-2 custom-coll ">
                <ColorBox bg={"#f0fdf5"} color={"green-100"}/>
            </div>
            <div className="col-sm-2">
               <ColorBox bg={"#ddfbe9"} color={"green-200"}/>
            </div>
            <div className="col-sm-2">
               <ColorBox bg={"#bdf5d3"} color={"green-300"}/>
            </div>
            <div className="col-sm-2">
               <ColorBox bg={"#89ecb3"} color={"green-400"}/>
            </div>
            <div className="col-sm-2">
               <ColorBox bg={"#4eda89"} color={"green-500"}/>
            </div>
            <div className="col-sm-2">
               <ColorBox bg={"#27bf68"} color={"green-600"}/>
            </div>
            <div className="col-sm-2">
               <ColorBox bg={"#1a9f53"} color={"green-700"}/>
            </div>
            <div className="col-sm-2">
               <ColorBox bg={"#187d44"} color={"green-800"}/>
            </div>
            <div className="col-sm-2">
               <ColorBox bg={"#18633a"} color={"green-900"}/>
            </div>
           </div>
        </div>

        <div className="card p-3 shadow my-4 ">
         <h4 > Orange Variants </h4>
           <div className="row color-row ">
            <div className="col-sm-2 custom-coll ">
                <ColorBox bg={"#fff9ec"} color={"orange-100"}/>
            </div>
            <div className="col-sm-2">
               <ColorBox bg={"#fff2d3"} color={"orange-200"}/>
            </div>
            <div className="col-sm-2">
               <ColorBox bg={"#ffe1a5"} color={"orange-300"}/>
            </div>
            <div className="col-sm-2">
               <ColorBox bg={"#ffca6d"} color={"orange-400"}/>
            </div>
            <div className="col-sm-2">
               <ColorBox bg={"#ffa732"} color={"orange-500"}/>
            </div>
            <div className="col-sm-2">
               <ColorBox bg={"#ff8c0a"} color={"orange-600"}/>
            </div>
            <div className="col-sm-2">
               <ColorBox bg={"#ff7300"} color={"orange-700"}/>
            </div>
            <div className="col-sm-2">
               <ColorBox bg={"#cc5302"} color={"gray-800"}/>
            </div>
            <div className="col-sm-2">
               <ColorBox bg={"#a1400b"} color={"orange-900"}/>
            </div>
           </div>
        </div>

        <div className="card p-3 shadow my-4 ">
         <h4 > Purple Variants </h4>
           <div className="row color-row ">
            <div className="col-sm-2 custom-coll ">
                <ColorBox bg={"#fdf3ff"} color={"purple-100"}/>
            </div>
            <div className="col-sm-2">
               <ColorBox bg={"#fbe5ff"} color={"purple-200"}/>
            </div>
            <div className="col-sm-2">
               <ColorBox bg={"#f6caff"} color={"purple-300"}/>
            </div>
            <div className="col-sm-2">
               <ColorBox bg={"#f3a0ff"} color={"purple-400"}/>
            </div>
            <div className="col-sm-2">
               <ColorBox bg={"#ed68ff"} color={"purple-500"}/>
            </div>
            <div className="col-sm-2">
               <ColorBox bg={"#de2fff"} color={"purple-600"}/>
            </div>
            <div className="col-sm-2">
               <ColorBox bg={"#be0ee1"} color={"purple-700"}/>
            </div>
            <div className="col-sm-2">
               <ColorBox bg={"#a808c3"} color={"purple-800"}/>
            </div>
            <div className="col-sm-2">
               <ColorBox bg={"#8c099f"} color={"purple-900"}/>
            </div>
           </div>
        </div>

        <div className="card p-3 shadow my-4 ">
         <h4 > Yellow Variants </h4>
           <div className="row color-row ">
            <div className="col-sm-2 custom-coll ">
                <ColorBox bg={"#fefdec"} color={"yellow-100"}/>
            </div>
            <div className="col-sm-2">
               <ColorBox bg={"#fcf7c9"} color={"yellow-200"}/>
            </div>
            <div className="col-sm-2">
               <ColorBox bg={"#f9ef8e"} color={"yellow-300"}/>
            </div>
            <div className="col-sm-2">
               <ColorBox bg={"#f6e053"} color={"yellow-400"}/>
            </div>
            <div className="col-sm-2">
               <ColorBox bg={"#f4d02b"} color={"yellow-500"}/>
            </div>
            <div className="col-sm-2">
               <ColorBox bg={"#edb213"} color={"yellow-600"}/>
            </div>
            <div className="col-sm-2">
               <ColorBox bg={"#e1940e"} color={"yellow-700"}/>
            </div>
            <div className="col-sm-2">
               <ColorBox bg={"#ae640f"} color={"yellow-800"}/>
            </div>
            <div className="col-sm-2">
               <ColorBox bg={"#8e4d12"} color={"yellow-900"}/>
            </div>
           </div>
        </div>

        <div className="card p-3 shadow my-4 ">
         <h4 >Social Variants </h4>
           <div className="row color-row ">
            <div className="col-sm-2 custom-coll ">
                <ColorBox bg={"#3b5998"} color={"facebook"}/>
            </div>
            <div className="col-sm-2">
               <ColorBox bg={"#0e76a8"} color={"linkedin"}/>
            </div>
            <div className="col-sm-2">
               <ColorBox bg={"#00acee"} color={"twitter"}/>
            </div>
            <div className="col-sm-2">
               <ColorBox bg={"#E60023"} color={"google"}/>
            </div>
            <div className="col-sm-2">
               <ColorBox bg={"#F77737"} color={"instagram"}/>
            </div>
            <div className="col-sm-2">
               <ColorBox bg={"#25D366"} color={"whatsapp"}/>
            </div>
            <div className="col-sm-2">
               <ColorBox bg={"#f0002a"} color={"pinterest"}/>
            </div>
            <div className="col-sm-2">
               <ColorBox bg={"#FF0000"} color={"youtube"}/>
            </div>
          
           </div>
        </div>



      </div>
    </>
  )
}

export default Color












