import React, { useState } from 'react';

const PromiseComponent = ({ live }) => {
  const [message, setMessage] = useState('');

  // Fetch data using promise
  const fetchDataWithPromise = () => {
    const promise = new Promise((resolve, reject) => {
      const success = true;
      setTimeout(() => {
        if (success) {
          resolve('Data fetched successfully!');
        } else {
          reject('Error fetching data.');
        }
      }, 2000);
    });

    promise
      .then((res) => setMessage(res))
      .catch((err) => setMessage(err));
  };

  const componentCode = `
import React, { useState } from 'react';

const PromiseComponent = () => {
  const [message, setMessage] = useState('');

  const fetchDataWithPromise = () => {
    const promise = new Promise((resolve, reject) => {
      const success = true;
      setTimeout(() => {
        if (success) {
          resolve('Data fetched successfully!');
        } else {
          reject('Error fetching data.');
        }
      }, 2000);
    });

    promise
      .then((res) => setMessage(res))
      .catch((err) => setMessage(err));
  };

  return (
    <div>
      <h2>Promise Example</h2>
      <button onClick={fetchDataWithPromise}>Fetch Data</button>
      <p>{message}</p>
    </div>
  );
};

export default PromiseComponent;
`;

  if (live) {
    return (
      <div>
        <h2>Promise Example</h2>
        <button onClick={fetchDataWithPromise}>Fetch Data</button>
        <p>{message}</p>
      </div>
    );
  }

  return <pre>{componentCode}</pre>;
};

export default PromiseComponent;
