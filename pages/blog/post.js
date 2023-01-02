import styled from 'styled-components'
import AboutVideo from '../learn/video';

const Wrapper = styled.section`
    height: 500px;
    margin: 50px 40px;
    display: flex;
    flex-direction: row;
    z-index: 1000;
`;

const RightContainer = styled.section`
    flex: 1;
    display: flex;
    flex-direction: column;
    margin: 5px 0 0 20px;
    // justify-content: center;
    align-items: center;
`;

const Title = styled.h3`
    font-size: 26px;
    font-family: 'Ubuntu-Regular';
    margin: 8px 0 0 -2px;
    // text-align: center;
`;

const Subtitle = styled.h5`
    font-size: 18px;
    font-family: 'Ubuntu-Light';
    margin: 5px 5px 20px 0;
    letter-spacing: 0px;
    // text-align: center;
`;

const Body = styled.div`
    font-family: 'Ubuntu-Regular';
    font-size: 18px;
    letter-spacing: 1px;
    line-height: 24px;
    margin-top: 5px;
    display: flex;
    flex: 1;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 475px;
  width: 100%;
`

const TitleSubtitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

const IconContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 5px;
  margin-right: 20px;
`

function BlogPost({ icon, title, subtitle, content, videoID, videoCover }) {
    return (
      <Wrapper>
        <AboutVideo imageURL={videoCover} videoID={videoID} description={""} />
        <RightContainer>
          <TitleContainer>
          <IconContainer>{icon}</IconContainer>
          
          <TitleSubtitleContainer>
            <Title>{ title }</Title>
            <Subtitle>{ subtitle }</Subtitle>
          </TitleSubtitleContainer>
          </TitleContainer>
        
        <Body>{content}</Body>
        </RightContainer>
      </Wrapper>
    );
  }
  
  export default BlogPost;
  