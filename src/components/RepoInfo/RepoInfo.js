import React from 'react';
import './RepoInfo.css'

const RepoInfo = (props) => {
  return (
  <div className='repo-card'>
    <a className='user-avatar' href={props.repo.html_url}><h1>{props.repo.name.replace(/-/gi, ' ')}</h1></a>
    <p> {props.repo.stargazers_count} Stars</p>
  </div>
  )
}

export default RepoInfo;