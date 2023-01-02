import styled from 'styled-components';

var Scroll   = require('react-scroll');
var Element  = Scroll.Element;
var scroller = Scroll.scroller;

const NotchWrapper = styled.section`
    height: 75px;
    margin-top: -25px;
    display: flex;
    justify-content: center;
    z-index: 5;
    background-color: white;
    margin-bottom: -50px;
`;


const NotchImage = styled.button`
    width: 180px;
    height: 50px;
    background-image: url("/assets/images/arrow-vector.svg");
    background-position: top !important;
    background-repeat: no-repeat !important;
    background-size: contain !important;
    padding-top: 15px;
    z-index: 50;
    cursor: pointer;
    border: none;
    background-color: rgb(0,0,0,0);
`;

function ScrollToLearn() {
  scroller.scrollTo('history-rhymes', {
      duration: 800,
      smooth: true,
      offset: -125
  })
}

function Notch() {
  return (
    <NotchWrapper>
      <NotchImage onClick={() => ScrollToLearn()} />
    </NotchWrapper>
  );
}

export default Notch;