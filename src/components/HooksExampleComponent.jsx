import React, { useState, useEffect, useRef } from 'react';

const HooksExampleComponent = ({ live }) => {
  const [count, setCount] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  if (live) {
    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment Count</button>
        <br />
        <input ref={inputRef} placeholder="Focus me!" />
        <button onClick={() => inputRef.current.focus()}>Focus Input</button>
      </div>
    );
  }

  return (
    <pre>
      {`
import React, { useState, useEffect, useRef } from 'react';

const HooksExampleComponent = () => {
  const [count, setCount] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    document.title = \`Count: \${count}\`;
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <br />
      <input ref={inputRef} placeholder="Focus me!" />
      <button onClick={() => inputRef.current.focus()}>Focus Input</button>
    </div>
  );
};
      `}
    </pre>
  );
};

export default HooksExampleComponent;
