
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router'
import { createContext, useEffect, useState } from 'react'

const MyContext = createContext(); 
import './App.css'

function App() {
   const [isToggleSidebar, setIsToggleSideBar ] = useState(false); 
   const [themeMode, setThemeMode ] = useState(true); 


   useEffect(() => {

    if (themeMode === true ) {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
      localStorage.setItem("themeMode", "light" );
    }else{
      document.body.classList.remove("light");
      document.body.classList.add("dark");
      localStorage.setItem("themeMode", "dark" );
    }
 
   }, [themeMode])
   
  const values = {
    isToggleSidebar,
    setIsToggleSideBar,
    themeMode,
    setThemeMode, 

  
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

export { MyContext }; 
