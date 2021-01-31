import React from 'react';

export default ({ content }) => <h1>{content.title}</h1>;

export function getStaticProps() {
  return {
    props: {
      content: {
        title: 'Hello World!',
      }
    }
  }
}