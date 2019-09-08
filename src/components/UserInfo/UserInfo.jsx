import React from 'react';
import './UserInfo.css'

const UserInfo = (props) => {
  return (
    <div className='user-container'>
      <img className='user-avatar' src={props.user.avatar_url} alt='user'/>
      <h3>{props.user.login}</h3>
    </div>
  )
}

export default UserInfo;