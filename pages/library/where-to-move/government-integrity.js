import md from './koppen-climate-zones.md';
import Markdown from 'markdown-to-jsx';

import styled from 'styled-components';
import Head from 'next/head';
import * as React from "react";
import Header from '../../../components/header';
import Menu from '../menu';

const Wrapper = styled.section`
  background-color: white;
  padding-top: 75px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const InnerWrapper = styled.section`
    background-color: white;
    flex: 1;
    display: flex;
    flex-direction: row;
`;

const SidebarPad = styled.div`
    width: 420px;
    height: 100%;
`;

const Body = styled.section`
    flex-direction: column;
    flex: 1;
    overflow-y: auto;
`;

const BodyInner = styled.section`
    display: flex;
    flex: 1;
    padding: 10px;
    margin: 20px 30px;
    padding-top: 0;
`;

function Library() {
  return (
    <Wrapper id="app-root">
        <Head>
            <title>About</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        
        <Header />
      
        <InnerWrapper>
            <Menu index={3} />
            <SidebarPad />

            <Body>
                <BodyInner>
                    <Markdown>{md}</Markdown>
                </BodyInner>
                
            </Body>
            
        </InnerWrapper> 
        

    </Wrapper>
  );
}

export default Library;
