import * as React from "react";
import styled from 'styled-components'
import Link from 'next/link';

const Button = styled.a`
    border: 3px solid #000;
    // margin: 0 15px;
    // width: 280px;
    background-color: black;
    border: 2px solid black;
    color: white;
    font-family: 'Ubuntu-Bold';
    font-size: 26px;
    font-weight: 900;
    letter-spacing: -2px;
    text-transform: uppercase;
    padding: 10px 15px;
    opacity: 0.8;
    transition: opacity 0.3s cubic-bezier(0.25, 0.1, 0.25, 1), color 0.3s cubic-bezier(0.25, 0.1, 0.25, 1), border 0.5s cubic-bezier(0.25, 0.1, 0.25, 1);
    cursor: pointer;

  &:hover {
    // background-color: #ffe9c4;
    color: #ffe9c4;
    opacity: 1;
    border: 2px solid #ffe9c4;
    // box-shadow: 5px 5px 40px 5px rgba(0,0,0,0.7)
  }
`;

class SecondaryButton extends React.Component {
  render() {
      return (
        <Link href={this.props.href} passHref>
          <Button>
            
            {this.props.children}
            {this.props.icon}

          </Button>
        </Link>
      );
  }
}

export default SecondaryButton;