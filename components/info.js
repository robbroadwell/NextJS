import styled from 'styled-components';
import * as React from "react";

const InfoWrapper = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Spacer = styled.section`
  flex: 1;
`;

const InfoContentWrapper = styled.section`
  color: rgb(20, 36, 47);
  display: flex;
  justify-content: center;
  align-items: center;
  ${props => props.extraMargin ? "margin: 2px 0" : "margin: 0"};
  transition: color .15s ease-in-out;
  cursor: pointer;
  font-size: 18px;

  &:hover {
    color: #6772e5;
    // ${Popover} {
    //   opacity: 1;
    // }
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
  margin: 0 10px 0 0;
`;


class Info extends React.Component {

  render() {
    return (
        <InfoWrapper>
          <InfoContentWrapper extraMargin={this.props.extraMargin}>
            <LightCheck />
            {this.props.children}
            <Popover className="popover">
              {this.props.description}
            </Popover>
          </InfoContentWrapper>
          {/* <InfoImage data-tip={this.props.description} /> */}
          {/* <ReactTooltip effect='solid' clickable={true} className='ssr-tooltip' /> */}
          <Spacer />
        </InfoWrapper>
      );
  }
}


export default Info;