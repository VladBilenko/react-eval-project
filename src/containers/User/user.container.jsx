import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import PropTypes from 'prop-types'
import {getUser} from '../../actions'
import {PageWrapperComponent, UserInfoComponent, LoaderComponent} from '../../components'

const mapStateToProps = state => ({userData: state.user})
const mapDispatchToProps = dispatch => (bindActionCreators({
  getUser
}, dispatch))

@withRouter
@connect(mapStateToProps, mapDispatchToProps)
export default class UserContainer extends Component {
  static propTypes = {
    getUser: PropTypes.func.isRequired,
    userData: PropTypes.object
  }

  componentDidMount () {
    const {getUser, userData} = this.props

    // I suppose that we don`t need to update date, if not - just remove *if statement
    if (!userData) {
      getUser()
    }
  }

  render () {
    const {userData} = this.props
    return (
      <PageWrapperComponent>
        {
          userData ? <UserInfoComponent data={userData} /> : <LoaderComponent />
        }
      </PageWrapperComponent>
    )
  }
}
