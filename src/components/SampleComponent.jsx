import React from 'react';

const SampleComponent = ({ live }) => {
  if (live) {
    // This is the live version that renders JSX
    return (
      <div>
        <h1 style={{ color: 'blue' }}>Hello, World!</h1>
        <button onClick={() => alert('Button clicked!')}>Click Me</button>
      </div>
    );
  }

  // This is the code to display on the left (as a string)
  return (
    <pre>
      {`
const SampleComponent = () => {
  return (
    <div>
      <h1 style={{ color: 'blue' }}>Hello, World!</h1>
      <button onClick={() => alert('Button clicked!')}>Click Me</button>
    </div>
  );
}
      `}
    </pre>
  );
};

export default SampleComponent;
