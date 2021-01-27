import React from 'react';
import links from '../../data/links'
import {Link} from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import style from './navbar.module.css'; 

function About(props) {
  const linkItems = links.filter(item => item.isLink).map((item, index) => (
      <Nav.Link className={style.navbarHover}  key={index}>
        <Link to={item.link} className="nav-link">
          {item.title}
        </Link>
      </Nav.Link>
  ))
  return (    
    <>
      <Navbar className={style.navbarBorder}  collapseOnSelect expand="lg" bg="dark" variant="dark px-5">
      <Navbar.Brand >
        <Link className={style.hoverBrand} to="/">
          React-Bootstrap
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav  variant="mr-auto">
          {linkItems}
        </Nav>       
      </Navbar.Collapse>
    </Navbar>
    </>
  )
}

export default About