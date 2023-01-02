import * as React from "react";
import styled from 'styled-components'

const StandardButton = styled.button`
    // margin: 0 15px;
    // width: 200px;
    background-color: white;
    border: 3px solid black;
    color: black;
    font-family: 'Ubuntu-Bold';
    font-size: 30px;
    font-weight: 900;
    letter-spacing: -2px;
    text-transform: uppercase;
    padding: 10px 30px;
    transition: background-color 0.3s cubic-bezier(0.25, 0.1, 0.25, 1), color 0.3s cubic-bezier(0.25, 0.1, 0.25, 1), border 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
    cursor: pointer;

  &:hover {
    background-color: #000;
    color: white;
    // box-shadow: 5px 5px 40px 5px rgba(0,0,0,0.7)
  }
`;

export default StandardButton;