import styled from 'styled-components'
import Head from 'next/head'
import Footer from '../../components/footer';
import Header from '../../components/header';
import "animate.css/animate.min.css";
import CTA from '../learn/cta';

import One from './content/one';
import Two from './content/two';
import Three from './content/three';
import Four from './content/four';
import Five from './content/five';
import Six from './content/six';

const Wrapper = styled.section`
  background-color: white;
  padding-top: 80px;
`;

const Pad = styled.section`
  height: 0px;
`;

const FitWrapper = styled.div`
  margin: 0 10px;
  margin-top: -5px;
`;

function Blog() {
  return (
    <Wrapper id="app-root">
      <Head>
        <title>Library</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

        <FitWrapper>
          <One />
          <Three />
          <Five />
          <Six />
          <Two />
          <Four />
        </FitWrapper>

        {/* <BlogPost title={"Basic Skills for Living a New Life Abroad"} />
        <Border />
        <BlogPost title={"Overview of the Expatriation Process"} />
        <Border />
        <BlogPost title={"Paying Taxes: Guide for the American Expat"} />
        <Border />
        <BlogPost title={"Working for an American Company from Abroad"} />
        <Border />
        <BlogPost title={"Intermediate Skills for Living a New Life Abroad"} />
        <Border />
        <BlogPost title={"Tools for Navigating in Foreign Countries"} />
        <Border />
        <BlogPost title={"The Looming Debt Crisis in the United States"} />
        <Border />
        <BlogPost title={"Purchasing a Car in a Foreign Country"} />
        <Border />
        <BlogPost title={"Speaking Without Knowing the Local Language"} />
        <Border />
        <BlogPost title={"Safety Considerations for Europe vs. USA"} />
        <Border />
        <BlogPost title={"Health Insurance For Living Abroad"} />
        <Border />
        <BlogPost title={"Historical Precedence of Capital Controls in Crisis"} />
        <Border />
        <BlogPost title={"Purchasing Real Estate in a Foreign Country"} />
        <Border />
        <BlogPost title={"Overseas Bank Accounts, Credit Cards, and Cash"} />
        <Border />
        <BlogPost title={"Purchasing a Boat in a Foreign Country"} />
        <Border />
        <BlogPost title={"Investing in Gold in a Foreign Country"} />
        <Border />
        <BlogPost title={"Investing in Stocks with a Foreign Brokerage"} /> */}
      
      <Pad />
      <CTA />
      <Header />
      <Footer />
    </Wrapper>
  );
}

export default Blog;
