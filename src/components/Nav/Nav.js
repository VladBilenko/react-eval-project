import React, {Component} from 'react';
import NavItem from "../Nav-item";
import './nav.scss';
import navConfig from '../../constants/nav.config';

class Nav extends Component {


  render() {

    return (
      <div styleName="nav__container">
        {navConfig.map((item) => <NavItem {...item} />)}
      </div>
    );
  }
}

export default Nav;
