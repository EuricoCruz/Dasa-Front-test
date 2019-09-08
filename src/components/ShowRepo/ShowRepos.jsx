import React from 'react';

const RepoInfo = (props) => {
  return (
  <div>
    <a className='user-avatar' href={props.repo.html_url}><h1>{props.repo.name}</h1></a>
    <p> {props.repo.stargazers_count} Stars</p>
  </div>
  )
}

export default RepoInfo;