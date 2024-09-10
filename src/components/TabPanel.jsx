import React from 'react';

// This component will only display its children if the active tab matches its index
const TabPanel = ({ children, active, index }) => {
  if (active !== index) return null;
  return <div>{children}</div>;
};

export default TabPanel;