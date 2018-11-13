import React, {Component} from 'react'
import PropTypes from 'prop-types'
import HeaderComponent from '../Header'
import './page-wrapper.css'

export default class PageWrapperComponent extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]).isRequired
  }

  render () {
    const {children} = this.props
    return (
      <div>
        <HeaderComponent />
        <div className='container page-wrapper'>
          {children}
        </div>
      </div>
    )
  }
}
