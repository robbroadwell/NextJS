import styled from 'styled-components';
import Link from 'next/link';
import * as React from "react";
import { FcSearch, FcFinePrint, FcGraduationCap, FcAlarmClock, FcMoneyTransfer, FcCurrencyExchange } from "react-icons/fc";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { FcStatistics, FcFaq, FcGallery, FcPositiveDynamic, FcStart } from "react-icons/fc";


const IconContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 5px;
  margin: 3px 8px 0 15px;
`

const Sidebar = styled.aside`
    border-right-color: rgb(218, 221, 225);
    border-right-style: solid;
    border-right-width: 1px;
    box-sizing: border-box;
    clip-path: inset(0px);
    color: rgb(28, 30, 33);
    color-scheme: light;
    font-size: 17px;
    font-stretch: 100%;
    font-style: normal;
    font-weight: 300;
    line-height: 28.05px;
    height: calc(100vh - 75px);
    overflow-y: auto;
    overflow-wrap: break-word;
    text-rendering: optimizelegibility;
    text-size-adjust: 100%;
    transition-delay: 0s;
    transition-duration: 0s;
    transition-property: all;
    transition-timing-function: ease;
    width: 420px;
    height: calc(100vh - 75px);
    position: fixed;
    will-change: width;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`

const Nav = styled.nav`
    box-sizing: border-box;
    color: rgb(28, 30, 33);
    color-scheme: light;
    display: block;
    flex-grow: 1;
    font-size: 17px;
    font-stretch: 100%;
    font-style: normal;
    font-variant-caps: normal;
    font-variant-east-asian: normal;
    font-variant-ligatures: normal;
    font-variant-numeric: normal;
    font-weight: 500;
    line-height: 28.05px;
    overflow-wrap: break-word;
    overflow-x: hidden;
    margin: 0;
    padding: 0;
    text-rendering: optimizelegibility;
    text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`

const MenuList = styled.ul`
    box-sizing: border-box;
    color: rgb(28, 30, 33);
    color-scheme: light;
    display: block;
    font-weight: 500;
    line-height: 28.05px;
    list-style-image: none;
    list-style-position: outside;
    list-style-type: none;
    overflow-wrap: break-word;
    padding-inline-start: 0px;
    padding-left: 0px;
    padding: 0;
    margin: 25px 0 50px 50px;
    text-rendering: optimizelegibility;
    text-size-adjust: 100%;
    transition-delay: 0s;
    transition-duration: 0s;
    transition-property: none;
    transition-timing-function: ease;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`

const ContentItem = styled.li`
    font-size: 15px;
    font-stretch: 100%;
    font-style: normal;
    font-variant-caps: normal;
    font-variant-east-asian: normal;
    font-variant-ligatures: normal;
    font-variant-numeric: normal;
    font-weight: 300;
    line-height: 25px;
    padding-left: 10px;
    cursor: pointer;
    margin-left: 29px;
    background-color: ${props => props.active ? "#F2F2F2" : "FFFFFF"};
    border-left: ${props => props.active ? "2px solid #0b6dd0" : "2px solid #FFF"};

    &:hover {
        background-color: #F2F2F2;
    }
`

const ListPad = styled.div`
    height: 20px;
`

const TitleSubtitleContainer = styled.a`
  display: flex;
  flex-direction: column;
  flex: 1;
  pointer: cursor;
  padding: 5px 7px;
  margin: 5px 0;
  
//   &:hover {
//     background-color: #F2F2F2;
//   }
`

const Title = styled.h3`
    font-size: 22px;
    font-family: 'Ubuntu-Regular';
    line-height: 25px;
    margin: 0;
`;

const Subtitle = styled.h5`
    font-size: 15px;
    font-family: 'Ubuntu-Light';
    letter-spacing: 0px;
    margin: 0;
    margin-left: 1px;
    line-height: 20px;
`;

const HeaderOuterContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: -40px;
  margin-bottom: 5px;
cursor: pointer;
`;

const style= {
    color: '#ffe9c4', 
    height: '50px',
    width: '40px'
}
  
const Where = <FcSearch style={style} />;
const Basic = <FcGraduationCap style={style} />;
const Money = <FcCurrencyExchange style={style} />;
const Jetlag = <FcAlarmClock style={style} />;
const Process = <FcFinePrint style={style} />;
const Taxes = <FcMoneyTransfer style={style} />;


const arrowStyle = {
    color: '#333', 
    height: '25px',
    width: '25px'
}

const ArrowContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: 20px;
    opacity: ${props => props.active ? 1 : 0.1};
    transition: opacity 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);

    ${HeaderOuterContainer}:hover & {
        opacity: 1;
      }
