import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AxiosComponent = ({ live }) => {
  const [data, setData] = useState(null);
  const [postData, setPostData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // GET request with Axios
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  // POST request with Axios
  const handlePost = () => {
    axios
      .post('https://jsonplaceholder.typicode.com/posts', {
        title: 'foo',
        body: 'bar',
        userId: 1,
      })
      .then((response) => {
        setPostData(response.data);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  if (live) {
    return (
      <div>
        <h3>Axios GET Request</h3>
        {loading ? <p>Loading...</p> : error ? <p>{error}</p> : <p>{data.title}</p>}

        <h3>Axios POST Request</h3>
        <button onClick={handlePost}>Send POST Request</button>
        {postData && <p>Posted: {JSON.stringify(postData)}</p>}
      </div>
    );
  }

  return (
    <pre>
      {`
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AxiosComponent = () => {
  const [data, setData] = useState(null);
  const [postData, setPostData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // GET request with Axios
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  // POST request with Axios
  const handlePost = () => {
    axios
      .post('https://jsonplaceholder.typicode.com/posts', {
        title: 'foo',
        body: 'bar',
        userId: 1,
      })
      .then((response) => {
        setPostData(response.data);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div>
      <h3>Axios GET Request</h3>
      {loading ? <p>Loading...</p> : error ? <p>{error}</p> : <p>{data.title}</p>}

      <h3>Axios POST Request</h3>
      <button onClick={handlePost}>Send POST Request</button>
      {postData && <p>Posted: {JSON.stringify(postData)}</p>}
    </div>
  );
};
      `}
    </pre>
  );
};

export default AxiosComponent;
