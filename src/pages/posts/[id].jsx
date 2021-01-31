import React from 'react';

export default ({ post }) => <h1>{post.title}</h1>;

export async function getServerSideProps({ params, req, res }) {
  const response = await fetch(`http://localhost:3000/api/posts/${params.id}`)
  if (!response.ok) {
    res.writeHead(302, { Location: '/posts' });
    res.end();
    return { props: {} };
  }
  const { data } = await response.json();
  return {
    props: {
      post: data,
    }
  }
}