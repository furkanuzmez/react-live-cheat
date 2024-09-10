import React, { useState } from 'react';

const ConditionalRenderingComponent = ({ live }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (live) {
    return (
      <div>
        {isLoggedIn ? (
          <p>Welcome back, user!</p>
        ) : (
          <p>Please sign in.</p>
        )}
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
          {isLoggedIn ? 'Logout' : 'Login'}
        </button>
      </div>
    );
  }

  return (
    <pre>
      {`
import React, { useState } from 'react';

function ConditionalRenderingComponent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? (
        <p>Welcome back, user!</p>
      ) : (
        <p>Please sign in.</p>
      )}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </div>
  );
}
      `}
    </pre>
  );
};

export default ConditionalRenderingComponent;
