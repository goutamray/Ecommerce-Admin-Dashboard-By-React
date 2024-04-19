import Layout from "../components/layout/Layout";
import Analyticks from "../pages/analytics/Analyticks";
import Crm from "../pages/crm/Crm";
import Ecommerce from "../pages/ecommerce/Ecommerce";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";


// create private router 
export const privateRoute = [
  {
    element : <Layout />,
    children : [
      {
        path : "/",
        element : <Home />,
        children : [
          {
            index : true,
            element : <Ecommerce />
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
            path : "/login",
            element : <Login /> 
          },
          {
            path : "/register",
            element : <Register /> 
          },
        ]
      },
        
      
    ]
  }

]











