import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './website/reducers';
import Website from './website';

import './style.less';

const store = createStore(reducer);
// const app = 
ReactDom.render(
  <Provider store={store}>
    <Website />
  </Provider>,
  document.getElementById('app'));
