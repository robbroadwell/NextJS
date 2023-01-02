import styled from 'styled-components'
import PackageContent from './package-content';
import PackageImage from './package-image';

const Wrapper = styled.section`
  flex: 1;  
  display: flex;
  flex-direction: row;
`;

const PackageContentOuterContainer = styled.section`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const PackageImageOuterContainer = styled.section`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  margin: 0 20px;
`;

function PackageItem({ title, subtitle, first, second, third, forth, price, requirements, imageURL, videoID, imageDescription }) {

  return (
      <Wrapper>
        <PackageContentOuterContainer>
          <PackageContent 
            title={title}
            subtitle={subtitle}
            first={first}
            second={second}
            third={third}
            forth={forth}
            price={price}
            requirements={requirements}
          />
        </PackageContentOuterContainer>
        
        <PackageImageOuterContainer>
          <PackageImage imageURL={imageURL} videoID={videoID} description={imageDescription} />
        </PackageImageOuterContainer>
      </Wrapper>
  );
}

export default PackageItem;

