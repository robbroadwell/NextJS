import styled from 'styled-components'
import Calendly from '../../components/calendly';
import * as Scroll from 'react-scroll';
import * as React from "react";
import "animate.css/animate.min.css";
import { useParallax } from 'react-scroll-parallax';

const Button = styled.a`
    border: 3px solid #000;
    // margin: 0 15px;
    // width: 280px;
    background-color: black;
    border: 2px solid black;
    color: white;
    font-family: 'Ubuntu-Bold';
    font-size: 26px;
    font-weight: 900;
    letter-spacing: -2px;
    text-transform: uppercase;
    padding: 10px 23px;
    opacity: 0.8;
    transition: opacity 0.3s cubic-bezier(0.25, 0.1, 0.25, 1), color 0.3s cubic-bezier(0.25, 0.1, 0.25, 1), border 0.5s cubic-bezier(0.25, 0.1, 0.25, 1);
    cursor: pointer;

  &:hover {
    // background-color: #ffe9c4;
    color: #ffe9c4;
    opacity: 1;
    border: 2px solid #ffe9c4;
    // box-shadow: 5px 5px 40px 5px rgba(0,0,0,0.7)
  }
`;

const AboutWrapperSection = styled.section`
    height: 650px;
    flex: 1;
    display: flex;
    flex-direction: row;
    background-color: black;
    overflow: hidden !important;
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    position: relative;
    margin-bottom: 30px;
    box-shadow: 5px 5px 20px 5px rgba(0,0,0,0.3);
`;

const AboutWrapperBackground = styled.div`
    overflow: hidden !important;
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    position: relative;
    background-image: url("/assets/images/banner-color-notchless.png");
    background-position: center;
    background-repeat: no-repeat !important;
    background-size: cover !important;
    height: 660px;
    position: absolute;
    left: 0px;
    right: -100px;
    top: 0px;
    bottom: 0px;
    z-index: 2;
`;

function AboutWrapper(props) {
    const { ref } = useParallax({ speed: -5 });
    
    return (
      <AboutWrapperSection>
          <AboutWrapperBackground ref={ ref } />
          {props.children}
      </AboutWrapperSection>
    )
  }

const AboutImage = styled.section`
  margin: ${props => props.footer ? '50px 0 0 100px' : '50px 0 0 100px' };
  flex: 1;
  background-image: url("/assets/images/richardbroadwell.png");
  background-position: bottom !important;
  background-repeat: no-repeat !important;
  background-size: contain !important;
  z-index: 1000;
`;

const AboutContentWrapper = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  z-index: 1000;
  margin-right: 100px;
`

const AboutTitle = styled.h2`
  margin: 0;
  color: #EBC280;
  font-size: 45px;
  text-transform: uppercase;
  margin-left: -2px;
`;

const AboutContent = styled.p`
  width: 640px;
  font-family: 'Ubuntu-Light';
  color: white;
  font-size: 19px;
  letter-spacing: 0px;
  line-height: 24px;
  text-align: left;
  margin: 5px 20px 30px 0px;

`;

function ScrollToLearn() {
  var Scroll   = require('react-scroll');
  var scroller = Scroll.scroller;

    scroller.scrollTo('history-rhymes', {
        duration: 800,
        smooth: true,
        offset: -80
    })
}

function AboutHero() {
  return (
    <AboutWrapper>
        <AboutImage />
        <AboutContentWrapper>
            <AboutTitle className='dark-glimmer'>
                Meet Richard Broadwell
            </AboutTitle>
            <AboutContent> 
                Richard relocates families to safe, 
                stable countries, and facilitates the movement of wealth into hard assets, like real estate, farm land, and gold. 
                He is the most sought-after expatriation consultant on the planet.
            </AboutContent>
            {/* <div className="animate__animated animate__headShake animate__delay-2s"> */}
              {/* <GetInTouchButton onClick={scrollDown} className='glimmer-box'>Keep Reading</GetInTouchButton> */}
              <Button onClick={ScrollToLearn}>Keep Reading</Button>
            {/* </div> */}
        </AboutContentWrapper>
    </AboutWrapper>
  );
}

export default AboutHero;
