import React, { useRef } from 'react';

const UseRefExample = ({ live }) => {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  if (live) {
    return (
      <div>
        <input ref={inputRef} placeholder="Focus on me" />
        <button onClick={handleClick}>Focus Input</button>
      </div>
    );
  }

  return (
    <pre>
      {`
import React, { useRef } from 'react';

const UseRefExample = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} placeholder="Focus on me" />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
};
      `}
    </pre>
  );
};

export default UseRefExample;
