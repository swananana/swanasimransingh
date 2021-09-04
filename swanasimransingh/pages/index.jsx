/** @jsx jsx */ /** @jsxRuntime classic */ 
//import React from 'react';
import { jsx } from "theme-ui";
import { useRouter } from 'next/router'
import Link from "next/link"
import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

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
            <img className="justify-content-center" src="https://i2.cdn.turner.com/cnnnext/dam/assets/140926165711-john-sutter-profile-image-large-169.jpg" alt="" class="image--cover" />
            </div>
            
            <div className="container" style={{top:"75px"}}>
            <h2 className="text-center text-white main-page-intro" >
                Hello World, I'm <span className="play-text animate__animated animate__delay-2s animate__infinite	 animate__pulse ">Swana Simran Singh.</span> 
            </h2>
            <p className="text-center text-white main-page-intro">I am a final year Engineering student with a huge passion for programming!</p>
            </div>

            <section className="social-section">
                <div class="wrapper">
                    <div class="button">
                        <div class="icon">
                            <i class="fab fa-instagram"></i>
                        </div>
                        <span>Instagram</span>
                    </div>

                    <div class="button">
                        <div class="icon">
                            <i class="fab fa-facebook-f"></i>
                        </div>
                        <span>Facebook</span>
                    </div>

                    <div class="button">
                        <div class="icon">
                            <i class="fab fa-twitter"></i>
                        </div>
                        <span>Twitter</span>
                    </div>

                    <div class="button">
                        <div class="icon">
                            <i class="fab fa-linkedin"></i>
                        </div>
                        <span>LinkedIn</span>
                    </div>

                    <div class="button">
                        <div class="icon">
                            <i class="fab fa-youtube"></i>
                        </div>
                        <span>YouTube</span>
                    </div>

                    <div class="button">
                        <div class="icon">
                            <i class="fab fa-github"></i>
                        </div>
                        <span>Github</span>
                    </div>
                </div>
            </section>
            
        </body>
    )
         
    
} 


