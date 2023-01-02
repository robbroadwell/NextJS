import styled from 'styled-components'
import YouTube from 'react-youtube';
import * as React from "react";
import PackageButton from '../../components/button-package';

const PackageImageInnerContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 10px;
`;

const PackageImageSection = styled.section`
  display: flex;
  background-image: url(${props => props.imageURL});
  height: 350px;
  width: 550px;
  background-color: black;
  cursor: pointer;
  transition: box-shadow 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);

  &:hover {
    box-shadow: 0px 0px 20px 5px rgba(0,0,0,0.6);
  } 
`;

const PackageImageSectionInner = styled.section`
  flex: 1;
  background-image: url("/assets/images/youtube-play.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 70px 50px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  &:hover {
    background-image: url("/assets/images/youtube-play-inverted.png");
  }
`;

const PackageImageDescription = styled.h3`
  font-family: 'Ubuntu-Regular';
  font-size: 19px;
  color: white;
  margin-right: 20px;
`;

const PackageGuarantee = styled.p`
  font-family: 'Ubuntu-Bold';
  color: rgb(20, 36, 47);
  font-size: 18px;
  font-weight: 300;
  letter-spacing: 0px;
  line-height: 22px;
  text-align: center;
  margin: 10px 0;
  text-transform: uppercase;
`;

class PackageImage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      videoPlaying: false,
      paused: false,
    };
  }

  onPlayerStateChange = (event) => {
    console.log(event.data);
    var paused = event.data == 2
    console.log(paused);
    this.setState({
      paused: paused
    })

    setTimeout(function() {
      console.log(this.state)
      if (this.state.paused) {
        this.click();
      }
    }.bind(this), 500);
  }

  clickSection = () => {
    console.log(this.state.videoPlaying)
    if (this.state.videoPlaying == false) {
      this.click();
    }
  }

  click = () => {
    this.setState((prevState, props) => ({
      videoPlaying: !prevState.videoPlaying
    }));
  }

  render() {
    const opts = {
      height: '350px',
      width: '530px',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        controls: 1,
        cc_load_policy: 1,
        rel: 0,
      },
    };

    return (  
      <PackageImageInnerContainer>
          <PackageImageSection imageURL={this.props.imageURL} onClick={this.clickSection}>
            
            {this.state.videoPlaying ? 
            <YouTube className='fill' containerClassName='fill-border' videoId={this.props.videoID} opts={opts} onStateChange={state => this.onPlayerStateChange(state)} onEnd={this.click} /> : 
            <PackageImageSectionInner>
              <PackageImageDescription>{this.props.description}</PackageImageDescription>
            </PackageImageSectionInner>
            }
          </PackageImageSection>
          <PackageButton href="#">PURCHASE NOW</PackageButton>
          <PackageGuarantee>100% satisfaction guaranteed <br /> Residency visa or your money back</PackageGuarantee>
      </PackageImageInnerContainer>
    );
  };

}

export default PackageImage;