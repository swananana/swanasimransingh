/** @jsx jsx */ /** @jsxRuntime classic */ 
//import React from 'react';
import { jsx } from "theme-ui";
import { useRouter } from 'next/router'
import Link from "next/link"
import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { faCoffee , faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {  faFacebookF, faInstagram, faLinkedinIn , faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "animate.css"


export default (props) => {
    const router = useRouter();
    const [collapsed, setCollapsed] = useState(true);


    
    const toggleNavbar = () => setCollapsed(!collapsed);
    return(
        <body className="index-bg vh-100">
            <div className="navi mr-3">
            
            <Navbar color="faded justify-content-end mr-2" dark>
                <NavbarBrand className="text-white ml-auto mr-3" >
                <Link href="/">
                     <div className="bg-nav"></div>
                    </Link>
                 </NavbarBrand>  
                <NavbarToggler className="navbar-toggler-icon navbar-toggler ml-0 mr-3 p-md-3 justify-content-end" color="white"  onClick={toggleNavbar} className="mr-2" />
                <Collapse color="white" className="justify-content-end" isOpen={!collapsed} navbar>
                <Nav className="mr-3 justify-content-end container-fluid"  navbar>
                    <NavItem className="ms-auto text-white" style={{color:"white"}} >
                    <NavLink className="text-white" href="/components/">About me</NavLink>
                    </NavItem>
                    <NavItem className="ms-auto text-white" style={{color:"white"}} >
                    <NavLink className="text-white" href="https://github.com/reactstrap/reactstrap">Projects</NavLink>
                    </NavItem>
                    <NavItem className="ms-auto text-white" style={{color:"white"}} >
                    <NavLink className="text-white" href="https://github.com/reactstrap/reactstrap">Achievements</NavLink>
                    </NavItem>
                    <NavItem className="ms-auto text-white" style={{color:"white"}} >
                    <NavLink className="text-white" href="https://github.com/reactstrap/reactstrap">Education</NavLink>
                    </NavItem>
                </Nav>
                </Collapse>
        </Navbar>

            </div>
            <div className="pho d-flex justify-content-center">
            <img className="justify-content-center" src="/swanaPic.jpeg" alt="" class="image--cover" />
            </div>
            
            <div className="container" style={{top:"75px"}}>
            <h2 className="text-center text-white main-page-intro" >
                Hello World, I'm <span className="play-text animate__animated animate__delay-2s animate__infinite	 animate__pulse ">Swana Simran Singh.</span> 
            </h2>
            <p className="text-center text-white main-page-intro">I am a final year Engineering student with a huge passion for programming!</p>
            
            </div>

            <section className="social-section text-white">
               
                    {/* <a class="social-button facebook" href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook-f"></i></a>
                    <a class="social-button twitter" href="https://www.twitter.com/" target="_blank"><i class="fab fa-twitter"></i></a>
                    <a class="social-button linkedin" href="https://www.linkedin.com/" target="_blank"><i class="fab fa-linkedin"></i></a>
                    <a class="social-button youtube" href="https://www.youtube.com/" target="_blank"><i class="fab fa-youtube"></i></a>
                    <a class="social-button instagram" href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram"></i></a> */}
                
                <div class="social-menu">
                    <ul>
                        <li><Link href="https://www.linkedin.com/in/swananana/" className=" fab brand fa-linkedin-in p-3 m-3">
                            <FontAwesomeIcon icon={faLinkedinIn } />
                        </Link></li>
                        <li><Link href="mailto: swanasimransingh.22it@licet.ac.in" className=" p-3 brand fa-linkedin-in fa-email m-3 fab " >
                                <FontAwesomeIcon icon={faEnvelope} />
                            </Link></li>
                    <li><Link href="https://github.com/swananana" className=" p-3 m-3 brand fa-linkedin-in fab fa-linkedin-in">
                        <FontAwesomeIcon icon={faGithub} />
                    </Link></li>
                    <li><Link href="https://www.instagram.com/swananana_/" className=" fab brand fa-linkedin-in fa-instagram p-3 m-3">
                    <FontAwesomeIcon icon={faInstagram} />
                     </Link></li>


                        {/* <li><a href="https://www.instagram.com/imsanketbodke/" target="blank"><i class="fab fa-instagram"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/sanket-bodake-995b5b205/" target="blank"><i class="fab fa-linkedin-in"></i></a></li>
                        <li><a href="https://codepen.io/sanketbodke"><i class="fab fa-codepen" target="blank"></i></a></li> */}
                    </ul>
                </div>
                
                
                
                
            </section>
            
        </body>
    )
         
    
} 


