import React from 'react';
import './App.css';

import {Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h1>Hello world </h1>
      <h2>Start editing to see some magic happen!</h2>

      <ul>
        <li>
          <Link to="/v1-suspense-swr">v1-suspense-swr</Link>
        </li>
      </ul>
    </div>
  );
}

export default App;
