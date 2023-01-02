import * as React from "react";
import styled from 'styled-components'

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    background-color: white;
`;

class Blog extends React.Component {
    render() {
        return (
            <Wrapper>
                {this.props.children}
            </Wrapper>
        );
    }
  }
  
  export default Blog;
  