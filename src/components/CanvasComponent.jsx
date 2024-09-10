import React, { useEffect, useRef } from 'react';

const CanvasComponent = ({ live }) => {
  const canvasRef = useRef(null);

  // The canvas drawing logic
  useEffect(() => {
    if (live) {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');

      // Draw a rectangle
      context.fillStyle = '#FF0000';
      context.fillRect(50, 50, 150, 100);

      // Draw a circle
      context.beginPath();
      context.arc(150, 200, 50, 0, 2 * Math.PI);
      context.fillStyle = '#00FF00';
      context.fill();
    }
  }, [live]);

  // The code as a string to display in the code view
  const componentCode = `
import React, { useEffect, useRef } from 'react';

const CanvasComponent = ({ live }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (live) {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');

      // Draw a rectangle
      context.fillStyle = '#FF0000';
      context.fillRect(50, 50, 150, 100);

      // Draw a circle
      context.beginPath();
      context.arc(150, 200, 50, 0, 2 * Math.PI);
      context.fillStyle = '#00FF00';
      context.fill();
    }
  }, [live]);

  return (
    <div>
      <h2>HTML Canvas Example</h2>
      <canvas ref={canvasRef} width={300} height={300} style={{ border: '1px solid black' }}></canvas>
    </div>
  );
};

export default CanvasComponent;
`;

  // Render either the live canvas view or the code
  if (live) {
    return (
      <div>
        <h2>HTML Canvas Example</h2>
        <canvas ref={canvasRef} width={300} height={300} style={{ border: '1px solid black' }}></canvas>
      </div>
    );
  }

  // If live is false, show the code view
  return <pre>{componentCode}</pre>;
};

export default CanvasComponent;
