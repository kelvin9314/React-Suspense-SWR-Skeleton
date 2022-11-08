import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { SWRConfig } from 'swr'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from './App';
import V1Suspense from './pages/v1-suspense-swr';
import V2 from './pages/v2-initial-loading-with-skeletons';

import reportWebVitals from './reportWebVitals';

const fetcher = (url: string) =>
  fetch(url).then(
    res =>
      new Promise(resolve =>
        setTimeout(async () => {
          const jsonResponse = await res.json()

          resolve(jsonResponse)
        }, 2000),
      ),
  )

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <SWRConfig
      value={{
        fetcher,
        suspense: true,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="/v1-suspense-swr" element={<V1Suspense />}></Route>
          <Route path="/v2-initial-loading-with-skeletons" element={<V2 />}></Route>
        </Routes>
      </BrowserRouter>

    </SWRConfig>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
