import React from 'react';

const ButtonComponent = ({ live }) => {
  if (live) {
    return <button onClick={() => alert('Button Clicked!')}>Click Me!</button>;
  }

  return (
    <pre>
      {`
const ButtonComponent = () => {
  return <button onClick={() => alert('Button Clicked!')}>Click Me!</button>;
};
      `}
    </pre>
  );
};

export default ButtonComponent;
