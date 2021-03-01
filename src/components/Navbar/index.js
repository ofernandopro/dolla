import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import { 
  MobileIcon, 
  Nav, 
  NavbarContainer, 
  NavBtn, 
  NavBtnLink, 
  NavItem, 
  NavLinks, 
  NavLogo, 
  NavMenu 
} from './NavbarElements';

function Navbar({ toggle }) {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if(window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <>
    <IconContext.Provider value={{ color: '#fff' }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>dolla</NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu> 
              <NavItem>
                <NavLinks 
                  to='about'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={0}
                >About</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks 
                  to='services'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={0}
                >Services</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks 
                  to='learnmore'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={0}
                >Learn More</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks 
                  to='signup'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={0}
                >Sign Up</NavLinks>
              </NavItem>
            </NavMenu>

            <NavBtn>
              <NavBtnLink to="/signin">Sign In</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
