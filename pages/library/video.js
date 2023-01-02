import styled from 'styled-components'
import YouTube from 'react-youtube';
import * as React from "react";

const PackageImageInnerContainer = styled.section`
 height: calc(100vh - 75px);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: box-shadow 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
  background-color: #555;

  &:hover {
    box-shadow: 0px 0px 20px 5px rgba(0,0,0,0.6);
  } 
`;

const PackageImageSection = styled.section`
  display: flex;
  background-image: url(${props => props.imageURL});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: calc(100vh - 76px);
  width: 100%;
  background-color: black;
  cursor: pointer;
  margin-top: 1px;
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

class LibraryVideo extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      videoPlaying: false,
      paused: false,
    };
  }

  onPlayerStateChange = (event) => {
    var paused = event.data == 2
    this.setState({
      paused: paused
    })

    setTimeout(function() {
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
                test
            </PackageImageSectionInner>
            }
          </PackageImageSection>
      </PackageImageInnerContainer>
    );
  };

}

export default LibraryVideo;