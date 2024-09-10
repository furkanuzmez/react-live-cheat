import React, { useContext } from 'react';
import MyContext from './MyContext';

const UseContextExample = ({ live }) => {
  const value = useContext(MyContext);

  if (live) {
    return (
      <div>
        <p>Context Value: {value}</p>
      </div>
    );
  }

  return (
    <pre>
      {`
import React, { useContext } from 'react';
import MyContext from './MyContext';

const UseContextExample = () => {
  const value = useContext(MyContext);

  return (
    <div>
      <p>Context Value: {value}</p>
    </div>
  );
};
      `}
    </pre>
  );
};

export default UseContextExample;
