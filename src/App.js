import React from 'react';
import Routes from './router'

import Header from './components/Header';
import Main from './pages/main';

import  './styles.css'

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes/>
    </div>
  );
}

export default App;