import './header.scss';
import React, {Component} from 'react';
import AppBar from "@material-ui/core/AppBar/AppBar";
import Title from "../Title";
import Nav from "../Nav";

export default class Header extends Component {
  static propTypes = {};

  render () {
    return (
      <AppBar position="static" color="default">
        <div styleName='header__container'>
          <Title />
          <Nav />
        </div>
      </AppBar>
    )
  }
}
