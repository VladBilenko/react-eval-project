import React, {Component} from 'react'
import NavItemComponent from '../Nav-item'
import './nav.scss'
import navConfig from '../../constants/nav.config'

class NavComponent extends Component {
  render () {
    return (
      <div styleName='nav__container'>
        {navConfig.map((item) => <NavItemComponent key={item.id} {...item} />)}
      </div>
    )
  }
}

export default NavComponent
