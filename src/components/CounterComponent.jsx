import React, { useState } from 'react';

const CounterComponent = ({ live }) => {
  const [count, setCount] = useState(0); // Call useState unconditionally

  if (live) {
    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increase Count</button>
      </div>
    );
  }

  // Render code example
  return (
    <pre>
      {`
import React, { useState } from 'react';

const CounterComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </div>
  );
};
      `}
    </pre>
  );
};

export default CounterComponent;
