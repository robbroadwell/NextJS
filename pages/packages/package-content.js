import styled from 'styled-components'
import Checkmark from '../../components/checkmark';
import Info from '../../components/info';

const PackageContentInner = styled.section`
  display: flex;
  flex-direction: column;
  width: 550px;
  margin: 0 10px;
`;

const PackageTitle = styled.h1`
  font-family: 'Ubuntu-Bold';
  font-size: 65px;
  font-weight: 900;
  letter-spacing: -2px;
  line-height: 60px;
  margin: 0;
  color: black;
  text-transform: uppercase;
`;

const PackageSubtitle = styled.h2`
  margin: 15px 0 10px 0;
  font-family: 'Ubuntu-Regular';
  font-size: 24px;
  letter-spacing: 0px;
  line-height: 28px;
  color: rgb(30, 46, 57);
`;

const PackageDetailsOuterWrapper = styled.section`
  margin-top: 13px;
`;

const PackageDetailsWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const PackageDetailsTitle = styled.h3`
  flex: 1;
  font-family: 'Ubuntu-Regular';
  font-size: 22px;
  font-weight: 900;
  letter-spacing: 0px;
  line-height: 28px;
  margin: 0 0 5px 0;
`;

const PackageDetailsRequirements = styled.h3`
  flex: 1;
  font-family: 'Ubuntu-Regular';
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0px;
  line-height: 28px;
  margin: 0;
`

const PackageDetailsPrice = styled.h3`
font-family: 'Ubuntu-Bold';
font-size: 65px;
font-weight: 900;
letter-spacing: -2px;
line-height: 60px;
margin: 5px 0;
color: black;
text-transform: uppercase;
flex: 1;
`;

const CheckmarkOuterWrapper = styled.section`
  margin: 5px 0 10px 0;
`;

const CheckmarkContent = styled.p`
  font-family: 'Ubuntu-Regular';
  color: rgb(20, 36, 47);
  font-size: 18px;
  letter-spacing: 0px;
  line-height: 23px;
  margin: 8px 0;
`;

const PackageCTA = styled.a`
  background-color: #EBC280;
  // border: 7px solid #000;
  color: black;
  text-decoration: none;
  font-weight: 900;
  text-transform: uppercase;
  text-align: center;
  padding: 10px 80px;
  font-size: 36px;
  // border-radius: 5px;
  display: none;
  margin-top: 30px;
  transition: box-shadow 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);

  &:hover {
    box-shadow: 0px 0px 20px 5px rgba(0,0,0,0.3);
  }
`;

function PackageCheckmark({ content }) {
  return (
    <Checkmark>
      <CheckmarkContent>{content}</CheckmarkContent>
    </Checkmark>
  );
}

function PackageContent({ title, subtitle, first, second, third, forth, price, requirements }) {

  return (
    <PackageContentInner>
        <PackageTitle>{title}</PackageTitle>
        <PackageSubtitle>
        {subtitle}
        </PackageSubtitle>
        
        <CheckmarkOuterWrapper>
          <PackageCheckmark content={first} />
          <PackageCheckmark content={second} />
          <PackageCheckmark content={third} />
          <PackageCheckmark content={forth} />
        </CheckmarkOuterWrapper>

        <PackageDetailsOuterWrapper>
        <PackageDetailsWrapper>
            <PackageDetailsTitle>Price:</PackageDetailsTitle>
            <PackageDetailsTitle>Paths to Residency:</PackageDetailsTitle>
        </PackageDetailsWrapper>
        <PackageDetailsWrapper>
            <PackageDetailsPrice>{price}</PackageDetailsPrice>
            <PackageDetailsRequirements>
              <Info description="More than $2,500 monthly from a pension or social security.">Retirement</Info>
              <Info description="Purchasing a property with more than $200,000 in cash.">Real Estate Investment</Info>
              <Info description="A plausible business plan and $30,000 in startup capital.">Entrepeneurship</Info>
            </PackageDetailsRequirements>
        </PackageDetailsWrapper>
        </PackageDetailsOuterWrapper>

        <PackageCTA href="#">PURCHASE NOW</PackageCTA>
    </PackageContentInner>
  );
}

export default PackageContent;