import React, { useMemo, useState } from 'react';

const UseMemoComponent = ({ live }) => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(1);

  // Expensive calculation
  const expensiveCalculation = (num) => {
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += num;
    }
    return result;
  };

  // Memoized value (called unconditionally)
  const calculatedValue = useMemo(() => expensiveCalculation(number), [number]);

  const componentCode = `
import React, { useMemo, useState } from 'react';

const UseMemoComponent = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(1);

  const expensiveCalculation = (num) => {
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += num;
    }
    return result;
  };

  const calculatedValue = useMemo(() => expensiveCalculation(number), [number]);

  return (
    <div>
      <h2>useMemo Example</h2>
      <p>Expensive Calculation Result: {calculatedValue}</p>
      <button onClick={() => setNumber(number + 1)}>Increment Number</button>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
};

export default UseMemoComponent;
`;

  if (live) {
    return (
      <div>
        <h2>useMemo Example</h2>
        <p>Expensive Calculation Result: {calculatedValue}</p>
        <button onClick={() => setNumber(number + 1)}>Increment Number</button>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment Count</button>
      </div>
    );
  }

  return <pre>{componentCode}</pre>;
};

export default UseMemoComponent;
