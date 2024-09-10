import React, { useState } from 'react';

const DataStructuresComponent = ({ live }) => {
  // Stack: LIFO
  const [stack, setStack] = useState([]);

  // Queue: FIFO
  const [queue, setQueue] = useState([]);

  // Linked List (simple implementation using an array)
  const [linkedList, setLinkedList] = useState([]);

  // Stack operations
  const pushStack = (value) => setStack([...stack, value]);
  const popStack = () => setStack(stack.slice(0, -1));

  // Queue operations
  const enqueueQueue = (value) => setQueue([...queue, value]);
  const dequeueQueue = () => setQueue(queue.slice(1));

  // Linked List operations (simple add to end and remove from front)
  const addLinkedList = (value) => setLinkedList([...linkedList, value]);
  const removeLinkedList = () => setLinkedList(linkedList.slice(1));

  const componentCode = `
import React, { useState } from 'react';

const DataStructuresComponent = () => {
  // Stack: LIFO
  const [stack, setStack] = useState([]);

  // Queue: FIFO
  const [queue, setQueue] = useState([]);

  // Linked List (simple implementation using an array)
  const [linkedList, setLinkedList] = useState([]);

  // Stack operations
  const pushStack = (value) => setStack([...stack, value]);
  const popStack = () => setStack(stack.slice(0, -1));

  // Queue operations
  const enqueueQueue = (value) => setQueue([...queue, value]);
  const dequeueQueue = () => setQueue(queue.slice(1));

  // Linked List operations (simple add to end and remove from front)
  const addLinkedList = (value) => setLinkedList([...linkedList, value]);
  const removeLinkedList = () => setLinkedList(linkedList.slice(1));

  return (
    <div>
      <h2>Data Structures Example</h2>

      <h3>Stack (LIFO)</h3>
      <input type="text" id="stackValue" placeholder="Enter value" />
      <button onClick={() => pushStack(document.getElementById('stackValue').value)}>Push</button>
      <button onClick={popStack}>Pop</button>
      <p>{JSON.stringify(stack)}</p>

      <h3>Queue (FIFO)</h3>
      <input type="text" id="queueValue" placeholder="Enter value" />
      <button onClick={() => enqueueQueue(document.getElementById('queueValue').value)}>Enqueue</button>
      <button onClick={dequeueQueue}>Dequeue</button>
      <p>{JSON.stringify(queue)}</p>

      <h3>Linked List (Simplified)</h3>
      <input type="text" id="linkedListValue" placeholder="Enter value" />
      <button onClick={() => addLinkedList(document.getElementById('linkedListValue').value)}>Add</button>
      <button onClick={removeLinkedList}>Remove</button>
      <p>{JSON.stringify(linkedList)}</p>
    </div>
  );
};

export default DataStructuresComponent;
`;

  if (live) {
    return (
      <div>
        <h2>Data Structures Example</h2>

        {/* Stack */}
        <h3>Stack (LIFO)</h3>
        <input type="text" id="stackValue" placeholder="Enter value" />
        <button onClick={() => pushStack(document.getElementById('stackValue').value)}>Push</button>
        <button onClick={popStack}>Pop</button>
        <p>{JSON.stringify(stack)}</p>

        {/* Queue */}
        <h3>Queue (FIFO)</h3>
        <input type="text" id="queueValue" placeholder="Enter value" />
        <button onClick={() => enqueueQueue(document.getElementById('queueValue').value)}>Enqueue</button>
        <button onClick={dequeueQueue}>Dequeue</button>
        <p>{JSON.stringify(queue)}</p>

        {/* Linked List */}
        <h3>Linked List (Simplified)</h3>
        <input type="text" id="linkedListValue" placeholder="Enter value" />
        <button onClick={() => addLinkedList(document.getElementById('linkedListValue').value)}>Add</button>
        <button onClick={removeLinkedList}>Remove</button>
        <p>{JSON.stringify(linkedList)}</p>
      </div>
    );
  }

  // If not live, display the code
  return <pre>{componentCode}</pre>;
};

export default DataStructuresComponent;
