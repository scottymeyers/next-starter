import React from 'react';

export default ({ posts }) => {
  return (
    <ul>
      {posts.map((p, i) => {
        return (
          <li>
            <a href={`/posts/${p.id}`} title={p.title}>
              {p.title}
            </a>
          </li>
        )
      })}
    </ul>
  );
};

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/posts`)
  const { data } = await res.json();
  return {
    props: {
      posts: data,
    }
  }
}