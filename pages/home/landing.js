import styled from 'styled-components';
import Calendly from '../../components/calendly';
import * as React from "react";
import StandardButton from '../../components/button';
import { useParallax } from 'react-scroll-parallax';
import { useRouter } from 'next/router'

const OuterWrapperSection = styled.section`
    height: 780px;
    flex: 1;
    display: flex;
    flex-direction: column;
    background-color: gray;
    overflow: hidden !important;
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    position: relative;
`;

const OuterWrapperBackground = styled.div`
    overflow: hidden !important;
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    position: relative;
    background-image: url("/assets/images/banner.jpeg");
    background-position: left;
    background-repeat: no-repeat !important;
    background-size: cover !important;
    height: 780px;
    position: absolute;
    left: 0px;
    right: 0px;
    top: 0px;
    bottom: 0px;
    z-index: 2;
`;

function OuterWrapper(props) {
    const { ref } = useParallax({ speed: -10 });
    
    return (
      <OuterWrapperSection>
          <OuterWrapperBackground ref={ ref } />
          {props.children}
      </OuterWrapperSection>
    )
  }

const TopSpacer = styled.section`
    height: 90px;
`;

const ContentOutsideContainer = styled.section`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    width: 60%;
    z-index: 3;
`;

const ContentInsideContainer = styled.section`
    display: flex;
    // background: red;
    flex-direction: row;
    justify-content: flex-end;
`;

const ContentTitleContainer = styled.section`
    display: flex;
    flex-direction: column;
    width: 705px;
`;

const MainTitle = styled.h1`
    font-family: 'Ubuntu-MediumItalic';
    font-size: 76px;
    font-weight: 900;
    letter-spacing: -2px;
    line-height: 74px;
    text-transform: uppercase;
    text-align: center;
    margin: 0; 
    margin-top: 25px; 
`;

const SubTitle = styled.h2`
    font-family: 'Ubuntu-Regular';
    // text-transform: uppercase;
    text-align: center;
    font-size: 26px;
    letter-spacing: 1px;
    margin: 10px 0 0 0;
    color: rgb(30, 46, 57);
    font-weight: 100;
`;

const SplashButtonStack = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 20px;
    margin: 10px 0;
`;

var Scroll   = require('react-scroll');
var scroller = Scroll.scroller;

function ScrollToLearn() {
    scroller.scrollTo('history-rhymes', {
        duration: 800,
        smooth: true,
        offset: -125
    })
}

const CallToActionPrimary = styled.h3`
    font-size: 26px;
    margin: 0;
    color: white;
    letter-spacing: 0px;
    text-transform: uppercase;
`;

const CallToActionSecondary = styled.h3`
    
    font-family: 'Ubuntu-Bold';
    font-size: 76px;
    font-weight: 900;
    letter-spacing: -2px;
    line-height: 60px;
    font-size: 55px;
    margin: 0;
    color: #ffe9c4;
    text-transform: uppercase;
    opacity: 0.75;
    transition: opacity 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);

    &:hover {
        opacity: 1;
    }
`;

const CallToAction = styled.a`
    font-weight: 700;
    background-color: black;
    opacity: 100%;
    height: 150px;
    color: white;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    padding-bottom: 5px;
    font-family: 'Ubuntu-Regular';
    text-decoration: none;
    z-index: 8;
