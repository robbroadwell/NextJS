import * as React from "react";
import styled from 'styled-components'

const BorderWrapper = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20px;
`;

const BorderLine = styled.section`
    width: 0;
    height: 1px;
    background-color: grey;
    opacity: 20%;
    z-index: 1;
`;

class Border extends React.Component {
    render() {
        return (
            <BorderWrapper>
                <BorderLine>
                    
                </BorderLine>
            </BorderWrapper>
        );
    }
  }
  
  export default Border;
  