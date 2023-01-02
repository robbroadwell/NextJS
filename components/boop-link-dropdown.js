import React, { useState } from 'react';
import { animated } from 'react-spring';
import styled from 'styled-components'
import useBoop from "./boop-hook";
import { FaChevronDown, FaCaretUp } from 'react-icons/fa';

const Wrapper = styled.div`
  overflow: visible;
  height: 100%;
  flex: 1;
  transition: opacity 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
`

const NavigationItem = styled.a`
    height: 100%;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Ubuntu-Regular';
    font-size: 17px;
    font-weight: 300;
    letter-spacing: 2px;
    color: #ffe9c4;
    padding: 0px 12px;
    margin: 0 2px;
    // opacity: 0.6;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
    transition: color 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);

    &:hover {
      // color: white;
    }
`;

const Popover = styled.div`
  box-shadow: 0px 0px 10px 5px rgba(0,0,0,0.1);
  padding: 10px;
  opacity: 0;
  position: absolute;
  width: 500px;
  height: 400px;
  background-color: white;
  border-radius: 5px;
  transform-style: preserve-3d;
  transform: translate3d(0px, 15px, 0px) scale3d(0.9, 0.9, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  -webkit-transition: 0.3s ease-in-out;
  -moz-transition: 0.3s ease-in-out;
  -o-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
  pointer-events: none;

  ${Wrapper}:hover & {
    opacity: 1;
    pointer-events: auto;
    -webkit-transform: translate(3em,0);
    -moz-transform: translate(3em,0);
    -o-transform: translate(3em,0);
    -ms-transform: translate(3em,0);
    transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  }
`;

const Chevron = styled.div`
  transform-style: preserve-3d;
  -webkit-transition: 0.3s ease-in-out;
  -moz-transition: 0.3s ease-in-out;
  -o-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
  transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(${props => !props.isHovered || props.hoverOverride ? 180 : 0}deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
`

const chev = {
  color: '#ffe9c4', 
  margin: '0 0 0 4px', 
  padding: '3px 0 0 0', 
  height: '15px',
  width: '15px',
  opacity: 1
}

function BoopLink({ title, icon, href, onClick, dropdown }) {
  const [style, trigger] = useBoop({ rotation: 8 });
  const [isHovered, setIsHovered] = useState(false);
  const [hoverOverride, setHoverOverride] = useState(false);

  const clear = () => {
    setHoverOverride(false);
    setIsHovered(false);
  }


  return (
    <Wrapper onMouseLeave={() => clear()}>
      <NavigationItem onMouseEnter={() => setIsHovered(true)} onClick={() => setHoverOverride(!hoverOverride)}>
        <animated.span style={style}>
          { icon }
        </animated.span>
        { title }
        <Chevron isHovered={isHovered} hoverOverride={hoverOverride}>
          <FaChevronDown style={chev} />
        </Chevron>
        {/* {hoverOverride ? <FaCaretUp style={chev} /> : <FaCaretDown style={chev} />} */}
      </NavigationItem>
      {!hoverOverride ? 
        <Popover>
          {dropdown}
        </Popover>
        : <div></div>
      }
    </Wrapper>
  );
}

export default BoopLink;