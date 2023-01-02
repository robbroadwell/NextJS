import "animate.css/animate.min.css";
import Image from "next/image";
import * as React from "react";
import styled from 'styled-components';
import AboutVideo from './video';

var Scroll   = require('react-scroll');
var Element  = Scroll.Element;

const Pad = styled.section`
  height: 20px;
  background-color: white;
`;

const AboutSection = styled.section`
  padding: 30px 20px;
  background-color: white;
`;

const AboutSectionTitle = styled.h1`
font-family: 'Ubuntu-Light';
font-size: 47px;
line-height: 51px;
text-align: center;
letter-spacing: -1px;
margin: 0 0 40px 0;
`;

const AboutSectionContentWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const VideoWrapper = styled.section`
  display: flex;
  height: 500px;
  width: 900px;
  margin: 50px 0 10px 0;
`;

const ImageWrapper = styled.section`
  height: 500px;
  width: 900px;
  margin: 50px 0 10px 0;
`;

const ImageInnerContainer = styled.div`
`;

const AboutSectionContent = styled.p`
font-family: 'Montserrat';
font-size: 26px;
font-weight: 400;
margin: 10px 20px 10px 40px;
max-width: 950px;
line-height: 34px;
-webkit-letter-spacing: -1px;
-moz-letter-spacing: -1px;
-ms-letter-spacing: -1px;
letter-spacing: -1px;
  color: rgb(20, 36, 47);
`;

const RoundNumber = styled.div`
font-family: 'Ubuntu-Bold'; 
  background: #000 none repeat scroll 0 0;
  border-radius: 50%;
  border: 3px solid #ffe9c4;
  color: #fff;
  font-size: 28px;
  font-weight: 900;
  height: 50px;
  line-height: 1.5;
  margin: 0 auto 15px;
  text-align: center;
  width: 50px;
  padding-left: 1px;
  box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.2); 
`

