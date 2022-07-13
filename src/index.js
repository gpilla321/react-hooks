import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MemoComponent from './hooks/memo';
import UseMemoComponent from './hooks/useMemo';
import UseCallbackComponent from './hooks/useCallback';
import UseRefComponent from './hooks/useRef';
import UseReducerComponent from './hooks/useReducer';
import { UseContextComponent, ExampleContextProvider } from './hooks/useContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ExampleContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MemoComponent />} />
        <Route path="/memo" element={<MemoComponent />} />
        <Route path="/useMemo" element={<UseMemoComponent />} />
        <Route path="/useCallback" element={<UseCallbackComponent />} />
        <Route path="/useRef" element={<UseRefComponent />} />
        <Route path="/useReducer" element={<UseReducerComponent />} />
        <Route path="/useContext" element={<UseContextComponent />} />
      </Routes>
    </BrowserRouter>
  </ExampleContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
