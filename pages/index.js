import * as React from "react";
import styled from 'styled-components'
import Head from 'next/head'

import Landing from './home/landing';
import Footer from '../components/footer';
import Header from '../components/header';
import AboutFooter from './learn/destinations-footer';
import AboutContent from "./learn/about-content";
import Notch from "../components/notch";
import Loader from "../components/loader";
import {useRouter} from 'next/router';
import PackageItem from './packages/package-item';
import PackageItemInverted from './packages/package-item-inverted';

const Wrapper = styled.section`
    
`;

const WhiteWrapper = styled.section`
  background-color: white;
  height: 750px;
  flex: 1;
  display: flex;
  box-shadow: 5px 5px 20px 5px rgba(0,0,0,0.2);
`;

const OffWhiteWrapper = styled.section`
  background-color: #FEFEFE;
  height: 750px;
  flex: 1;
  display: flex;
  box-shadow: 5px 5px 20px 5px rgba(0,0,0,0.2);
`;

class Home extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      isLoadingFinished: props.router.asPath.includes("#"),
      isDOMmounted: props.router.asPath.includes("#"),
      isRemoveLoaderFromDOM: props.router.asPath.includes("#")
    };
  }

  componentDidMount() {
    setTimeout(function() {
      this.setState({ isDOMmounted: true })
    }.bind(this), 200)
    setTimeout(function() {
        this.setState({ isLoadingFinished: true })
    }.bind(this), 2500)
    setTimeout(function() {
      this.setState({ isRemoveLoaderFromDOM: true })
    }.bind(this), 3000)
  }
  
  render() {
    console.log(this.state.isDOMmounted)
    return (
      <Wrapper id="app-root">
        <Head>
          <title>Richard Broadwell, Executive Expatriation Consultant</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>

        { this.state.isDOMmounted ? 
        <div>
        <Header />
        <Landing />
        <Notch />

        <OffWhiteWrapper>
          <PackageItem 
            title={"Slovenia"}
            subtitle={"Known for its mountains, lakes, and ski resorts, Slovenia is an outdoor lovers paradise."}
            first={"A small population and geographic area, with stable democracy, high-quality education and infrastructure."}
            second={"Completely self-sufficient in high quality food, and plentiful domestic sources of fresh water."}
            third={"The people are friendly, welcoming to foreigners, and speak English extremely well."}
            forth={"Various micro-climates within a small geographic area: mediterrean, sub-tropical humid, or alpine."}
            price={"$9997"}
            requirements={"An additional $30,000 to start a company."}
            imageURL={"/assets/images/slovenia.png"}
            videoID={"koHbfzwLGC8"}
            imageDescription={"Lake Bled"}
          />
        </OffWhiteWrapper>
      
        <WhiteWrapper>
          <PackageItemInverted
            title={"Latvia"}
            subtitle={"At the crossroads of Nordic and Slavic, the small nation of Latvia is comfortable and welcoming."}
            first={"Fascinating and beautiful capital city of Riga."}
            second={"Surpisingly delicious, meat-and-potatoes cuisine, with plentiful high quality and locally-sourced food."}
            third={"The government is well-managed and efficient, with low debt (37% of GDP) and highly developed infrastructure."}
            forth={"Friendly and welcoming people."}
            price={"$9997"}
            requirements={"An additional $30,000 to start a company."}
            imageURL={"/assets/images/riga-latvia.png"}
            videoID={"CjLTzAYD3GA"}
            imageDescription={"Riga"}
          />
        </WhiteWrapper>
      
        <OffWhiteWrapper>
          <PackageItem 
            title={"Malta"}
            subtitle={"Small island nation in the Mediterrean with a fascinating history and 300 days of sunshine."}
            first={"Former British colony with English as an official language."}
            second={"Low taxes - no capital gains or inheritance tax, only taxed on income for money remitted to a bank account in Malta."}
            third={"The Maltese Riviera is the pearl of the south Mediterrean, with clear blue seas, sailing, diving, and beautiful beaches."}
            forth={"Valleta, the capital, was built by the Knights Templar, and remains one of the most intriguing historical destinations."}
            price={"$9997"}
            requirements={"An additional $30,000 to start a company."}
            imageURL={"/assets/images/malta.png"}
            videoID={"StM4cUkK6HI"}
            imageDescription={"Valleta"}
          />
        </OffWhiteWrapper>

        <WhiteWrapper>
          <PackageItemInverted
            title={"Latvia"}
            subtitle={"At the crossroads of Nordic and Slavic, the small nation of Latvia is comfortable and welcoming."}
            first={"Fascinating and beautiful capital city of Riga."}
            second={"Surpisingly delicious, meat-and-potatoes cuisine, with plentiful high quality and locally-sourced food."}
            third={"The government is well-managed and efficient, with low debt (37% of GDP) and highly developed infrastructure."}
            forth={"Friendly and welcoming people."}
            price={"$9997"}
            requirements={"An additional $30,000 to start a company."}
            imageURL={"/assets/images/riga-latvia.png"}
            videoID={"CjLTzAYD3GA"}
            imageDescription={"Riga"}
          />
        </WhiteWrapper>
      
        <OffWhiteWrapper>
          <PackageItem 
            title={"Malta"}
            subtitle={"Small island nation in the Mediterrean with a fascinating history and 300 days of sunshine."}
            first={"Former British colony with English as an official language."}
            second={"Low taxes - no capital gains or inheritance tax, only taxed on income for money remitted to a bank account in Malta."}
            third={"The Maltese Riviera is the pearl of the south Mediterrean, with clear blue seas, sailing, diving, and beautiful beaches."}
            forth={"Valleta, the capital, was built by the Knights Templar, and remains one of the most intriguing historical destinations."}
            price={"$9997"}
            requirements={"An additional $30,000 to start a company."}
            imageURL={"/assets/images/malta.png"}
            videoID={"StM4cUkK6HI"}
            imageDescription={"Valleta"}
          />
        </OffWhiteWrapper>

        <WhiteWrapper>
          <PackageItemInverted
            title={"Latvia"}
            subtitle={"At the crossroads of Nordic and Slavic, the small nation of Latvia is comfortable and welcoming."}
            first={"Fascinating and beautiful capital city of Riga."}
            second={"Surpisingly delicious, meat-and-potatoes cuisine, with plentiful high quality and locally-sourced food."}
            third={"The government is well-managed and efficient, with low debt (37% of GDP) and highly developed infrastructure."}
            forth={"Friendly and welcoming people."}
            price={"$9997"}
            requirements={"An additional $30,000 to start a company."}
            imageURL={"/assets/images/riga-latvia.png"}
            videoID={"CjLTzAYD3GA"}
            imageDescription={"Riga"}
          />
        </WhiteWrapper>
      
        <OffWhiteWrapper>
          <PackageItem 
            title={"Malta"}
            subtitle={"Small island nation in the Mediterrean with a fascinating history and 300 days of sunshine."}
            first={"Former British colony with English as an official language."}
            second={"Low taxes - no capital gains or inheritance tax, only taxed on income for money remitted to a bank account in Malta."}
            third={"The Maltese Riviera is the pearl of the south Mediterrean, with clear blue seas, sailing, diving, and beautiful beaches."}
            forth={"Valleta, the capital, was built by the Knights Templar, and remains one of the most intriguing historical destinations."}
            price={"$9997"}
            requirements={"An additional $30,000 to start a company."}
            imageURL={"/assets/images/malta.png"}
            videoID={"StM4cUkK6HI"}
            imageDescription={"Valleta"}
          />
        </OffWhiteWrapper>

        <WhiteWrapper>
          <PackageItemInverted
            title={"Latvia"}
            subtitle={"At the crossroads of Nordic and Slavic, the small nation of Latvia is comfortable and welcoming."}
            first={"Fascinating and beautiful capital city of Riga."}
            second={"Surpisingly delicious, meat-and-potatoes cuisine, with plentiful high quality and locally-sourced food."}
            third={"The government is well-managed and efficient, with low debt (37% of GDP) and highly developed infrastructure."}
            forth={"Friendly and welcoming people."}
            price={"$9997"}
            requirements={"An additional $30,000 to start a company."}
            imageURL={"/assets/images/riga-latvia.png"}
            videoID={"CjLTzAYD3GA"}
            imageDescription={"Riga"}
          />
        </WhiteWrapper>
      
        <OffWhiteWrapper>
          <PackageItem 
            title={"Malta"}
            subtitle={"Small island nation in the Mediterrean with a fascinating history and 300 days of sunshine."}
            first={"Former British colony with English as an official language."}
            second={"Low taxes - no capital gains or inheritance tax, only taxed on income for money remitted to a bank account in Malta."}
            third={"The Maltese Riviera is the pearl of the south Mediterrean, with clear blue seas, sailing, diving, and beautiful beaches."}
            forth={"Valleta, the capital, was built by the Knights Templar, and remains one of the most intriguing historical destinations."}
            price={"$9997"}
            requirements={"An additional $30,000 to start a company."}
            imageURL={"/assets/images/malta.png"}
            videoID={"StM4cUkK6HI"}
            imageDescription={"Valleta"}
          />
        </OffWhiteWrapper>
          
        {/* <AboutContent />  */}
        <AboutFooter footer={true} expandAbout={() => this.expandAbout()} />
        <Footer />
        </div> : null}
        
        <Loader isLoadingFinished={this.state.isLoadingFinished} isRemoveLoaderFromDOM={this.state.isRemoveLoaderFromDOM} />
      </Wrapper>
    );
  }
}

const HomeWithRouter = (props) => {
  const router = useRouter()
  return <Home {...props} router={router} />
}

export default HomeWithRouter;