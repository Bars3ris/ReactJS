import React from 'react'
import {Icon, CloseIcon, SidebarContainer, SideBtnWrap, SidebarLink, SidebarRoute, SidebarWrapper, SidebarMenu} from './SidebarElement';
import SearchBar from '../Navbar/Search';

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
                <SidebarLink to="creditsbercard" onClick={toggle}>Credit Card</SidebarLink>
                <SidebarLink to="debitcard" onClick={toggle}>Debit Cards</SidebarLink>
                <SidebarLink to="signup" onClick={toggle}>Sign up</SidebarLink>
                <SidebarLink><SearchBar 
                    placeholder="Search"
                    onChange={(e) => console.log(e.target.value)} /></SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/signin">Sing up</SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
