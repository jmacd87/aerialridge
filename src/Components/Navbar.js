import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"; 
import './Navbar.css';


export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-lg navbar-dark">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon">
    <i class="fa fa-navicon"></i>
      
    </span>
  </button>
        <Link to="/">
          <div className="logo">
          <img src=
          "https://aerialridge.com/wp-content/uploads/2019/07/best-ar.jpg" width="50px" alt="store" className="navbar-brand"/>
          </div>
        </Link>
        <Link to="/" className="nav-link">
        <h1><strong>AERIAL <span id="ridge">RIDGE</span></strong></h1>
        
            </Link>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <div id="topBotomBordersOut">
            <li className="nav-item ml-5">
              <a className="nav-link" href="#portfolio">
                <p>PORTFOLIO</p>
</a>
            </li>
          </div>
          <div id="topBotomBordersOut">
            <li className="nav-item ml-5">
            <a className="nav-link" href="#about">
                <p> ABOUT</p>
              </a>
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

      </div>
        
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
