import styled from 'styled-components';
import * as React from "react";
import Link from 'next/link';
import { FiExternalLink } from "react-icons/fi";

const InfoWrapper = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Spacer = styled.section`
  flex: 1;
`;

const InfoContentWrapper = styled.a`
  color: ${props => props.selected ? "#0b6dd0" : "rgb(20, 36, 47)"};
  display: flex;
  flex-diection: row;
  justify-content: center;
  align-items: center;
  letter-spacing: 0px;
  ${props => props.extraMargin ? "margin: 2px 0" : "margin: 0"};
  // transition: color .15s ease-in-out;
  font-size: 18px;
  cursor: default;
  ${props => props.href ? "cursor: pointer;" : "cursor: default;"}

  &:hover {
    color: #0b6dd0;
    // ${props => props.href ? "text-decoration: underline;" : "text-decoration: none;"}
  }
`;

const Popover = styled.div`
  ${InfoContentWrapper}:hover & {
    opacity: 1;
  }
`;

const LightCheck = styled.section`
  background-image: url("/assets/images/check-light.svg");
  background-size: contain !important;
  background-position: center !important;
  background-repeat: no-repeat !important;
  width: 11px;
  height: 11px;
  margin: 0 10px 0 5px;
`;

const style= {
  color: '#333', 
  margin: '0 0 0 5px', 
  // padding: 'px 0 0 0', 
  height: '10px',
  width: '10px'
}

class InfoNoPop extends React.Component {
  render() {
    console.log(this.props.href)
    return (
        <InfoWrapper>
          <Link href={this.props.href} passHref>
            <InfoContentWrapper onClick={this.navLink} onMouseEnter={() => this.props.setSelected(this.props.index)} selected={this.props.selected} extraMargin={this.props.extraMargin}>
              <LightCheck />
              {this.props.children}
              {/* {this.props.link ? <FiExternalLink style={style} /> : <div></div>} */}
            </InfoContentWrapper>
          </Link>
          <Spacer />
        </InfoWrapper>
      );
  }
}


export default InfoNoPop;