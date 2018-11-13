import React from 'react'
import PropTypes from 'prop-types'
import UserInfoItemComponent from '../User-info-item'

const UserContentComponent = (props) => {
  const {blog, createdAt, followers, following, gists, repos, updatedAt} = props
  const info = {blog, createdAt, followers, following, gists, repos, updatedAt}

  return (
    <div className='user__content'>
      <ul className='user__info'>
        {Object.keys(info).map(item => <UserInfoItemComponent key={item} title={item} value={info[item]} />)}
      </ul>
    </div>
  )
}

UserContentComponent.propTypes = {
  blog: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  updatedAt: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  following: PropTypes.number.isRequired,
  gists: PropTypes.number.isRequired,
  repos: PropTypes.number.isRequired
}

export default UserContentComponent
