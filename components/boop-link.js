import React, { useState } from 'react';
import { animated } from 'react-spring';
import styled from 'styled-components'
import useBoop from "./boop-hook";
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

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

function BoopLink({ title, icon, href, onClick }) {
  const [style, trigger] = useBoop({ rotation: 8 });

  return (
    <Wrapper>
      <NavigationItem onMouseEnter={trigger} href={href}>
        <animated.span style={style}>
          { icon }
        </animated.span>
        { title }
      </NavigationItem>
    </Wrapper>
  );
}

export default BoopLink;