import React, { useState } from 'react';

const ChildComponent = ({ sendDataToParent, live }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    sendDataToParent(inputValue);  // Send the input value to the parent
  };

  if (live) {
    // Live implementation
    return (
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Enter some data"
        />
        <button onClick={handleClick}>Send Data to Parent</button>
      </div>
    );
  }

  // Code view
  return (
    <pre>
      {`
import React, { useState } from 'react';

const ChildComponent = ({ sendDataToParent }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    sendDataToParent(inputValue);  // Send the input value to the parent
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter some data"
      />
      <button onClick={handleClick}>Send Data to Parent</button>
    </div>
  );
};

export default ChildComponent;
      `}
    </pre>
  );
};

export default ChildComponent;
