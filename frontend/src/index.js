import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SearchPlugin from './plugin';


const rootEl = document.getElementById('root');
if(rootEl){
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

const searchEl = document.getElementById('search');
if(searchEl){
  const search = ReactDOM.createRoot(searchEl);
  const userid = searchEl.getAttribute('userid');
  search.render(
    <React.StrictMode>
      <SearchPlugin userid={userid} />
    </React.StrictMode>
  );
}
