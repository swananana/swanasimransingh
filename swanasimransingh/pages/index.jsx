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
                    <NavLink className="text-white" href="/about">About me</NavLink>
                    </NavItem>
                    <NavItem className="ms-auto text-white" style={{color:"white"}} >
                    <NavLink className="text-white" href="/projects">Projects</NavLink>
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
            <div className="pho d-flex justify-content-center">
            <img className="justify-content-center" src="/swanaPic.jpeg" alt="" class="image--cover" />
            </div>
            
            <div className="container" style={{top:"75px"}}>
            <h2 className="text-center text-white main-page-intro" >
                Hello World, I'm <span className="play-text animate__animated animate__delay-2s animate__infinite	 animate__pulse ">Swana Simran Singh.</span> 
            </h2>
            <p className="text-center text-white main-page-intro">Student |  Developer |  Engineer</p>
            </div>
        {/* Links to different pages */}
        <div className="linked mb-3 d-md-flex align-items-center justify-content-center  text-white text-center">
            <Link href="/about" className="text-white " style={{color:"white !important"}}>
                <a href="/about" className="text-white m-2 p-2" style={{textDecoration:"none"}}> About Me</a>
            </Link>

            <Link href="/projects" className="text-white m-2 p-2" color="white" style={{color:"white !important"}}>
                <a href="/projects" className="text-white m-2 p-2" style={{textDecoration:"none"}}> Projects</a>
            </Link>

            {/* <Link href="/about" className="text-white " color="white" style={{color:"white !important"}}>
                <a href="/about" className="text-white m-2 p-2" style={{textDecoration:"none"}}> Achievements </a>
            </Link>

            <Link href="/about" className="text-white " color="white" style={{color:"white !important"}}>
                <a href="/about" className="text-white m-2 p-2" style={{textDecoration:"none"}}> Education </a>
            </Link> */}
            
        </div>
        {/* Horizontal Line */}

            <hr className="text-white text-center justify-content-center m-auto mb-4" style={{width:"15rem",alignItems:"center", justifyContent:"center !important"}} />
           
        {/*Social Media Section  */}
            <section className="social-section text-white">       
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


