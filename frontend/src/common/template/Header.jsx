import React from "react"
import Navbar from './navbar'

export default props => (
  <header className="main-header">
    <a href="/#/" className="logo">
      
      <span className="logo-mini">
        <b>A</b>
        LT
      </span>
      
      <span className="logo-lg">
        <b>Admin</b>
        LTE
      </span>
    </a>

    <nav className="navbar navbar-static-top">
      <a  className='sidebar-toggle' data-toggle='offcanvas'>  </a>
      <Navbar />
    </nav>
  </header>
);
