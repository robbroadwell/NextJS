import * as React from "react";
import Link from 'next/link';
import Head from 'next/head'
import styled from 'styled-components'
// import { request, gql } from 'graphql-request';
import Markdown from 'markdown-to-jsx';

import Footer from '../../../components/footer';
import Header from '../../../components/header';

// const endpoint = 'https://api-us-east-1.graphcms.com/v2/cl3c1jv7u02dw01zdd5a233vn/master';

// const query = gql`
//   query GetPostBySlug($slug: String!) {
//     post(where: { slug: $slug }) {
//       title
//       content
//     }
//   }
// `

// const variables = {
//   slug: 'cities-towns-villages',
// }

const Wrapper = styled.section`
  background-color: white;
  padding-top: 75px;
  flex: 1;
  display: flex;
  min-height: calc(100vh - 235px);
  flex-direction: column;
`;

const Body = styled.section`
  min-height: calc(100vh - 235px);
  flex: 1;
`;

class CitiesTownsVillages extends React.Component {
  // constructor(props, context) {
  //   super(props, context);
  //   this.state = {
  //     content: "loading"
  //   };
  // }

  // async componentDidMount() {
  //   const data = await request(endpoint, query, variables);
  //   this.setState({ content: data.post.content });
  //   console.log(data);
  // }

  render() {
    return (
      <Wrapper id="app-root">
        <Head>
          <title>Library</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Body>
          <Markdown>
            I **love** using [Next.js](https://nextjs.org/)
          </Markdown>
        </Body> 
        <Header />
        <Footer />
      </Wrapper>
    );
  }
}

export default CitiesTownsVillages;