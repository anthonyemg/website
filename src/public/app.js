import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './website/reducers';
import Website from './website';

import './style.less';

const store = createStore(reducer);
const App = (
  <Provider store={store}>
    <Website />
  </Provider>
);

ReactDom.render(App, document.getElementById('app'));