import React from 'react';

const GreetingComponent = ({ live }) => {
  if (live) {
    // Live view (component rendering)
    return (
      <div>
        <h1>Hello from GreetingComponent!</h1>

        {/* Explanation of the app's purpose */}
        <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#f9f9f9', borderRadius: '5px' }}>
          <h2>Purpose of the App:</h2>
          <p>
            This app serves as a <strong>React cheat sheet</strong> designed for developers and learners who want to explore various
            React components, hooks, and patterns in action. It offers live examples of core React concepts such as component rendering,
            state management, hooks, conditional rendering, and data flow.
          </p>
          <p>
            Whether you're new to React or revisiting its features, this app gives you a hands-on experience to see how different components work in real-time.
          </p>

          {/* Fun example */}
          <h3>Here's a Fun Fact:</h3>
          <p>
            In JavaScript, it's completely normal to return <code>null</code> if you're feeling <em>nullified</em> or <strong>undefined</strong> in your purpose...
          </p>
          <pre>
            {`
function getDeveloperMood(isMonday) {
  return isMonday ? null : 'Productive!';
}

console.log(getDeveloperMood(true));  // Output: null
console.log(getDeveloperMood(false)); // Output: 'Productive!'
`}
          </pre>
        </div>

        {/* Explanation of the component */}
        <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#e9e9e9', borderRadius: '5px' }}>
          <h2>Component Explanation:</h2>
          <p>
            <strong>Component Purpose:</strong> The <code>GreetingComponent</code> is a basic React functional component
            that demonstrates how to create a component using a function-based approach. It returns a simple "Hello" message,
            and can be extended with props for dynamic behavior.
          </p>
          <p>
            <strong>Use Case:</strong> You can use <code>GreetingComponent</code> to display a warm welcome message or other static content. 
            It's a great way to understand the building blocks of React components.
          </p>
        </div>
      </div>
    );
  }

  // Code view (showing the explanation and the component's actual code)
  return (
    <div>
      <pre>
        {`
/**
 * GreetingComponent
 *
 * This component is a simple functional component that demonstrates how
 * to create a basic React component using the modern function-based approach.
 *
 * Purpose:
 * - This app serves as a React cheat sheet for learners and developers
 *   who want to see various React components, hooks, and patterns in action.
 * - It includes live examples of core React concepts like component rendering,
 *   state management, hooks, conditional rendering, and data flow.
 *
 * This particular component (GreetingComponent) serves as a very basic example
 * of a stateless functional component that simply returns some JSX.
 *
 * Use cases:
 * - GreetingComponent can be used as a simple UI element to display greetings
 *   or any static content.
 * - It can be expanded to accept props and become more dynamic, but for now,
 *   it's a static, example component to help beginners understand the basics.
 */
        `}
      </pre>

      <pre>
        {`
import React from 'react';

const GreetingComponent = ({ live }) => {
  if (live) {
    return <h1>Hello from GreetingComponent!</h1>;
  }

  return (
    <pre>{\`
const GreetingComponent = () => {
  return <h1>Hello from GreetingComponent!</h1>;
};
    \`}</pre>
  );
};

export default GreetingComponent;
        `}
      </pre>

      {/* Funny Code Sample in Code View */}
      <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#f0f0f0', borderRadius: '5px' }}>
        <h3>Fun Code Example:</h3>
        <pre>
          {`
/**
 * Here's a little fun with JavaScript:
 * 
 * Developer state on a Friday: readyToCode = true;
 * Developer state on a Monday: readyToCode = null;
 */

const readyToCode = isFriday => isFriday ? true : null;

console.log(readyToCode(true));  // Output: true
console.log(readyToCode(false)); // Output: null
`}
        </pre>
      </div>
    </div>
  );
};

export default GreetingComponent;