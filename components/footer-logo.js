import styled from 'styled-components'

const Richard = styled.h1`
  font-family: 'Baskerville-Serial';
  color: white;
  font-size: 32px;
  opacity: 0.8;
  font-weight: 100;
  margin: 0;
  padding: 1px; 
  letter-spacing: 1px;
  text-shadow: 2px 2px 8px rgba(50,50,50,0.2);
`;

function Logo() {

  return (
    <Richard className='glimmer'>Richard Broadwell</Richard>
  );
}

export default Logo;