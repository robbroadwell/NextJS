import styled from 'styled-components';
import Head from 'next/head';
import * as React from "react";
import Footer from '../../components/footer';
import Header from '../../components/header';
import AboutHero from './about-hero';
import AboutContent from './about-content';
import CTA from './cta';

const Wrapper = styled.section`
    padding-top: 42px;
    background-color: white;
`;

const Pad = styled.div`
  height: 23px;
`

function About() {
  const opts = {
    // height: '100%',
    // width: '900px',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      controls: 1,
      cc_load_policy: 1,
      rel: 0,
    },
  };

  return (
    <Wrapper id="app-root">
      <Head>
        <title>About</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Pad />
      <AboutHero />     
      <AboutContent />
      <CTA />
      
      <Header />
      <Footer />

    </Wrapper>
  );
}

export default About;
