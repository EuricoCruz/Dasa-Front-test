import React from 'react';
import './UserInfo.css'

const UserInfo = (props) => {
  return (
    <div className='user-container'>
      <img className='user-avatar' src={props.user.avatar_url} alt='user'/>
      <h3 > Perfil de </h3>
      <h2 className='username subtitle is-2'> {props.user.login}</h2>
    </div>
  )
}

export default UserInfo;