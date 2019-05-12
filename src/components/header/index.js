import React from 'react';
 
import { Navbar, Container } from 'rbx';
import LogoImage from '../../assets/images/logo.png';
 
import "../../styles/header.scss";
 
const Header = () => (
  <Navbar>
    <Container>
      <Navbar.Brand>
        <img src={LogoImage} />
      </Navbar.Brand>
    </Container>
  </Navbar>
);
 
export default Header;