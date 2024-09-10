import React, { useState } from 'react';

const ConditionalComponent = ({ live }) => {
  const [isVisible, setIsVisible] = useState(true);

  if (live) {
    return (
      <div>
        <button onClick={() => setIsVisible(!isVisible)}>
          Toggle Visibility
        </button>
        {isVisible ? <p>This content is visible</p> : <p>Content hidden</p>}
      </div>
    );
  }

  return (
    <pre>
      {`
import React, { useState } from 'react';

const ConditionalComponent = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        Toggle Visibility
      </button>
      {isVisible ? <p>This content is visible</p> : <p>Content hidden</p>}
    </div>
  );
};
      `}
    </pre>
  );
};

export default ConditionalComponent;
