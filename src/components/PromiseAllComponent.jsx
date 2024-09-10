import React, { useState } from 'react';

const PromiseAllComponent = ({ live }) => {
  const [message, setMessage] = useState('');

  const handlePromiseAll = () => {
    const promise1 = Promise.resolve('Promise 1 resolved');
    const promise2 = Promise.resolve('Promise 2 resolved');
    const promise3 = Promise.reject('Promise 3 rejected');

    Promise.all([promise1, promise2, promise3])
      .then((values) => setMessage(`Promise.all: ${values}`))
      .catch((error) => setMessage(`Promise.all Error: ${error}`));
  };

  const handlePromiseAllSettled = () => {
    const promise1 = Promise.resolve('Promise 1 resolved');
    const promise2 = Promise.resolve('Promise 2 resolved');
    const promise3 = Promise.reject('Promise 3 rejected');

    Promise.allSettled([promise1, promise2, promise3]).then((results) => {
      const statuses = results.map((result) => `${result.status}: ${result.value || result.reason}`);
      setMessage(`Promise.allSettled: ${statuses.join(', ')}`);
    });
  };

  const componentCode = `
import React, { useState } from 'react';

const PromiseAllComponent = () => {
  const [message, setMessage] = useState('');

  const handlePromiseAll = () => {
    const promise1 = Promise.resolve('Promise 1 resolved');
    const promise2 = Promise.resolve('Promise 2 resolved');
    const promise3 = Promise.reject('Promise 3 rejected');

    Promise.all([promise1, promise2, promise3])
      .then((values) => setMessage(\`Promise.all: \${values}\`))
      .catch((error) => setMessage(\`Promise.all Error: \${error}\`));
  };

  const handlePromiseAllSettled = () => {
    const promise1 = Promise.resolve('Promise 1 resolved');
    const promise2 = Promise.resolve('Promise 2 resolved');
    const promise3 = Promise.reject('Promise 3 rejected');

    Promise.allSettled([promise1, promise2, promise3]).then((results) => {
      const statuses = results.map((result) => \`\${result.status}: \${result.value || result.reason}\`);
      setMessage(\`Promise.allSettled: \${statuses.join(', ')}\`);
    });
  };

  return (
    <div>
      <h2>Promise.all and Promise.allSettled Example</h2>
      <button onClick={handlePromiseAll}>Run Promise.all</button>
      <button onClick={handlePromiseAllSettled}>Run Promise.allSettled</button>
      <p>{message}</p>
    </div>
  );
};

export default PromiseAllComponent;
`;

  if (live) {
    return (
      <div>
        <h2>Promise.all and Promise.allSettled Example</h2>
        <button onClick={handlePromiseAll}>Run Promise.all</button>
        <button onClick={handlePromiseAllSettled}>Run Promise.allSettled</button>
        <p>{message}</p>
      </div>
    );
  }

  return <pre>{componentCode}</pre>;
};

export default PromiseAllComponent;
