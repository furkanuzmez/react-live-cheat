import React, { useEffect, useState } from 'react';
import './MainPage.css';
import { FiCode, FiSettings, FiLayers, FiBookOpen ,FiSearch} from 'react-icons/fi';
import { SiReact } from 'react-icons/si'; // React.js Icon
import GreetingComponent from '../components/GreetingComponent';
import ButtonComponent from '../components/ButtonComponent';
import CounterComponent from '../components/CounterComponent';
import ListComponent from '../components/ListComponent';
import LoadingComponent from '../components/LoadingComponent';
import ConditionalComponent from '../components/ConditionalComponent';
import HooksExampleComponent from '../components/HooksExampleComponent';
import AxiosComponent from '../components/AxiosComponent';
import FetchComponent from '../components/FetchComponent';
import UseStateExample from '../components/UseStateExample';
import UseEffectExample from '../components/UseEffectExample';
import UseContextExample from '../components/UseContextExample';
import UseReducerExample from '../components/UseReducerExample';
import UseRefExample from '../components/UseRefExample';
import ParentComponent from '../components/ParentComponent'; 
import UseMemoComponent from '../components/UseMemoComponent';
import ErrorBoundary from '../components/ErrorBoundary';
import ErrorThrowingComponent from '../components/ErrorThrowingComponent';
import AsyncAwaitComponent from '../components/AsyncAwaitComponent';
import PromiseComponent from '../components/PromiseComponent';
import PromiseAllComponent from '../components/PromiseAllComponent';
import CanvasComponent from '../components/CanvasComponent';
import TabsComponent from '../components/TabsComponent';
import CardComponent from '../components/CardComponent';
import AutoSlidingComponent from '../components/AutoSlidingComponent';
import TodoListComponent from '../components/TodoListComponent';
import DataStructuresComponent from '../components/DataStructuresComponent';
import TableComponent from '../components/TableComponent';
const components = [
  { name: 'Greeting', component: GreetingComponent },
  { name: 'Button', component: ButtonComponent },
  { name: 'Counter', component: CounterComponent },
  { name: 'Card Example', component: CardComponent },
  { name: 'Auto Sliding Example', component: AutoSlidingComponent },
  { name: 'Todo List Example', component: TodoListComponent },
  { name: 'List', component: ListComponent },
  { name: 'Loading', component: LoadingComponent },
  { name: 'Conditional', component: ConditionalComponent },
  { name: 'Hooks Example', component: HooksExampleComponent },
  { name: 'Axios', component: AxiosComponent },
  { name: 'Fetch', component: FetchComponent },
  { name: 'useState', component: UseStateExample },
  { name: 'useEffect', component: UseEffectExample },
  { name: 'useContext', component: UseContextExample },
  { name: 'useReducer', component: UseReducerExample },
  { name: 'useRef', component: UseRefExample },
  { name: 'Parent-Child Communication', component: ParentComponent },
  { name: 'Tabs Example', component: TabsComponent },
  { name: 'Table', component: TableComponent },
  { name: 'useMemo', component: UseMemoComponent },
  { name: 'Error Boundary', component: () => (
      <ErrorBoundary>
        <ErrorThrowingComponent />
      </ErrorBoundary>
    ) },
  { name: 'Async/Await', component: AsyncAwaitComponent },
  { name: 'Promise', component: PromiseComponent },
  { name: 'Promise.all/Promise.allSettled', component: PromiseAllComponent },
  { name: 'HTML Canvas', component: CanvasComponent },
  { name: 'Data Structures Example', component: DataStructuresComponent },
];

const MainPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedComponent, setSelectedComponent] = useState(components[0]);
    const [isShining, setIsShining] = useState(false);
    const handleSearch = (e) => {
      const query = e.target.value.toLowerCase();
      setSearchTerm(query);
  
      const filteredComponent = components.find((comp) =>
        comp.name.toLowerCase().includes(query)
      );
  
      if (filteredComponent) {
        setSelectedComponent(filteredComponent);
      } else {
        setSelectedComponent(null); // If no match is found, don't show anything.
      }
    };
  
    const handleComponentClick = (component) => {
      setSelectedComponent(component); // Update the selected component state
    };
    const handleNavigation = () => {
        window.location.href = 'https://www.funcodemy.com';
      };

      useEffect(() => {
        const interval = setInterval(() => {
          setIsShining((prev) => !prev); // Toggle the shine effect
        }, 5000); // 2-second interval
    
        return () => clearInterval(interval); // Clean up interval on component unmount
      }, []);

      const buttonStyle = {
        backgroundColor: isShining ? '#45a049' : '#f95738',  // Green or Orange background
        color: 'white',               // White text
        padding: '15px 32px',         // Padding for the button
        textAlign: 'center',          // Center the text
        fontSize: '16px',             // Font size
        border: 'none',               // No border
        borderRadius: '8px',          // Rounded corners
        cursor: 'pointer',            // Pointer cursor on hover
        transition: 'background-color 0.3s ease-in-out',  // Smooth background color transition
        boxShadow: isShining ? '0 0 15px 5px rgba(255, 255, 255, 0.7)' : 'none', // Glow effect when shining
      };
    
      const buttonHoverStyle = {
        backgroundColor: '#45a049', // Darker green for hover effect
      };
    const SelectedComponent = selectedComponent?.component;
  
    return (
      <div className="container">
        {/* Header */}
        <header className="header">
          <div>React Live Cheat Sheet</div>
          <div className="search-bar">
            <FiSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search components..."
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
          <div> <button
        style={buttonStyle}
        onClick={handleNavigation}
      >
        Funcodemy
      </button></div>
        </header>
  
        {/* Main Content */}
        <div className="content">
          {/* Sidebar */}
          <div className="sidebar">
            <h3>
              <SiReact style={{ marginRight: '8px' }} /> Component List
            </h3>
            <ul>
              {components.map((comp) => (
                <li
                  key={comp.name}
                  onClick={() => handleComponentClick(comp)}
                  className={selectedComponent.name === comp.name ? 'selected' : ''}
                >
                  {comp.name}
                </li>
              ))}
            </ul>
          </div>
  
          {/* Content Area with Code and Live Preview */}
          <div className="panes">
            <div className="left-pane">
              <h2>Code</h2>
              {SelectedComponent ? <SelectedComponent /> : <p>No Component Found</p>}
            </div>
            <div className="right-pane">
              <h2>Result</h2>
              {SelectedComponent ? <SelectedComponent live /> : <p>No Component Found</p>}
            </div>
          </div>
        </div>
  
        {/* Footer */}
        <footer className="footer">
          © 2024 React Live Cheat Sheet- All Rights Reserved
        </footer>
      </div>
    );
  };
  
  export default MainPage;