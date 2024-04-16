import Layout from "../components/layout/Layout";
import Analyticks from "../pages/analytics/Analyticks";
import Crm from "../pages/crm/Crm";
import DashBoard from "../pages/dashboard/DashBoard";
import Ecommerce from "../pages/ecommerce/Ecommerce";


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
      {
        path : "/ecommerce",
        element : <Ecommerce /> 
      },
      {
        path : "/analytics",
        element : <Analyticks /> 
      },
      {
        path : "/crm",
        element : <Crm /> 
      },
      
      {
        path : "/crm",
        element : <Crm /> 
      },
      
    ]
  }

]











