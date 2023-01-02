import Link from 'next/link';
import styled from 'styled-components'

const ImageContainer = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 18px;
`;

const Image = styled.section`
    background-image: url("/assets/images/logo.png");
    background-position: center !important;
    background-repeat: no-repeat !important;
    background-size: cover !important;
    width: 400px;
    height: 34px;
`;

const Richard = styled.h1`
  font-family: 'Baskerville-Serial';
  color: white;
  font-size: 42px;
  font-weight: 100;
  margin: 0;
  padding: 1px; 
  letter-spacing: 1px;
  cursor: pointer;
  margin-left: 18px;
  text-shadow: 2px 2px 8px rgba(50,50,50,0.2);
`;


const Flex = styled.section`
    display: flex;
    flex: 1;
`

function Logo() {

  return (
    <Flex>
      <Link href="/#" passHref>
        <Richard className='glimmer'>Richard Broadwell</Richard>
      </Link>
    </Flex>
    
  );
}

export default Logo;