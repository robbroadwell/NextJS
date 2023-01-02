import styled from 'styled-components'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";
import * as React from "react";
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import { FiBox } from "react-icons/fi";
import SecondaryButton from '../../components/button-secondary';
import { useParallax } from 'react-scroll-parallax';

const AboutWrapperSection = styled.section`
    height: 650px;
    flex: 1;
    display: flex;
    flex-direction: row;
    background-color: white;
    overflow: hidden !important;
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    position: relative;
    box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.3);
`;

const AboutWrapperBackground = styled.div`
    overflow: hidden !important;
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    position: relative;
    background-image: url("/assets/images/banner-color.jpeg");
    background-position: center;
    background-repeat: no-repeat !important;
    background-size: cover !important;
    height: 660px;
    position: absolute;
    left: 0px;
    right: -100px;
    top: 0px;
    bottom: 0px;
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
  margin: ${props => props.footer ? '50px 0 0 100px' : '50px 0 0 150px' };
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
  margin-right: 100px;
`

const AboutTitle = styled.h2`
  margin: 0;
  color: #EBC280;
  font-size: 54px;
  text-transform: uppercase;
  margin-left: -2px;
`;

const AboutContent = styled.p`
width: 640px;
font-family: Ubuntu-Light;
color: white;
font-size: 20px;
letter-spacing: 0px;
line-height: 23px;
text-align: left;
margin: 5px 20px 40px 0px;

`;

const SplashButtonStack = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`;

const SplashButtonVertical = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const SplashSpacer = styled.div`
  width: 20px;
`;

const style = {
  color: '#ffe9c4', 
  height: '20px',
  width: '20px',
  marginLeft: '10px'
}

const rightArrow = <FaArrowRight style={style} />

function AboutFooter({ footer, expandAbout }) {
  return (
    <AboutWrapper footer={footer}>
        <AboutImage footer={footer}/>
        <AboutContentWrapper>
          <AnimationOnScroll animateIn="bezier-animation" animateOnce={true}>
            <AboutTitle className='dark-glimmer'>
                Ready to learn more&nbsp;?
            </AboutTitle>
            
            {/* <AboutContent> 
                Richard relocates families to safe, 
                stable countries, and facilitates the movement of wealth into hard assets: real estate, farm land, and gold. <br />
                <span style={{fontFamily: 'Ubuntu-Light', letterSpacing: 0.5}}> He is the most sought-after expatriation consultant on the planet.</span>
            </AboutContent> */}
            
            <SplashButtonStack>
              <SplashButtonVertical>
                <SecondaryButton href={"/library/where-to-move"} icon={rightArrow}>Learning Library</SecondaryButton>
              </SplashButtonVertical>

              {/* <SplashSpacer />

              <SplashButtonVertical>
                <SecondaryButton href="/packages"  icon={rightArrow}>Questions &nbsp;&&nbsp; Answers</SecondaryButton>
              </SplashButtonVertical> */}
              
            </SplashButtonStack>

          </AnimationOnScroll>
        </AboutContentWrapper>
    </AboutWrapper>
  );
}

export default AboutFooter;
