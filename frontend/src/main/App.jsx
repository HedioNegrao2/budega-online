import React from "react";
import "../common/template/dependeces";
import { HashRouter } from "react-router-dom";

import Rotas from './routes'
import Footer from "../common/template/footer";
import Header from "../common/template/header"
import Asside from "../common/template/assideBar"


export default props => (
  <HashRouter>
  <div className="wrapper">
    
     <Header/>
     <Asside/>
      <Rotas />
    <Footer/>
   </div>  
   
  </HashRouter>
);
