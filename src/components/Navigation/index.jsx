import React from 'react';
import Link from 'next/link';

const Navigation = () => {
  return (
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        &nbsp;|&nbsp;
        <Link href="/posts">
          <a>Posts</a>
        </Link>
        &nbsp;|&nbsp;
        <Link href="/params/1/2/3">
          <a>Params</a>
        </Link>
      </nav>
  );
}

export default Navigation;