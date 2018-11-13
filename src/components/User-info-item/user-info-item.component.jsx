import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './user-info-item.css'
import DateUtil from '../../utils/Date-util'

class UserInfoItemComponent extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]).isRequired
  }

  render () {
    const {title, value} = this.props

    const transformedValue = (title === 'created_at' || title === 'updated_at') ? DateUtil.transformResponseDateString(value)
      : (title === 'blog') ? <a className='main-link' href={value}>{value}</a> : value

    return (
      <li className='info__item'>
        <span className='info__title'>{title.replace(/_/g, ' ')}</span>: {transformedValue}
      </li>
    )
  }
}

export default UserInfoItemComponent
