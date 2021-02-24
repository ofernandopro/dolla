import React from 'react';
import { 
  SidebarContainer, 
  Icon, 
  CloseIcon, 
  SidebarRoute,
  SidebarLink,
  SideBtnWrap,
  SidebarWrapper,
  SidebarMenu
} from './SidebarElemetns';

function Sidebar() {
  return (
    <SidebarContainer>
      <Icon>
        <CloseIcon />
      </Icon>

      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about">About</SidebarLink>
          <SidebarLink to="discover">Discover</SidebarLink>
          <SidebarLink to="services">Services</SidebarLink>
          <SidebarLink to="signup">Signup</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/signin">SignIn</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
}

export default Sidebar;
