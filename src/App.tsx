import React from 'react';
import './App.css';

import {Link} from 'react-router-dom'

const routeArr: string[] = [
  'v1-suspense-swr',
  'v2-initial-loading-with-skeletons'
]

function App() {
  return (
    <div className="App">
      <h1>Hello world </h1>
      <h2>Start editing to see some magic happen!</h2>

      <ul>
        {routeArr?.map((item ) => {
          return (
            <li key={item}>
              <Link to={item}>{item}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
