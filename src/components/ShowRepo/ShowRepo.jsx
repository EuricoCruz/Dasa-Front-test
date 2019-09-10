import React from 'react';
import RepoInfo from '../RepoInfo/RepoInfo'
import './ShowRepo.css'
const ShowRepos = (props) => {
  return (
      <div className='repo-table'>
        {props.repos.map((repo, index) => <RepoInfo key={index}repo={repo} />)}
      </div>
  )
}

export default ShowRepos