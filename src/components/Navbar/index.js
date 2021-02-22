import React from 'react';
import { FaBars } from 'react-icons/fa';
import { 
  MobileIcon, 
  Nav, 
  NavbarContainer, 
  NavItem, 
  NavLinks, 
  NavLogo, 
  NavMenu 
} from './NavbarElements';

function Navbar() {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">dolla</NavLogo>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
          <NavMenu> 
            <NavItem>
              <NavLinks to='about'>About</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
