import React from 'react';
import RepoInfo from '../RepoInfo/RepoInfo'

const ShowRepos = (props) => {
  return (
      <div>
        {props.repos.map((repo, index) => <RepoInfo key={index}repo={repo} />)}
      </div>
  )
}

export default ShowRepos