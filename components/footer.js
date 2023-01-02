import styled from 'styled-components'
import FooterLogo from './footer-logo';

    const FooterWrapper = styled.section`
        background-color: black;
        height: 160px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `;

    const FooterMenu = styled.section`
        display: flex;
        flex-direction: row;
        margin-bottom: 20px;
    `;

    const FooterMenuItem = styled.a`
        margin: 0 10px;
        font-family: 'Ubuntu-Regular';
        font-size: 14px;
        font-weight: 300;
        letter-spacing: 2px;
        color: #ffe9c4;
        padding: 0px 10px;
        text-transform: uppercase;
        text-decoration: none;
        opacity: 0.7;
        transition: opacity 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);

        &:hover {
            opacity: 1;
        }
    `;

    const FooterCopyright = styled.section`
        font-family: 'Ubuntu-Regular';
        color: #444;
        font-size: 14px;
        letter-spacing: 2px;
        margin: 0;
        margin-bottom: 5px;
    `;

function Footer() {

    return (
        <FooterWrapper>
            <FooterMenu>
            <FooterMenuItem target={"_blank"} href="https://termly.io/">Privacy Policy</FooterMenuItem>
            <FooterMenuItem target={"_blank"} href="https://termly.io/">Terms & Conditions</FooterMenuItem>
            <FooterMenuItem target={"_blank"} href="https://termly.io/">Cookie Policy</FooterMenuItem>
            <FooterMenuItem target={"_blank"} href="https://termly.io/">Manage Cookies</FooterMenuItem>
            <FooterMenuItem target={"_blank"} href="https://termly.io/">Disclaimer</FooterMenuItem>
            </FooterMenu>
            <FooterLogo />
            <FooterCopyright>Copyright © {(new Date().getFullYear())}, All Rights Reserved.</FooterCopyright>
        </FooterWrapper>
    );
  }
  
  export default Footer;
