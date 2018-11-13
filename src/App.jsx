import './app.css'
import React, {Component} from 'react'
import {Provider} from 'react-redux'
import history from 'services/history'
import PropTypes from 'prop-types'
import {Route, Router, Switch, Redirect} from 'react-router-dom'
import {UserContainer, EventsContainer, ReposContainer} from './containers'

export default class App extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  };

  render () {
    const {store} = this.props
    return (
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Redirect from='/' exact to='/user' />
            <Route exact path='/user' component={UserContainer} />
            <Route exact path='/events' component={EventsContainer} />
            <Route exact path='/repos' component={ReposContainer} />
          </Switch>
        </Router>
      </Provider>
    )
  }
}
