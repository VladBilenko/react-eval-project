import React from 'react'
import PropTypes from 'prop-types'
import Avatar from '@material-ui/core/Avatar'
import './user-head.css'

const UserHeadComponent = (props) => {
  const {avatar, name, bio} = props

  return (
    <div className='user__head'>
      <Avatar alt={name} srcSet={avatar} className='user__img' />
      <div className='user__head user__head_info'>
        <h3>{name}</h3>
        <p>{bio}</p>
      </div>
    </div>
  )
}

UserHeadComponent.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired
}

export default UserHeadComponent
