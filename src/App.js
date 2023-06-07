import React from 'react';
import './App.css';
import ResidentsList from './Components/ResidentsList';
import Search from './Components/Search';

const title = "Hacker Dormitory";

function App() {
  return (
    <div className="App">
      <h1>{title}</h1>
      <div className="layout-column justify-content-center align-items-center w-50 mx-auto">
        <Search />
        <ResidentsList students={[]} />
      </div>
    </div>
  );
}

export default App;

