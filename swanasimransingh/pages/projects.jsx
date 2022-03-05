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
        {/* Nav Bar */}
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
                    <NavLink className="text-white" href="/">Home</NavLink>
                    </NavItem>
                    <NavItem className="ms-auto text-white" style={{color:"white"}} >
                    <NavLink className="text-white" href="/about">About me</NavLink>
                    </NavItem>
                    
                    {/* <NavItem className="ms-auto text-white" style={{color:"white"}} >
                    <NavLink className="text-white" href="https://github.com/reactstrap/reactstrap">Achievements</NavLink>
                    </NavItem>
                    <NavItem className="ms-auto text-white" style={{color:"white"}} >
                    <NavLink className="text-white" href="https://github.com/reactstrap/reactstrap">Education</NavLink>
                    </NavItem> */}
                </Nav>
                </Collapse>
            </Navbar>
            </div>
        
        {/* Page Content */}
            
            <div className="container justify-content-center mb-5 top-space">
                <h2 className="text-center text-white main-page-intro" >
                    My <span className="play-text animate__animated animate__delay-2s animate__infinite	 animate__pulse ">Work</span> 
                </h2>
        {/* xStack */}
                <h5 className="text-center mt-2 text-white player-text" >
                    xStack - Office Documentation Module
                </h5>
                <p className="text-center text-white linked">
                As a part of xStack, the ERP suite for LICET, Developed the
                bonafide and certificate generation module. A paperless,
                automated, contact-free way to apply, receive bonafide and
                generate bulk certificates.
                </p>
                <p className="text-center text-white linked">
                PHP | Python | JavaScript | HTML5 | CSS3 | Boostrap4 | jQuery | AJAX | MariaDB
                </p>

        {/* Horizontal Line */}

            <hr className="text-white text-center justify-content-center m-auto mb-4" style={{width:"15rem",alignItems:"center", justifyContent:"center !important"}} />    
        {/* INTACTO */}
            <h5 className="text-center mt-2 text-white player-text" >
                INTACTO
                </h5>
                <p className="text-center text-white linked">
                Designed and Developed the platform and organized a virtual
                treasure hunt for 150 participants. The features included
                authentication, timers, checks at every level and a score tracker.
                </p>
                <p className="text-center text-white linked">
                PHP | JavaScript | AJAX | HTML5 | CSS3 | Boostrap4 | MySQL
                </p>

        {/* Horizontal Line */}

            <hr className="text-white text-center justify-content-center m-auto mb-4" style={{width:"15rem",alignItems:"center", justifyContent:"center !important"}} />    
        

        {/* Swana Simran */}
        <h5 className="text-center mt-2 text-white player-text" >
                Swana Simran
                </h5>
                <p className="text-center text-white linked">
                Minimal Personal Portfolio
                </p>
                <p className="text-center text-white linked">
                Next.js | reactstrap | Boostrap | theme-ui 
                </p>

        {/* Horizontal Line */}

            <hr className="text-white text-center justify-content-center m-auto mb-4" style={{width:"15rem",alignItems:"center", justifyContent:"center !important"}} />    

        {/* Swananana */}
        <h5 className="text-center mt-2 text-white player-text" >
            <Link href="https://swananana.github.io/swananana/">
            <a href="https://swananana.github.io/swananana/" className="text-white" style={{textDecoration:"none"}}>Swananana</a>
            </Link>
                </h5>
                <p className="text-center text-white linked">
                Personal fun website
                </p>
                <p className="text-center text-white linked">
                HTML | CSS3 | Boostrap | JavaScript
                </p>

        {/* Horizontal Line */}

            <hr className="text-white text-center justify-content-center m-auto mb-4" style={{width:"15rem",alignItems:"center", justifyContent:"center !important"}} />    
        
        {/* UV-BDZ */}
            <h5 className="text-center mt-2 text-white player-text" >
                UV - BioHazard Disinfecting Zone
                </h5>
                <p className="text-center text-white linked">
                Built a compact and portable disinfecting system using UV-C
                technology.

                </p>
                <p className="text-center text-white linked">
                UV-C | Sensors | Circuitory 
                </p>

        {/* Horizontal Line */}

            <hr className="text-white text-center justify-content-center m-auto mb-4" style={{width:"15rem",alignItems:"center", justifyContent:"center !important"}} />    
           
        {/* Growvy */}
        <h5 className="text-center mt-2 text-white player-text" >
                Growvy
                </h5>
                <p className="text-center text-white linked">
                Built an automated hydroponic indoor plant cultivation system for
                precision farming and monitoring. 
                </p>
                <p className="text-center text-white linked">
                UV-C | Sensors | Circuitory | Embedded C
                </p>

        {/* Horizontal Line */}

            <hr className="text-white text-center justify-content-center m-auto mb-4" style={{width:"15rem",alignItems:"center", justifyContent:"center !important"}} />    
        
        {/* On the fly */}
        <h5 className="text-center mt-2 text-white player-text" >
                On the fly
                </h5>
                <p className="text-center text-white linked">
                Built a voice-controlled drone inclusive of hardware integration for
                delivery and intruder detection.
                </p>
                <p className="text-center text-white linked">
                Arduino | NodeMCU | IFTTT | Blynk | Embedded C
                </p>        
        </div>
        
        {/* Horizontal Line */}

            <hr className="text-white text-center justify-content-center m-auto mb-4" style={{width:"15rem",alignItems:"center", justifyContent:"center !important"}} />
           
        {/*Social Media Section  */}
            <section className="social-section text-white mb-5">       
                <div class="social-menu">
                    <ul>
                        <li><Link href="https://www.linkedin.com/in/swanasimran/" className=" fab brand-1 fa-linkedin-in p-3 m-3">
                            <FontAwesomeIcon icon={faLinkedinIn } />
                        </Link></li>
                        <li><Link href="mailto: swanasimransingh.22it@licet.ac.in" className=" p-3 brand-2 fa-linkedin-in fa-email m-3 fab " >
                                <FontAwesomeIcon icon={faEnvelope} />
                        </Link></li>
                        <li><Link href="https://github.com/swananana" className=" p-3 m-3 brand fa-linkedin-in fab fa-linkedin-in">
                            <FontAwesomeIcon icon={faGithub} />
                        </Link></li>
                        <li><Link href="https://www.instagram.com/swananana_/" className=" fab brand fa-linkedin-in fa-instagram p-3 m-3">
                        <FontAwesomeIcon icon={faInstagram} />
                        </Link></li>
                    </ul>
                </div>    
            </section>
            
        </body>
    )
         
    
} 


