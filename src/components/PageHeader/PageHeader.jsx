import favicon from "../../assets/img/logo.webp"; 

import { Helmet } from "react-helmet";

const PageHeader = ({ title }) => {
  return (
    <>
       <Helmet > 
            <meta charSet="utf-8" />
              <title> Hotash - React Admin | { title } </title> 
               <link rel="shortcut icon" href={favicon} type="image/x-icon" />
        </Helmet>
    </>
  )
}

export default PageHeader; 















