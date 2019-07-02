import React from 'react';
import './App.css';
import GeneralInfo from './components/GeneralInfo';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <GeneralInfo />
      </header>
    </div>
  );
}

export default App;
