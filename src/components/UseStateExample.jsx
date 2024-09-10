import React, { useState } from 'react';

const UseStateExample = ({ live }) => {
  const [count, setCount] = useState(0);

  if (live) {
    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    );
  }

  return (
    <pre>
      {`
import React, { useState } from 'react';

const UseStateExample = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
      `}
    </pre>
  );
};

export default UseStateExample;
