import React, { useState, useEffect } from 'react';

const LoadingComponent = ({ live }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulate 2-second loading

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  if (live) {
    return <div>{loading ? <p>Loading...</p> : <p>Data loaded!</p>}</div>;
  }

  return (
    <pre>
      {`
import React, { useState, useEffect } from 'react';

const LoadingComponent = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulate 2-second loading

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return <div>{loading ? <p>Loading...</p> : <p>Data loaded!</p>}</div>;
};
      `}
    </pre>
  );
};

export default LoadingComponent;
