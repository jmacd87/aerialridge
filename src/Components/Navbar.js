import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"; 
import './Navbar.css';
import '../App.css';

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm bg-primary px-sm-5">
        <Link to="/">
          <div className="logo">
          <img src=
          "https://aerialridge.com/wp-content/uploads/2019/07/best-ar.jpg" width="50px" alt="store" className="navbar-brand"/>
          </div>
        </Link>
        <Link to="/" className="nav-link">
        <h1><strong>AERIAL <span id="ridge">RIDGE</span></strong></h1>
        
            </Link>
        
        <ul className="navbar-nav align-items-center">
          <div id="topBotomBordersOut">
            <li className="nav-item ml-5">
              <Link to="/portfolio" className="nav-link">
                <p>PORTFOLIO</p>
              </Link>
            </li>
          </div>
          <div id="topBotomBordersOut">
            <li className="nav-item ml-5">
              <Link to="/About" className="nav-link">
                <p> ABOUT</p>
              </Link>
            </li>
          </div>
          <div id="topBotomBordersOut">
            <li className="nav-item ml-5">
              <Link to="/Contact" className="nav-link">
                <p> CONTACT</p>
              </Link>
            </li>
          </div></ul>
          <a href="https://www.facebook.com/aerialridge/" className="social">
          <img src={require('../Media/facebook-48.png')} />
          </a>
          <a href="https://www.youtube.com/channel/UCtUm2y91NQcN1sgToIBM3xg?view_as=subscriber" className="social">
          <img src={require('../Media/youtube-48.png')} />
          </a>
          <a href="https://www.instagram.com/aerialridge/" className="social">
          <img src={require('../Media/instagram-48.png')} />
          </a>

      
        
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background-color: black !important;
  max-height: 80px;
  font-color: #0274be !important;
  .nav-link {
    color: white;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;
