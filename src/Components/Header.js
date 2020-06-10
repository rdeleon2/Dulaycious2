import React, { useState } from 'react';
import { Jumbotron, NavbarToggler, Navbar, NavbarBrand, Nav, NavItem, NavLink, Collapse } from 'reactstrap';

function Header() {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);
    return (
        <div>
            <Jumbotron className="text-center">
                <h1>Dulayci<span role="img" aria-label="Yummy">😋</span>us</h1>
            </Jumbotron>
            <Navbar light sticky="top">
                <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                <Collapse isOpen={!collapsed} Navbar>
                    <Nav>
                        <NavItem>
                            <NavLink className="nav-link" href="/home">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/menu">Menu</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="contact">Contact</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
                <NavbarBrand><span role="img" aria-label="Yummy">😋</span>us</NavbarBrand>
            </Navbar>
        </div>
    )
}

export default Header;