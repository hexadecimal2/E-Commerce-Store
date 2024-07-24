import React, { useState } from "react";
import '../styles/Sidebar.css';
import Logo from "../assets/logo.png";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faStore, faShoppingBag, faSignOutAlt  } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div className={`sidebar ${isExpanded ? 'expanded' : ''}`}>
        <div className="top-sidebar">
          <Link to='/'>
          <div className="logo">
            <img src={Logo} alt="commerce website logo" />
          </div>
          </Link>
          <button className="btn toggle-button" onClick={toggleSidebar}>
            <FontAwesomeIcon icon={isExpanded ? faTimes : faBars} />
          </button>
          
          <ul className="nav-links">
            <Link to='/' className="link">
            <li>
              <button className="btn">
              <FontAwesomeIcon icon={faStore} />
              {/* conditional rendering */}
              {isExpanded && <span>Store</span>}
              </button>
            </li>
            </Link>
            <Link to='/bag' className="link">
            <li>
              <button className="btn">
              <FontAwesomeIcon icon={faShoppingBag} />
              {/* conditional rendering of bag text */}
              {isExpanded && <span>Bag</span>}
              </button>
            </li>
            </Link>
          </ul>
        </div>
        <div className="bottom-sidebar">
          <ul className="nav-links">
            <Link className="link">
            <li>
              <button className="btn">
              <FontAwesomeIcon icon={faSignOutAlt} />
              {isExpanded && <span>Logout</span>}
              </button>
            </li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;