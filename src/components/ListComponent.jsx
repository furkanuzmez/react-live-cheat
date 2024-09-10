import React from 'react';

const ListComponent = ({ live }) => {
  const items = ['React', 'Vue', 'Angular', 'Svelte'];

  if (live) {
    return (
      <div>
        <h3>JavaScript Frameworks:</h3>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <pre>
      {`
const ListComponent = () => {
  const items = ['React', 'Vue', 'Angular', 'Svelte'];

  return (
    <div>
      <h3>JavaScript Frameworks:</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
      `}
    </pre>
  );
};

export default ListComponent;
