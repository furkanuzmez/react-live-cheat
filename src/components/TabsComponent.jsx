import React, { useState } from 'react';
import TabPanel from './TabPanel'; // Import the TabPanel component

const TabsComponent = ({ live }) => {
  const [activeTab, setActiveTab] = useState(0);

  const componentCode = `
import React, { useState } from 'react';
import TabPanel from './TabPanel';

const TabsComponent = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div style={{ display: 'flex', marginBottom: '10px' }}>
        <button onClick={() => setActiveTab(0)}>Tab 1</button>
        <button onClick={() => setActiveTab(1)}>Tab 2</button>
        <button onClick={() => setActiveTab(2)}>Tab 3</button>
      </div>
      <TabPanel active={activeTab} index={0}>
        <p>This is the content of Tab 1.</p>
      </TabPanel>
      <TabPanel active={activeTab} index={1}>
        <p>This is the content of Tab 2.</p>
      </TabPanel>
      <TabPanel active={activeTab} index={2}>
        <p>This is the content of Tab 3.</p>
      </TabPanel>
    </div>
  );
};

export default TabsComponent;
`;

  if (live) {
    return (
      <div>
        <div style={{ display: 'flex', marginBottom: '10px' }}>
          <button onClick={() => setActiveTab(0)}>Tab 1</button>
          <button onClick={() => setActiveTab(1)}>Tab 2</button>
          <button onClick={() => setActiveTab(2)}>Tab 3</button>
        </div>
        <TabPanel active={activeTab} index={0}>
          <p>This is the content of Tab 1.</p>
        </TabPanel>
        <TabPanel active={activeTab} index={1}>
          <p>This is the content of Tab 2.</p>
        </TabPanel>
        <TabPanel active={activeTab} index={2}>
          <p>This is the content of Tab 3.</p>
        </TabPanel>
      </div>
    );
  }

  return <pre>{componentCode}</pre>;
};

export default TabsComponent;
