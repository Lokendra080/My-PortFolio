import React from 'react'
import './Home.css'
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div  className='homeWraper'>
            <div className='Home-container'>
                <div className='Left-home'>
                    <div className="text">
                        <p>Hi,</p>
                        This is <span className="span" style={{ color: "#f3a6c5" }}>Lokendra Kumar</span>. <br/>
                        I'm a Professional <span className="span" > Software
                            Developer.</span>
                    </div>
                    <div className='icon'>
                    <Nav.Link href='https://github.com/Lokendra080?tab=repositories' target='blanck'>
                        <i class="fi fi-brands-github" ></i></Nav.Link>
                        <Nav.Link href='https://www.linkedin.com/in/lokendra-kumar-41715725a/' target='blanck'>
                        <i class="fi fi-brands-linkedin"></i></Nav.Link>
                        <i class="fi fi-brands-facebook"></i>
                        <i class="fi fi-brands-instagram"></i>
                    </div>
                    <div className='Btn'>
                        <div>
                        <Link className='Link' to="/Contect"> <Button variant="outline-info " className='btn-Contact btn-sm'>Contact Me</Button></Link>
                            <Button variant="outline-info  " className='btn-Contact btn-sm'>Get Resume</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Home