function AboutContent() {
  return (
    <div>
      <Element name="history-rhymes"></Element>
      <AboutSection>
        
        <RoundNumber>1</RoundNumber>
        <AboutSectionTitle>History rhymes.</AboutSectionTitle>

        <AboutSectionContentWrapper>
          <AboutSectionContent>
            Intensifying wealth gaps, social tension and political division.
            The rise of Populist idealogy across the world.
            Questions about the legitimacy of elections. 
            Increasing amounts of propaganda, and a widespread distrust of the media.
            <br />
            <br />
            <b>The last time this happened was the 1930s</b>, and resulted in
            revolution in ten major countries, including Spain, Germany, Russia, 
            and the United States. <br />And it happens repeatedly, throughout history,
            <b> for predictable reasons</b>.
          </AboutSectionContent>
          <VideoWrapper style={{ marginTop: "50px" }}>
          <AboutVideo
              imageURL={"/assets/images/economic-machine-cover.jpeg"}
              videoID={"PHe0bXAIuk0"}
              description={""}
            />
          </VideoWrapper>
        </AboutSectionContentWrapper>
      </AboutSection>

      <AboutSection>
        <RoundNumber>2</RoundNumber>
        <AboutSectionTitle>Over long periods of time, everyone, <br /> and
            especially governments, <br />get into too much debt.</AboutSectionTitle>

        <AboutSectionContentWrapper>
          <AboutSectionContent>
          <b>The debts across the Western world are too large to ever be paid back, </b>
          so central banks are monitizing those debts by printing money and buying government bonds (another name for this is Quantitative Easing or QE).
          <br />
          <br />
           Normally when the government borrows to fund deficits it sells bonds at auction to people in the real economy. When a real person buys a government bond he trades his cash for an asset (the bond). The lender (the bond holder) has less spending power and the government has more. The net effect is zero. When the government spends that money, it doesn&#39;t create inflation, because the person who bought the bond spends less. <br /><br />
           
          When the central bank monitizes the debt it creates the money out of thin air, no money is being removed from the real economy. No real person is lending the government the money to deficit spend. There is just more money floating around chasing the same amount of goods and services. 
          <br />
          <br />
          It&#39;s simple supply and demand: more demand + the same supply = equals inflation. This gives the government the ability to spend money it doesn&#39;t have without (officially) raising taxes, but inflation is essentially a tax, it allows the government to spend more money by making everything more expensive.
          <br />
          <br />

          This inflation is not new. It started in earnest when Quantitative Easing (QE) began after the 2008 crisis and has accelerated ever since. Inflation reaches assets first, and creates asset bubbles, which everyone is happy about. Stock portfolios go up, real estate appreciates, people feel richer. 

          <ImageWrapper style={{ marginVertical: "25px" }}>
            <ImageInnerContainer>
              <Image
                style={"align-self: center"}
                src="https://cmv.imgix.net/posts/2021-07-14-Other-FedBS-vs-SP500.png"
                alt="Picture of the author"
                width={880}
                height={500}
              />
            </ImageInnerContainer>
        </ImageWrapper>
          <br />
          The positive wealth effect caused by rising asset prices means people make money from owning assets, in addition to their income from working, so they have more money to spend. They can sell assets at higher prices and spend the profits. They can do cash-out refinances of their homes and remove the equity and spend it. They can borrow against their assets and spend it. All of this fuels the economy. 
          <br />
          <br />
          Eventually, very late in the debt cycle, the inflation reaches consumer goods. Everything gets more expensive, from food, to rent, to energy. Inflation cuts into corporate profits, and stocks now seem overpriced when you discount future cash-flows in a high inflation environment. The stock market crashes. Followed by the real estate market. The negative wealth effect of these crashes causes each person to feel poorer, so they spend less, further contracting the economy.
          <br />
          <br />
          Inflation in consumer goods hurts the poor the most because they struggle to put food on the table and pay rent, and they typically haven&#39;t benefited from decades of asset price appreciation because they typically don&#39;t own assets. The middle-class starts to see their standard of living decline because their salaries, fixed-income pensions, and social security don&#39;t keep up with inflation.
          <br />
          <br />
          The government and central bank&#39;s response to the inflation will make the inflation worse. They may try raising taxes on corporations, which reduces capital investment in production, reducing production, and eventually reducing supply. They may try price controls, which would result in shortages, because an artificially low price level will discourage production. They may try to subsidize gas or food, which just means even more money (demand) is chasing the same supply, which will make inflation higher. 
          <br />
          <br />
          The only government response that would reduce inflation has a zero percent likelyhood of happening: drastic spending cuts across all levels of government, raising taxes across the board, but especially the middle class. Why the middle class? They spend their income on consumer goods. The rich invest their income in production and assets. To stop price inflation in consumer goods the people spending money on consumer goods need to have less money. This would be political suicide so will not happen. So the inflation will just get worse.
          <br />
          <br />
          This stage, where we are now, is a very dangerous situation. This is how democracies die. The things that need to happen aren&#39;t politically viable, so they never get done.
          As the middle-class sees their quality-of-life eroding and the poor begin starving <b>the risk of revolution increases dramatically.</b>
          
          </AboutSectionContent>
          <VideoWrapper style={{ marginTop: "50px" }}>
          <AboutVideo
              imageURL={"/assets/images/changing-world-order-cover.jpeg"}
              videoID={"xguam0TKMw8"}
              description={""}
            />
            
          </VideoWrapper>
        </AboutSectionContentWrapper>
      </AboutSection>

      <AboutSection>
        <RoundNumber>3</RoundNumber>
        <AboutSectionTitle>
          A smart rabbit <br />
          has three burrows.
        </AboutSectionTitle>

        <AboutSectionContentWrapper>
          <AboutSectionContent>
          
          The people who lived through the last changing world order in the 1930s and 1940s could never have imagined the peace and prosperity of the last 80 years.
          We all suffer from recency-bias. We believe that tomorrow will look, essentially, like today. These really big events only happen once in a lifetime, so to see the bigger picture you need to look at history.
          <br /><br />
          Peaceful or not, these next decades will be dramatically different than anything we have experienced in our lifetimes. The landscapes of power are shifting. 
          We can&#39;t just assume the strength of the dollar will continue to give America the enormous priviledge of spending more than it produces. We must not bury our heads in the sand and pretend it can&#39;t happen in America.
          <br /><br />

            <b> The best way to protect ourselves is to have options. </b>

          Other countries that will welcome us and our families in case we need a new beginning. Places to safely land if our way of life changes dramatically for the worse. A smart rabbit has three burrows. 
          <br /><br />
          I can guide you through that process.
          </AboutSectionContent>
        </AboutSectionContentWrapper>
      </AboutSection>

      <Pad />
    </div>
  );
}

export default AboutContent;
