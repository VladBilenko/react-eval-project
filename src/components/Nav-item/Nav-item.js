import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {NavLink} from "react-router-dom";
import './nav-item.css';

class NavItem extends Component {
  static propTypes = {
    route:  PropTypes.string.isRequired,
    text:  PropTypes.string.isRequired
  };

  render() {
    const {route, text} = this.props;
    return (
      <li className="nav__item">
        <NavLink className='nav__link' activeClassName={'active'} to={route}>{text}</NavLink>
      </li>
    );
  }
}

export default NavItem;
