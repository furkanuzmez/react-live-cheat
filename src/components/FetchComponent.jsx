import React, { useState, useEffect } from 'react';

const FetchComponent = ({ live }) => {
  const [data, setData] = useState(null);
  const [postData, setPostData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // GET request with Fetch API
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  // POST request with Fetch API
  const handlePost = () => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
      }),
    })
      .then((response) => response.json())
      .then((data) => setPostData(data))
      .catch((error) => setError(error.message));
  };

  if (live) {
    return (
      <div>
        <h3>Fetch API GET Request</h3>
        {loading ? <p>Loading...</p> : error ? <p>{error}</p> : <p>{data.title}</p>}

        <h3>Fetch API POST Request</h3>
        <button onClick={handlePost}>Send POST Request</button>
        {postData && <p>Posted: {JSON.stringify(postData)}</p>}
      </div>
    );
  }

  return (
    <pre>
      {`
import React, { useState, useEffect } from 'react';

const FetchComponent = () => {
  const [data, setData] = useState(null);
  const [postData, setPostData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // GET request with Fetch API
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  // POST request with Fetch API
  const handlePost = () => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
      }),
    })
      .then((response) => response.json())
      .then((data) => setPostData(data))
      .catch((error) => setError(error.message));
  };

  return (
    <div>
      <h3>Fetch API GET Request</h3>
      {loading ? <p>Loading...</p> : error ? <p>{error}</p> : <p>{data.title}</p>}

      <h3>Fetch API POST Request</h3>
      <button onClick={handlePost}>Send POST Request</button>
      {postData && <p>Posted: {JSON.stringify(postData)}</p>}
    </div>
  );
};
      `}
    </pre>
  );
};

export default FetchComponent;
