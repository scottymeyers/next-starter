import React from 'react';
import { useRouter } from 'next/router';

const Example = () => {
  const router = useRouter();
  const { params } = router.query;

  return (
    <div>
      <h1>Params</h1>
      {params && (
        <ul>
          {params.map((p, i) => <li key={i}>{p}</li>)}
        </ul>
      )}
    </div>
  );
}

export default Example;