import * as React from "react";
import styled from 'styled-components'
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import { FcPaid } from "react-icons/fc";
import { RiShoppingCartLine } from "react-icons/ri";
import { GrCreditCard } from "react-icons/gr";

const Button = styled.a`
background-color: #FFF;
color: black; 
text-decoration: none;
text-transform: uppercase;
padding: 7px 50px;
margin-top: 30px;
font-family: 'Ubuntu-Bold';
font-size: 35px;
font-weight: 900;
cursor: pointer;
// border-radius: 5px;
border: 5px solid #000;
transition: background-color 0.3s cubic-bezier(0.25, 0.1, 0.25, 1), color 0.3s cubic-bezier(0.25, 0.1, 0.25, 1), border 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);

&:hover {
background-color: black;
color: white;
//   box-shadow: 0px 0px 20px 5px rgba(0,0,0,0.3);
}
`;

function RightArrow( color ) {
    return (
        <FaArrowRight style={{
            height: '28px',
            width: '28px',
            marginLeft: '20px',
            marginRight: '-10px',
        }} />
    )
}


class PackageButton extends React.Component {
    render() {
        return (
        //   <Link href={this.props.href} passHref>
            <Button>
              
              {this.props.children}
              <RightArrow />
  
            </Button>
        //   </Link>
        );
    }
  }
  
export default PackageButton;