
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css'
import { Link } from 'react-router-dom';

const NavBar = () => {

  return (
    <Navbar  className='body-container'>
        <Container className='navbar '>
          <div>
          <Navbar.Brand  className='Nav-Name'><Link className='Nav-item' to="/">Lokendra Kumar</Link></Navbar.Brand>

          </div>
          <div>
          <Nav className="item">
            <Link className='Nav-item' to="/">Home</Link>
            <Link className='Nav-item' to="/About" >About</Link>
            <Link className='Nav-item' to="/Exprince">Experience</Link>
            <Link className='Nav-item' to="/Skills">Skills</Link>
            <Link className='Nav-item' to="/Education">Education</Link>
            <Link className='Nav-item' to="/Contect">Contact</Link>
            {/* <Link className='Nav-item' to="/UserQuery">User Data</Link> */}
          </Nav>

          </div>
          
        
        </Container>
      </Navbar>
  )
}

export default NavBar
