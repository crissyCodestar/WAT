import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Images/Logo.png';

const Navbar = () => (

  <div className="headerImgDiv">
    <div className="overlay">
        <div className="navbar">
          <Link className="head" to="/WAT/">Home</Link> {"  "}
          <Link className="head" to="/WAT/about">About</Link> {"  "}
        </div>
        <div className="headerTitle">
            <img src={Logo}/>
        </div>
        <div className="down_arrow">
          <a href="#main"><i /></a>
        </div>
    </div>
  </div>
)

export default Navbar;
