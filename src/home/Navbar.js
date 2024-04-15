import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentDots,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import "../home/Navbar.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  const handleChatBtnClick = () => {
    if (!isButtonDisabled) {
      toast.info("Experiencing high traffic, Please wait a moment.", {
        position: toast.POSITION.TOP_CENTER,
        onOpen: () => setIsButtonDisabled(true),
        onClose: () => setIsButtonDisabled(false),
      });
    }
  } 
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = (e) => {
    setScrollPosition(e.target.scrollTop);
  };

  const scrollUp = () => {
    if (scrollPosition > 0) {
      document.getElementById('dropdown-content').scrollTop -= 50;
    }
  };

  const scrollDown = () => {
    document.getElementById('dropdown-content').scrollTop += 50;
  };
  return (
    <div className="navbar-section">
      <h1 className="navbar-title">
        <Link to="/">
          chartapp <span className="navbar-sign">application</span>
        </Link>
      </h1>
     

      {/* Desktop */}
      <ul className="navbar-items">
        <li>
          <Link to="/" className="navbar-links">
            Home
          </Link>
        </li>
        <li>
        <div className="dropdown">
      <button className="dropbtn" onClick={toggleDropdown}>
        charts
      </button>
      {isOpen && (
        <div className="dropdown-content" id="dropdown-content" onScroll={handleScroll}>
          <div className="scroll-up" onClick={scrollUp}>
            &#9650; {/* Up arrow */}
          </div>
          <a href="line">line chart</a>
          <a href="bar">Bar chart</a>
          <a href="boc">box charts</a>
          <a href="buble">Buble charts</a>
          <a href="surface">3d charts</a>
          <a href="scatter">scatter plot</a>
          <a href="graph">all charts</a>
          
          <div className="scroll-down" onClick={scrollDown}>
            &#9660; {/* Down arrow */}
          </div>
        </div>
      )}
    </div>
   </li>
   <li>
          <a href="#about" className="navbar-links">
          <Link to='/login' className="btn btn-light my-5">Logout</Link>
          </a>
        </li>
      </ul>
   
      


      {/* Mobile */}
      <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
        <div onClick={openNav} className="mobile-navbar-close">
          <FontAwesomeIcon icon={faXmark} className="hamb-icon" />
        </div>

        <ul className="mobile-navbar-links">
          <li>
            <Link onClick={openNav} to="/">
              Home
            </Link>
          </li>
          <li>
            <a onClick={openNav} href="#about">
            <Link to='/login' className="btn btn-light my-5">Logout</Link>
            </a>
          </li>
          <li>
          <a onClick={openNav} href="#chart">
          <button onClick={toggleDropdown}>
        charts
      </button>
      {isOpen && (
        <div   onScroll={handleScroll}>
          <div  onClick={scrollUp}>
            &#9650; {/* Up arrow */}
          </div>
          <a href="line">line chart</a>
          <a href="bar">Bar chart</a>
          <a href="boc">box charts</a>
          <a href="buble">Buble charts</a>
          <a href="surface">3d charts</a>
          <a href="scatter">scatter plot</a>
          <a href="graph">all charts</a>
          
          <div  onClick={scrollDown}>
            &#9660; {/* Down arrow */}
          </div>
        </div>
      )}
              
            
          
         </a>
          
          </li>
        </ul>
      </div>

      {/* Hamburger Icon */}
      <div className="mobile-nav">
        <FontAwesomeIcon
          icon={faBars}
          onClick={openNav}
          className="hamb-icon"
        />
      </div>
    </div>
  );
}
  
  


export default Navbar;