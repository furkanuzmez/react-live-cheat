import React from 'react';

const ErrorThrowingComponent = () => {
  throw new Error('This is a test error!');
  return <div>This will not be rendered.</div>;
};

export default ErrorThrowingComponent;
