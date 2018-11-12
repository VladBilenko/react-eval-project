import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {unregister} from './services/registerServiceWorker'
import store from './services/store'

const render = (Component) => {
  ReactDOM.render(
    <Component store={store} />,
    document.getElementById('root')
  )
};

render(App);
unregister();

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    render(NextApp)
  })
}
