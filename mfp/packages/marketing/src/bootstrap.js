import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import App from './App';

console.log('Ajay');
//Mount function to start up the app
console.log(App);
const mount = (el) => {
  ReactDOM.render(<App />, el);
};

// If we r in development and in isolation, call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-dev-root');
  if (devRoot) {
    mount(devRoot);
  }
}

// If we r running through container, we export mount
export { mount };
