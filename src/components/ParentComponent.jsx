import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = ({ live }) => {
  const [dataFromChild, setDataFromChild] = useState('');

  // Function to receive data from the child
  const receiveData = (data) => {
    setDataFromChild(data);
  };

  if (live) {
    // Live implementation
    return (
      <div>
        <h3>Parent Component</h3>
        <p>Data from Child: {dataFromChild}</p>
        <ChildComponent sendDataToParent={receiveData} live />
      </div>
    );
  }

  // Code view
  return (
    <pre>
      {`
import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const [dataFromChild, setDataFromChild] = useState('');

  // Function to receive data from the child
  const receiveData = (data) => {
    setDataFromChild(data);
  };

  return (
    <div>
      <h3>Parent Component</h3>
      <p>Data from Child: {dataFromChild}</p>
      <ChildComponent sendDataToParent={receiveData} />
    </div>
  );
};

export default ParentComponent;
      `}
    </pre>
  );
};

export default ParentComponent;
