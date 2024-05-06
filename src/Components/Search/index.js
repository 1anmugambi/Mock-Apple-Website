import React from 'react';
import ReactDOM from 'react-dom';
import Search from './search';

const onSearch = searchTerm => {
  console.log(`Searching for ${searchTerm}...`);
  // API here
};

ReactDOM.render(
  <React.StrictMode>
    <Search onSearch={onSearch} />
  </React.StrictMode>,
  document.getElementById('root')
);