`;

function Landing() {

    const router = useRouter()
    console.log(router.pathname);

    if (router.asPath.includes("#learn")) {
        ScrollToLearn();
    }

    return (
        <OuterWrapper>
            <TopSpacer />

            <ContentOutsideContainer>
                <ContentInsideContainer>
                    <ContentTitleContainer>
                    <svg width="0" height="0" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnsdata="ApexChartsNS" transform="translate(0, 0)">
                    <defs>
                        <symbol id="icon-world" viewBox="0 0 216 100">
                        <title>world</title>
                        <path d="M48 94l-3-4-2-14c0-3-1-5-3-8-4-5-6-9-4-11l1-4 1-3c2-1 9 0 11 1l3 2 2 3 1 2 8 2c1 1 2 2 0 7-1 5-2 7-4 7l-2 3-2 4-2 3-2 1c-2 2-2 9 0 10v1l-3-2zM188 90l3-2h1l-4 2zM176 87h2l-1 1-1-1zM195 86l3-2-2 2h-1zM175 83l-1-2-2-1-6 1c-5 1-5 1-5-2l1-4 2-2 4-3c5-4 9-5 9-3 0 3 3 3 4 1s1-2 1 0l3 4c2 4 1 6-2 10-4 3-7 4-8 1zM100 80c-2-4-4-11-3-14l-1-6c-1-1-2-3-1-4 0-2-4-3-9-3-4 0-5 0-7-3-1-2-2-4-1-7l3-6 3-3c1-2 10-4 11-2l6 3 5-1c3 1 4 0 5-1s-1-2-2-2l-4-1c0-1 3-3 6-2 3 0 3 0 2-2-2-2-6-2-7 0l-2 2-1 2-3-2-3-3c-1 0-1 1 1 2l1 2-2-1c-4-3-6-2-8 1-2 2-4 3-5 1-1-1 0-4 2-4l2-2 1-2 3-2 3-2 2 1c3 0 7-3 5-4l-1-3h-1l-1 3-2 2h-1l-2-1c-2-1-2-1 1-4 5-4 6-4 11-3 4 1 4 1 2 2v1l3-1 6-1c5 0 6-1 5-2l2 1c1 2 2 2 2 1-2-4 12-7 14-4l11 1 29 3 1 2-3 3c-2 0-2 0-1 1l1 3h-2c-1-1-2-3-1-4h-4l-6 2c-1 1-1 1 2 2 3 2 4 6 1 8v3c1 3 0 3-3 0s-4-1-2 3c3 4 3 7-2 8-5 2-4 1-2 5 2 3 0 5-3 4l-2-1-2-2-1-1-1-1-2-2c-1-2-1-2-4 0-2 1-3 4-3 5-1 3-1 3-3 1l-2-4c0-2-1-3-2-3l-1-1-4-2-6-1-4-2c-1 1 3 4 5 4h2c1 1 0 2-1 4-3 2-7 4-8 3l-7-10 5 10c2 2 3 3 5 2 3 0 2 1-2 7-4 4-4 5-4 8 1 3 1 4-1 6l-2 3c0 2-6 9-8 9l-3-2zm22-51l-2-3-1-1v-1c-2 0-2 2-1 4 2 3 4 4 4 1z"/><path d="M117 75c-1-2 0-6 2-7h2l-2 5c0 2-1 3-2 1zM186 64h-3c-2 0-6-3-5-5 1-1 6 1 7 3l2 3-2-1zM160 62h2c1 1 0 1-1 1l-1-1zM154 57l-1-2c2 2 3 1 2-2l-2-3 2 2 1 4 1 3v2l-3-4zM161 59c-1-1-1-2 1-4 3-3 4-3 4 0 0 4-2 6-5 4zM167 59l1-1 1 1-1 1-1-1zM176 59l1-1v2l-1-1zM141 52l1-1v2l-1-1zM170 52l1-1v2l-1-1zM32 50c-1-2-4-3-6-4-4-1-5-3-7-6l-3-5-2-2c-1-3-1-6 2-9 1-1 2-3 1-5 0-4-3-5-8-4H4l2-2 1-1 1-1 2-1c1-2 7-2 23-1 12 1 12 1 12-1h1c1 1 2 2 3 1l1 1-3 1c-2 0-8 4-8 5l2 1 2 3 4-3c3-4 4-4 5-3l3 1 1 2 1 2c3 0-1 2-4 2-2 0-2 0-2 2 1 1 0 2-2 2-4 1-12 9-12 12 0 2 0 2-1 1 0-2-2-3-6-2-3 0-4 1-4 3-2 4 0 6 3 4 3-1 3-1 2 1s-1 2 1 2l1 2 1 3 1 1-3-2zm8-24l1-1c0-1-4-3-5-2l1 1v2c-1 1-1 1 0 0h3zM167 47v-3l1 2c1 2 0 3-1 1z"/><path d="M41 43h2l-1 1-1-1zM37 42v-1l2 1h-2zM16 38l1-1v2l-1-1zM172 32l2-3h1c1 2 0 4-3 4v-1zM173 26h2l-1 1-1-1zM56 22h2l-2 1v-1zM87 19l1-2 1 3-1 1-1-2zM85 19l1-1v1l-1 1v-1zM64 12l1-3c2 0-1-4-3-4s-2 0 0-1V3l-6 2c-3 1-3 1-2-1 2-1 4-2 15-2h14c0 2-6 7-10 9l-5 2-2 1-2-2zM53 12l1-1c2 0-1-3-3-3-2-1-1-1 1-1l4 2c2 1 2 1 1 3-2 1-4 2-4 0zM80 12l1-1 1 1-1 1-1-1zM36 8h-2V7c1-1 7 0 7 1h-5zM116 7l1-1v1l-1 1V7zM50 5h2l-1 1-1-1zM97 5l2-1c0-1 1-1 0 0l-2 1z"/>
                        </symbol>
                        <symbol id="icon-repeated-world" viewBox="0 0 432 100">
                        <use href="#icon-world" x="0"></use>
                        <use href="#icon-world" x="189"></use>
                        </symbol>
                    </defs>     
                </svg>

                <div className="notice">
                    <span className="world">
                    <span className="images">
                        <svg><use href="#icon-repeated-world"></use></svg>
                    </span>
                    </span>
                </div>

                {router.asPath.includes("#") ? 
                <div style={{overflowWrap: 'break-word'}}>
                    <MainTitle>
                        <span>Ready&nbsp;</span>
                        <span>to&nbsp;</span>
                        <span>move&nbsp;</span>
                        <span>to&nbsp;</span>
                        <span>a&nbsp;</span>
                        <span>new&nbsp;</span>
                        <span>country&nbsp;?&nbsp;</span>
                        {/* <span>to&nbsp;</span>
                        <span>a&nbsp;</span>
                        <span>new&nbsp;</span>
                        <span>country&nbsp;</span> */}
                    </MainTitle>
                    <SubTitle>
                        {/* <span>The&nbsp;</span>
                        <span>process&nbsp;</span>
                        <span>may&nbsp;</span>
                        <span>be&nbsp;</span>
                        <span>intimidating</span><br /> */}
                        <span>Get&nbsp;</span>
                        <span>the&nbsp;</span>
                        <span>best&nbsp;</span>
                        <span>possible&nbsp;</span>
                        <span>advice.&nbsp;</span>
                        <span>Choose&nbsp;</span>
                        <span>a&nbsp;</span>
                        <span>country&nbsp;</span>
                        <span>and&nbsp;</span>
                        <span>get&nbsp;</span>
                        <span>started.&nbsp;</span>
                        {/* <span>with&nbsp;</span> */}
                        {/* <span>my&nbsp;</span> */}
                        <span>Help&nbsp;</span>
                        <span>every&nbsp;</span>
                        <span>step&nbsp;</span>
                        <span>of&nbsp;</span>
                        <span>the&nbsp;</span>
                        <span>way.&nbsp;</span>
                        <span>Visa&nbsp;</span>
                        <span>guaranteed.</span>
                        {/* <span>money&nbsp;</span>
                        <span>back</span> */}
                        {/* <span>residency&nbsp;</span>
                        <span>visa&nbsp;</span>
                        <span>guaranteed.&nbsp;</span> */}
                        {/* <span>process.&nbsp;</span> */}
                        {/* <span>Satisfaction&nbsp;</span>
                        <span>guaranteed&nbsp;</span>  */}
                        {/* <span>Before&nbsp;</span>
                        <span>it's&nbsp;</span>
                        <span>too&nbsp;</span>
                        <span>late&nbsp;</span> */}
                    </SubTitle>
                    <SplashButtonStack>
                        <StandardButton onClick={() => ScrollToLearn()}>Learn More</StandardButton>
                        {/* <SplashButtonBuy>Choose Country</SplashButtonBuy> */}
                    </SplashButtonStack>
                </div>
                : 
                <div>
                    <MainTitle className='animateMain'>
                            <span>Ready&nbsp;</span>
                            <span>to&nbsp;</span>
                            <span>move&nbsp;</span>
                            <span>to&nbsp;</span>
                            <span>a&nbsp;</span>
                            <span>new&nbsp;</span>
                            <span>country&nbsp;?&nbsp;</span>
                            {/* <span>to&nbsp;</span>
                            <span>a&nbsp;</span>
                            <span>new&nbsp;</span>
                            <span>country&nbsp;</span> */}
                        </MainTitle>
                        <SubTitle className='animateSubtitle'>
                            {/* <span>The&nbsp;</span>
                            <span>process&nbsp;</span>
                            <span>may&nbsp;</span>
                            <span>be&nbsp;</span>
                            <span>intimidating</span><br /> */}
                            <span>Get&nbsp;</span>
                            <span>the&nbsp;</span>
                            <span>best&nbsp;</span>
                            <span>possible&nbsp;</span>
                            <span>advice.&nbsp;</span>
                            <span>Choose&nbsp;</span>
                            <span>a&nbsp;</span>
                            <span>country&nbsp;</span>
                            <span>and&nbsp;</span>
                            <span>get&nbsp;</span>
                            <span>started.&nbsp;</span>
                            {/* <span>with&nbsp;</span> */}
                            {/* <span>my&nbsp;</span> */}
                            <span>Help&nbsp;</span>
                            <span>every&nbsp;</span>
                            <span>step&nbsp;</span>
                            <span>of&nbsp;</span>
                            <span>the&nbsp;</span>
                            <span>way.&nbsp;</span>
                            <span>Visa&nbsp;</span>
                            <span>guaranteed.</span>
                            {/* <span>money&nbsp;</span>
                            <span>back</span> */}
                            {/* <span>residency&nbsp;</span>
                            <span>visa&nbsp;</span>
                            <span>guaranteed.&nbsp;</span> */}
                            {/* <span>process.&nbsp;</span> */}
                            {/* <span>Satisfaction&nbsp;</span>
                            <span>guaranteed&nbsp;</span>  */}
                            {/* <span>Before&nbsp;</span>
                            <span>it's&nbsp;</span>
                            <span>too&nbsp;</span>
                            <span>late&nbsp;</span> */}
                        </SubTitle>
                        <SplashButtonStack className='animateButton'>
                            <StandardButton onClick={() => ScrollToLearn()}>Learn More</StandardButton>
                            {/* <SplashButtonBuy>Choose Country</SplashButtonBuy> */}
                        </SplashButtonStack>
                </div>
                }
                        
                    </ContentTitleContainer>
                </ContentInsideContainer>
            </ContentOutsideContainer>

            <CallToAction>
            <Calendly>
                <CallToActionPrimary className='glimmer'>
                    {/* Obtain Residence Visas, Protect Your Wealth, Relocate Your Family... */}
                    Obtain Residence Visas - Protect Your Wealth - Relocate Your Family
                </CallToActionPrimary>
                <CallToActionSecondary>
                    Schedule a Free Consultation
                </CallToActionSecondary>
            </Calendly>
                
            </CallToAction>
        </OuterWrapper>
    );
  }
  
  export default Landing;