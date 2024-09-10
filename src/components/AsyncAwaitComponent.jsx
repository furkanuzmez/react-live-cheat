import React, { useState } from 'react';

const AsyncAwaitComponent = ({ live }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch function
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const componentCode = `
import React, { useState } from 'react';

const AsyncAwaitComponent = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Async/Await Example</h2>
      <button onClick={fetchData}>Fetch Data</button>
      {loading ? <p>Loading...</p> : data && <p>Data: {JSON.stringify(data)}</p>}
    </div>
  );
};

export default AsyncAwaitComponent;
`;

  if (live) {
    return (
      <div>
        <h2>Async/Await Example</h2>
        <button onClick={fetchData}>Fetch Data</button>
        {loading ? <p>Loading...</p> : data && <p>Data: {JSON.stringify(data)}</p>}
      </div>
    );
  }

  return <pre>{componentCode}</pre>;
};

export default AsyncAwaitComponent;
