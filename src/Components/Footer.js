import './Footer.css';
import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"; 

export default class Footer extends Component {
    render() {
      return (
        <FootWrapper className="navbar navbar-expand-sm bg-primary px-sm-5">
          <Link to="/">
            <div className="logo">
            <img src=
            "https://aerialridge.com/wp-content/uploads/2019/07/best-ar.jpg" width="50px" alt="store" className="navbar-brand"/>
            </div>
          </Link>
          <Link to="/" className="nav-link">
          <h1><strong>AERIAL <span id="ridge">RIDGE</span></strong></h1>
          
              </Link>
          
        
            <a href="https://www.facebook.com/aerialridge/" className="social">
            <img src={require('../Media/facebook-48.png')} alt=""/>
            </a>
            <a href="https://www.youtube.com/channel/UCtUm2y91NQcN1sgToIBM3xg?view_as=subscriber" className="social">
            <img src={require('../Media/youtube-48.png')} alt=""/>
            </a>
            <a href="https://www.instagram.com/aerialridge/" className="social">
            <img src={require('../Media/instagram-48.png')} alt=""/>
            </a>
  
        
          
        </FootWrapper>
      );
    }
  }
  
  const FootWrapper = styled.nav`
    background-color: black !important;
    max-height: 80px;
    font-color: #0274be !important;
    .nav-link {
      color: white;
      font-size: 1.3rem;
      text-transform: capitalize;
    }
  `;
  