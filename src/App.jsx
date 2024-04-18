
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router'
import './App.css'
import { createContext, useState } from 'react'

const MyContext = createContext(); 

function App() {
   const [isToggleSidebar, setIsToggleSideBar ] = useState(false); 
   
  const values = {
    isToggleSidebar,
    setIsToggleSideBar
  }
 
  return (
    <>
      <MyContext.Provider value={values}> 
           <RouterProvider router={router}/>   
     </MyContext.Provider>
    </>  
  )
}

export default App;

export {MyContext}; 
