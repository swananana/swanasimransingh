/** @jsx jsx */ /** @jsxRuntime classic */ 
//import React from 'react';
import { jsx } from "theme-ui";
import { useRouter } from 'next/router'
import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';


export default (props) => {
    const router = useRouter();
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);
    return(
        <body className="index-bg vh-100">
            <div className="navi">
            <Navbar color="faded" light>
                <NavbarBrand href="/" className="mr-auto">reactstrap</NavbarBrand>
                <NavbarToggler className="navbar-toggler-icon navbar-toggler" color="white"  onClick={toggleNavbar} className="mr-2" />
                <Collapse color="white"  isOpen={!collapsed} navbar>
                <Nav style={{backgroundColor:"white"}}  navbar>
                    <NavItem style={{backgroundColor:"white"}} >
                    <NavLink href="/components/">Components</NavLink>
                    </NavItem>
                    <NavItem style={{backgroundColor:"white"}} >
                    <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                    </NavItem>
                </Nav>
                </Collapse>
        </Navbar>

            </div>
            
            
            <div className="container">
            <h2 className="text-center " sx={{top:"50%"}}>
                Hello World, I'm Swana.
            </h2>
            </div>
            
        </body>
    )
         
    
} 


