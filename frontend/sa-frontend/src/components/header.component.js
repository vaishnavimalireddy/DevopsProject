import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch, Link } from "react-router-dom";
import './header.css';
import menu from './images/menu.png';

class Header extends Component {
  render(){
        function toggleDropdown(e) {
          e.preventDefault();
          var dropdown = document.querySelector(".smNavOptions");
          if (dropdown.style.display ==="none"){
            dropdown.style.display = "block";
          }
          else {
            dropdown.style.display = "none";
          }
    
        }
        
          return(
          <div className="headerContainer">
          <div className="divRight">
            <div className="navOptions">
              <Link to="/home">Home</Link>
              <a href="#footerContainer"> Contact us</a>
            </div>
            <a href="#" className ="menuIcon" onClick={toggleDropdown}><img src={menu} alt="Menu" className ="icon" /></a>
            <div className="smNavOptions">
              <Link to="/home">Home</Link>
              <a href="#footerContainer"> Contact us</a>
            </div>
          </div>
        </div>
          );
        
        
      
    }
}

export default Header;
