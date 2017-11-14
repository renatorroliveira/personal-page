
import 'material-design-icons/iconfont/material-icons.css';
import 'materialize-css/dist/css/materialize.css';

import React from 'react';
import ReactDOM from 'react-dom';

import 'jquery';
import 'materialize-css';

import '@/sass/styles.scss';

import Application from '@/js/Application';

ReactDOM.render(
  <Application />,
  document.getElementById('main-container'),
);
