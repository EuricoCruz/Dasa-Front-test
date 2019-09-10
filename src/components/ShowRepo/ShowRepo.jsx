import React from 'react';
import RepoInfo from '../RepoInfo/RepoInfo'
import './ShowRepo.css'
const ShowRepos = (props) => {
  return (
    <div>
      <h2 className='repo-title title is-2'>Repositórios</h2>
      <div className='repo-table'>
          {props.repos.map((repo, index) => <RepoInfo key={index}repo={repo} />)}
      </div>
    </div>
  )
}

export default ShowRepos