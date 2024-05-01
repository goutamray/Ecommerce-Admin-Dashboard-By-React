

import "./ColorBox.css"
const ColorBox = ({ bg, color }) => {
  return (
    <>
        <div className="color-all">
             <div className="color-box" style={{backgroundColor : bg}}></div>
               <div className="color-text">
                  <p> {color} </p>
                  <p> {bg } </p>
               </div>
           </div>
    </>
  )
}

export default ColorBox


