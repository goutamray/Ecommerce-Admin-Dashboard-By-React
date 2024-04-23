import Layout from "../components/layout/Layout";
import BlankPage from "../pages/blankPage/BlankPage";
import Home from "../pages/home/Home";
import Message from "../pages/message/Message";
import Notification from "../pages/notification/Notification";
import Setting from "../pages/setting/Setting";
import OrderList from "../pages/order/OrderList";

// login &  register 
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";

//dashboard list all
import Ecommerce from "../pages/dashBoard/ecommerce/Ecommerce"
import Analyticks from "../pages/dashBoard/analytics/Analyticks";
import Crm from "../pages/dashBoard/crm/Crm";

// product list 
import ProductList from "../pages/productAll/productList/ProductList";
import ProductUpload from "../pages/productAll/productUpload/ProductUpload";
import ProductView from "../pages/productAll/productView/ProductView";

// invoice list 
import InvoiceList from "../pages/invoiceAll/invoiceList/InvoiceList";
import InvoiceDetails from "../pages/invoiceAll/invoiceDetails/InvoiceDetails";
import UserList from "../pages/userAll/userList/UserList";
import UserProfile from "../pages/userAll/userProfile/UserProfile";
import MyAccount from "../pages/userAll/myAccount/MyAccount";


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
          {
            path : "/product-list",
            element : <ProductList /> 
          },
          {
            path : "/product-view",
            element : <ProductView /> 
          },
          {
            path : "/product-upload",
            element : <ProductUpload /> 
          },
          {
            path : "/order-list",
            element : <OrderList />
          },
          {
            path : "/notification",
            element : <Notification /> 
          },
          {
            path : "/setting",
            element : <Setting /> 
          },
          {
            path : "/message",
            element : <Message /> 
          },
          {
            path : "/blank-page",
            element : <BlankPage /> 
          },
          {
            path : "/invoice-list",
            element : <InvoiceList />
          },
          {
            path : "/invoice-details",
            element : <InvoiceDetails />
          },
          {
            path : "/user-list",
            element : <UserList />
          },
          {
            path : "/user-profile",
            element : <UserProfile /> 
          },
          {
            path : "/my-account",
            element : <MyAccount /> 
          }

        ]
      },
        
      
    ]
  }

]











