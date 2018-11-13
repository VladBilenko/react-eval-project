import React, {Component} from 'react'
import AppBar from '@material-ui/core/AppBar'
import TitleComponent from '../Title'
import NavComponent from '../Nav'
import './header.css'

export default class HeaderComponent extends Component {
  render () {
    return (
      <AppBar position='static' color='default' className='header__wrapper'>
        <div className='container'>
          <div className='header__container'>
            <TitleComponent />
            <NavComponent />
          </div>
        </div>
      </AppBar>
    )
  }
}
