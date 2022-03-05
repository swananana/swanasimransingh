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
            
            <div className="container justify-content-center top-space">
                <h2 className="text-center text-white main-page-intro" >
                    About <span className="play-text animate__animated animate__delay-2s animate__infinite	 animate__pulse ">Me</span> 
                </h2>
                <p className="text-center text-white main-page-intro">
                That's 'Swan-aah' by the way. 
                I'm an avid fiction reader who enjoys tragic endings.
                When I'm not busy crying over sad romantic books,
                I binge watch web series and try my hand at cooking (The food is edible, I swear). 
                A student of engineering by day and a 'I-drown-my-gooddays-and-baddays-with-music' kind of person by night.
                </p>

                <p className="text-center text-white main-page-intro">
                I am a software engineer with a great experience in working with cutting-edge tech, 
                I have an OCD to write visually pleasing code. 
                The thrill of working in a new domain and the satisfaction when the job is done is what keeps me going.  
                I have a newly found
                passion for competitive programming. 
                </p>

                <p className="text-center text-white mb-3 main-page-intro">
                Being multi-lingual might just be my slight flex, so put up with me while I try my mediocre French, 
                ludicruous Tamil and my almost fluent English. If I’m not sleeping, 
                I’d be writing code for some random website just like the one you’re staring at. I love pasta, 
                chocolates and long conversations about novels.
                </p>

            {/* Horizontal Line */}

            <hr className="text-white text-center justify-content-center m-auto mb-4" style={{width:"15rem",alignItems:"center", justifyContent:"center !important"}} />    
            
            {/* Technologies */}
                <h3 className="text-center text-white mt-4 main-page-intro" style={{fontSize:"5rem !important"}} >
                    Core <span className="play-text " style={{fontSize:"5rem !important"}}>Competencies</span> 
                </h3>
                <h3 className="text-left text-white text-bold player-text" >
                    Languages 
                </h3>
                <p className="text-center text-white player-text">
                Python, PHP, JavaScript, HTML5, CSS3/SCSS
                </p>

                <h3 className="text-left text-white player-text" >
                    Frameworks/ <span className="played-text " >Libraries</span>
                </h3>
                <p className="text-center text-white player-text">
                Boostrap, Tailwind CSS, Theme-UI, React.js, Next.js,
                jQuery
                </p>

                <h3 className="text-left text-white player-text" >
                    Databases & <span className="played-text " >Dev Tools</span>
                </h3>
                <p className="text-center text-white player-text">
                MySQL, MariaDB, Git, GitHub, JIRA, npm, AJAX, ArduinoIDE, Canva, Framer. Figma,
                 Visual Studio Code
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


