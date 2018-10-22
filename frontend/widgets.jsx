import React from 'react';
import ReactDOM from 'react-dom';
import AutoComplete from './autocomplete';

const listNames = ['henry', 'joe', 'mona', 'lisa'];

const Root = () => (

  <div>
    <AutoComplete names={listNames} />
 </div>);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root />, document.getElementById('main'));
});