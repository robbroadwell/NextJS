import Link from 'next/link';
import styled from 'styled-components';
import "animate.css/animate.min.css";
import * as React from "react";
import { useParallax } from 'react-scroll-parallax';
import PackageButton from '../../components/button-package';

const OuterWrapperSection = styled.section`
    height: 700px;
    flex: 1;
    display: flex;
    flex-direction: column;
    background-color: gray;
    overflow: hidden !important;
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    position: relative;
    border-top: 5px solid #000;
`;

const OuterWrapperBackground = styled.div`
    overflow: hidden !important;
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    position: relative;
    background-image: url("/assets/images/banner.jpeg");
    background-position: center;
    background-repeat: no-repeat !important;
    background-size: cover !important;
    height: 780px;
    position: absolute;
    left: 0px;
    right: -100px;
    top: 0px;
    bottom: 0px;
`;

function OuterWrapper(props) {
    const { ref } = useParallax({ speed: -5 });

    return (
      <OuterWrapperSection>
          <OuterWrapperBackground ref={ ref } />
          {props.children}
      </OuterWrapperSection>
    )
  }

const ContentOutsideContainer = styled.section`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    width: 54%;
`;

const ContentInsideContainer = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`;

const ContentTitleContainer = styled.section`
    display: flex;
    flex-direction: column;
    width: 670px;
    z-index: 1000;
`;

const MainTitle = styled.h1`
    font-family: 'Ubuntu-Regular';
    font-size: 70px;
    font-weight: 900;
    letter-spacing: -2px;
    line-height: 65px;
    text-transform: uppercase;
    text-align: center;
    margin: 0 5px;
`;

const SubTitle = styled.h1`
    font-family: 'Ubuntu-Regular';
    text-transform: uppercase;
    text-align: center;
    font-size: 30px;
    font-weight: 900;
    letter-spacing: 2px;
    margin: 15px 0;
    line-height: 36px;
`;

const PackageContainerCTA = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

function CTA() {
    return (
        <OuterWrapper>
            <ContentOutsideContainer>
                    <ContentInsideContainer>
                        <ContentTitleContainer>
                            
                            <MainTitle>
                                The best advisors on the planet <span style={{fontSize: '40px', verticalAlign: 'top', marginRight: '-26px', lineHeight: '1'}}>™</span> 
                            </MainTitle>

                            <SubTitle>
                                Gain access to my network of consultants in <span style={{fontFamily: 'Ubuntu-Bold', fontSize: '40px', fontWeight: 900, verticalAlign: 'bottom'}}>14</span> countries
                            </SubTitle>
                            
                            <Link href="/packages" passHref>
                                <PackageContainerCTA>
                                    <PackageButton>Packages from $9799</PackageButton>
                                </PackageContainerCTA> 
                            </Link>
                            
                        </ContentTitleContainer>
                    </ContentInsideContainer>
            </ContentOutsideContainer>
                                
        </OuterWrapper>
    );
  }
  
  export default CTA;