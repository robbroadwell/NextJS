import * as React from "react";
import styled from 'styled-components'

const ButtonInverted = styled.button`
    // margin: 0 15px;
    // width: 200px;
    background-color: black;
    color: #ffe9c4;
    
    border: 5px solid #ffe9c4;
    font-family: 'Ubuntu-Bold';
    font-size: 30px;
    font-weight: 900;
    letter-spacing: -2px;
    text-transform: uppercase;
    padding: 10px 30px;
    transition: box-shadow 0.3s cubic-bezier(0.25, 0.1, 0.25, 1), color 0.3s cubic-bezier(0.25, 0.1, 0.25, 1), background 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
    cursor: pointer;

  &:hover {
    border: 5px solid white;
    background-color: white;
    color: black;
    box-shadow: 5px 5px 40px 5px rgba(0,0,0,0.7)
  }
`;

export default ButtonInverted;