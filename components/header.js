import styled from 'styled-components'
import Calendly from './calendly-header';
import Logo from './logo';
import Link from 'next/link';
import * as React from "react";
import { useRouter } from 'next/router'
import BoopLink from './boop-link';
import BoopLinkDropdown from './boop-link-dropdown';
import { GrCycle } from "react-icons/gr";
import { FaShoppingCart, FaHome } from 'react-icons/fa';
import { IoBook, IoEarthSharp, IoChatboxEllipses } from 'react-icons/io5';
import { FiBox } from "react-icons/fi";
import { RiMoneyEuroBoxFill } from "react-icons/ri";
import { AiFillRead } from "react-icons/ai";
import { FcGraduationCap, FcVideoCall, FcFaq, FcGallery, FcPositiveDynamic, FcStart } from "react-icons/fc";
import { MdOutlineMenuBook } from "react-icons/md";

const OuterWrapper = styled.section`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    background: black;
    box-shadow: 0px 0px 10px 5px rgba(0,0,0,0.5);
    z-index: 2000;
`;

const InnerWrapper = styled.section`
    flex: 1;
    display: flex;
    flex-direction: row;
    max-width: 1480px;
    padding: 10px 20px;
    background: black;
`;

const Menu = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0;
    padding: 0;

    &:hover > * {
        opacity: 0.5;
    }
      
    &:hover > *:hover {
        opacity: 1;
    }
`;

const PopoverContent = styled.section`
    
    // box-shadow: 0px 0px 10px 5px rgba(0,0,0,0.5);
`;

var Scroll   = require('react-scroll');
var Element  = Scroll.Element;
var scroller = Scroll.scroller;


function ScrollToLearn() {
    scroller.scrollTo('history-rhymes', {
        duration: 800,
        smooth: true,
        offset: -125
    })
}

function Header() {
    const router = useRouter()
    console.log(router.pathname);

    // if (router.asPath.includes("#learn")) {
    //     ScrollToLearn();
    // }

    const style= {
        color: '#ffe9c4', 
        margin: '0 8px 0 0', 
        padding: '4px 0 0 0', 
        height: '25px',
        width: '25px'
    }

    const home = <FaHome style={style} />;
    const learn = <FcGraduationCap style={style} />;
    const packages = <FcGallery style={style} />;
    const videoCall = <FcVideoCall style={style} />;
    const qa = <FcFaq style={style} />;

    const dropdown = <PopoverContent>dropdown content</PopoverContent>;

  return (
      <OuterWrapper>
          <InnerWrapper>
            <Logo />
            <Menu>
                <Link href="/#" passHref>
                    <BoopLink title={"Home"} icon={home} />
                </Link>

                {/* {router.pathname === "/" || router.pathname == "/learn" ? 
                    <BoopLink title={"Learn"} icon={learn} onClick={() => ScrollToLearn()} href={"#"} />
                : 
                <Link href="/#learn" passHref>
                    <BoopLink title={"Learn"} icon={learn} />
                </Link>
                } */}

                <Link href="/library/where-to-move" passHref>
                    <BoopLinkDropdown title={"Learn"} icon={learn} dropdown={dropdown} />
                </Link>

                <Link href="/packages" passHref>
                    <BoopLinkDropdown title={"Destinations"} icon={packages} dropdown={dropdown} />
                </Link>

                <Link href="/library" passHref>
                    <BoopLink title={"Questions"} icon={qa} />
                </Link>

                <Calendly>
                    <BoopLink title={"Contact"} icon={videoCall} />
                </Calendly>
            </Menu>

          </InnerWrapper>
      </OuterWrapper>
  );
}

export default Header;
