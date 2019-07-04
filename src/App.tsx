import React from 'react';
import './App.css';
import GeneralInfo from './components/GeneralInfo';
import { fields } from './fixtures/fields';
import { user } from './fixtures/user';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <GeneralInfo fields={fields} user={user} />
      </header>
    </div>
  );
};

export default App;
