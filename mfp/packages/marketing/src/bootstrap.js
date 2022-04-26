import React from 'react';
import ReactDOM from 'react-dom';

console.log('Ajay');
//Mount function to start up the app
const mount = (el) => {
  ReactDOM.render(<h1>Hi there!</h1>, el);
};

// If we r in development and in isolation, call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.getElementById('_marketing-dev-root');
  if (devRoot) {
    mount(devRoot);
  }
}

// If we r running through container, we export mount
export { mount };
