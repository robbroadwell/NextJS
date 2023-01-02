
import styled from 'styled-components'
import * as React from "react";

const CheckmarkWrapper = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const CheckmarkImage = styled.section`
  background-image: url("/assets/images/checkmark.png");
  background-size: contain !important;
  background-position: center !important;
  background-repeat: no-repeat !important;
  width: 18px;
  height: 18px;
  margin: 0 15px 0 0;
`;

const CheckmarkContentWrapper = styled.section`
  flex: 1;
`;

class Checkmark extends React.Component {
    render() {
        return (
            <CheckmarkWrapper>
              <CheckmarkImage />
              <CheckmarkContentWrapper>
                {this.props.children}
              </CheckmarkContentWrapper>
            </CheckmarkWrapper>
          );
    }
}


export default Checkmark;