import React from 'react'
import { FooterContainer, FooterWrap,  SocialMediaWrap, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, WebsiteRight} from './FooterElements'
import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll'

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
}
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>
              SberBank
            </SocialLogo>
            <WebsiteRight>SberBank © {new Date().getFullYear()} all rights reserved</WebsiteRight>
            <SocialIcons>
              <SocialIconLink href='/' target='-blank' aria-label='facebook'>
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href='/' target='-blank' aria-label='instagram'>
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href='/' target='-blank' aria-label='twitter'>
                <FaTwitter />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
