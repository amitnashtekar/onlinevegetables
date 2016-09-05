import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import storeVage from './store/store';
import {App} from './components/index.js';

console.log('bkj',App);
render(
   <Provider store={storeVage}>
        <App />
        </Provider>,
   
  
    document.getElementById('root')
);


