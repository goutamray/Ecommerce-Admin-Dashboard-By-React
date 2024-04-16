import Layout from "../components/layout/Layout";
import DashBoard from "../pages/dashboard/DashBoard";


// create private router 
export const privateRoute = [
  {
    element : <Layout />,
    children : [
      {
        path : "/",
        element : <DashBoard /> 
      },
      {
        path : "/dashboard",
        element : <DashBoard /> 
      },
      
    ]
  }

]











