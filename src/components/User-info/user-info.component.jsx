import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './user-info.css'
import UserHeadComponent from '../User-head'
import UserContentComponent from '../User-content'

class UserInfoComponent extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired
  }

  render () {
    const {head, main} = this.props.data
    return (
      <React.Fragment>
        <UserHeadComponent {...head} />
        <UserContentComponent {...main} />
      </React.Fragment>
    )
  }
}

export default UserInfoComponent
