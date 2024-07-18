import React from 'react';
import { Navbar } from 'react-bootstrap';

const Header = () => (
  <Navbar bg="primary" variant="dark" sticky="top">
    <Navbar.Brand href="/">Twitter Clone</Navbar.Brand>
  </Navbar>
);

export default Header;
