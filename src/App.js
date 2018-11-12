import './app.scss'
import React, {Component} from 'react';
import {Provider} from 'react-redux'
import history from 'services/history';
import PropTypes from 'prop-types';
import {Route, Router, Switch, Redirect} from 'react-router-dom';
import User from "./containers/User";
import Events from "./containers/Events";
import Repos from "./containers/Repos";


export default class App extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  };

  render () {
    const {store} = this.props;
    return (
      <div styleName='app'>
        <Provider store={store}>
          <Router history={history}>
            <Switch>
              <Redirect from={'/'} exact to={'/user'} />
              <Route exact path='/user' component={User} />
              <Route exact path='/events' component={Events} />
              <Route exact path='/repos' component={Repos} />
            </Switch>
          </Router>
        </Provider>
      </div>
    )
  }
}
