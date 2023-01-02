import * as React from "react";
import styled from 'styled-components'
import Header from "./header";
import Footer from "./footer";

const OuterWrapper = styled.section`
    display: flex;
    justify-content: center;
    background-color: white;
`;

const InnerWrapper = styled.section`
    max-width: 1400px;
`;

class UniversalWrapper extends React.Component {
    render() {
        return (
            <OuterWrapper>
                <InnerWrapper>
                    {this.props.children}
                </InnerWrapper>
            </OuterWrapper>
        );
    }
  }
  
  export default UniversalWrapper;
  