`

const Start = <FcStart style={arrowStyle} />;

function Menu({ index }) {
  return (
        
    <Sidebar>
        <Nav>
            <MenuList>
                <Link href="/library/where-to-move/" passHref>
                    <HeaderOuterContainer>
                        <IconContainer>{Where}</IconContainer>
                        
                            <TitleSubtitleContainer>
                                <Title>Where to Move?</Title>
                                <Subtitle>Finding the Right Country</Subtitle>
                            </TitleSubtitleContainer>
                        
                        <ArrowContainer active={ index == 0 }>{Start}</ArrowContainer>
                    </HeaderOuterContainer>
                </Link>
                
                <Link href="/library/where-to-move/cities-towns-villages" passHref>
                    <ContentItem active={ index == 1 }>Cities, Towns, Villages</ContentItem>
                </Link>
                <Link href="/library/where-to-move/koppen-climate-zones" passHref>
                    <ContentItem active={ index == 2 }>Koppen Climate Zones</ContentItem>
                </Link>
                <Link href="/library/where-to-move/government-integrity" passHref>
                    <ContentItem active={ index == 3 }>Government Integrity</ContentItem>
                </Link>
                <Link href="/library/where-to-move/tax-burden" passHref>
                    <ContentItem active={ index == 4 }>Overall Tax Burden</ContentItem>
                </Link>
                <Link href="/library/where-to-move/subjective-cultural" passHref>
                    <ContentItem active={ index == 5 }>Subjective, Cultural, etc.</ContentItem>
                </Link>

                <ListPad />

                <Link href="/library/basic-skills-for-expats/" passHref>
                    <HeaderOuterContainer>
                        <IconContainer>{Basic}</IconContainer>
                        
                            <TitleSubtitleContainer>
                                <Title>Basic Skills for Expats</Title>
                                <Subtitle>Learn the Basics for Living Overseas</Subtitle>
                            </TitleSubtitleContainer>
                        
                        <ArrowContainer active={ index == 6 }>{Start}</ArrowContainer>
                    </HeaderOuterContainer>
                </Link>

                <Link href="/library/basic-skills-for-expats/navigation" passHref>
                    <ContentItem active={ index == 7 }>Navigation</ContentItem>
                </Link>
                <Link href="/library/basic-skills-for-expats/communication" passHref>
                    <ContentItem active={ index == 8 }>Communication</ContentItem>
                </Link>
                <Link href="/library/basic-skills-for-expats/shopping-and-errands" passHref>
                    <ContentItem active={ index == 9 }>Shopping and Errands</ContentItem>
                </Link>
                <Link href="/library/basic-skills-for-expats/minimize-jetlag" passHref>
                    <ContentItem active={ index == 10 }>Minimize Jetlag</ContentItem>
                </Link>
                <Link href="/library/basic-skills-for-expats/learning-the-language" passHref>
                    <ContentItem active={ index == 11 }>Learning the Language</ContentItem>
                </Link>

                <ListPad />

                <Link href="/library/dealing-with-money/" passHref>
                    <HeaderOuterContainer>
                        <IconContainer>{Money}</IconContainer>
                        
                            <TitleSubtitleContainer>
                                <Title>Dealing with Money</Title>
                                <Subtitle>Currencies, Exchange Fees, Banks</Subtitle>
                            </TitleSubtitleContainer>
                        
                        <ArrowContainer active={ index == 12 }>{Start}</ArrowContainer>
                    </HeaderOuterContainer>
                </Link>
                <ContentItem>Cities, Towns, Villages</ContentItem>
                <ContentItem>Koppen Climate Zones</ContentItem>
                <ContentItem>Government Integrity</ContentItem>
                <ContentItem>Overall Tax Burden</ContentItem>
                <ContentItem>Subjective, Cultural, etc.</ContentItem>
                <ListPad />

                <Link href="/library/overview-of-the-process/" passHref>
                    <HeaderOuterContainer>
                        <IconContainer>{Process}</IconContainer>
                        
                            <TitleSubtitleContainer>
                                <Title>Overview of the Process</Title>
                                <Subtitle>All the Steps for Moving Abroad</Subtitle>
                            </TitleSubtitleContainer>
                        
                        <ArrowContainer active={ index == 16 }>{Start}</ArrowContainer>
                    </HeaderOuterContainer>
                </Link>
                <ContentItem>Cities, Towns, Villages</ContentItem>
                <ContentItem>Koppen Climate Zones</ContentItem>
                <ContentItem>Government Integrity</ContentItem>
                <ContentItem>Overall Tax Burden</ContentItem>
                <ContentItem>Subjective, Cultural, etc.</ContentItem>
                <ListPad />

                <Link href="/library/paying-taxes/" passHref>
                    <HeaderOuterContainer>
                        <IconContainer>{Taxes}</IconContainer>
                        
                            <TitleSubtitleContainer>
                                <Title>Paying Taxes</Title>
                                <Subtitle>Guide for the American Expat</Subtitle>
                            </TitleSubtitleContainer>
                        
                        <ArrowContainer active={ index == 16 }>{Start}</ArrowContainer>
                    </HeaderOuterContainer>
                </Link>
                <ContentItem>Cities, Towns, Villages</ContentItem>
                <ContentItem>Koppen Climate Zones</ContentItem>
                <ContentItem>Government Integrity</ContentItem>
                <ContentItem>Overall Tax Burden</ContentItem>
                <ContentItem>Subjective, Cultural, etc.</ContentItem>
            </MenuList>
        </Nav>

    </Sidebar>

  );
}

export default Menu;
