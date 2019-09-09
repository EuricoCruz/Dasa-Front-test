import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SearchUserName from './components/SearchUserName/SearchUserName';
import UserInfo from './components/UserInfo/UserInfo';
import ShowRepos from './components/ShowRepo/ShowRepo';
import RepoInfo from './components/RepoInfo/RepoInfo';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders SearchUserName without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SearchUserName />, div);
  ReactDOM.unmountComponentAtNode(div);
});



it('renders UserInfo with props without crashing', () => {
  const div = document.createElement('div');
  const fakeUser = {
    login: "EuricoCruz",
    avatar_url: "https://avatars0.githubusercontent.com/u/45723532?v=4"
  }
  ReactDOM.render(<UserInfo user={fakeUser}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders RepoInfo without crashing', () => {
  const div = document.createElement('div');
  const fakeRepo = {
    html_url: 'this is a fake repo', 
    name: '', 
    startgazers_count: 0 
  }
  ReactDOM.render(<RepoInfo repo={fakeRepo}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders ShowRepo without crashing', () => {
  const div = document.createElement('div');
  const fakeRepos = [{
    html_url: 'this is a fake repo', 
    name: '', 
    startgazers_count: 0 
    },
    {
      html_url: 'this is a fake repo', 
      name: '', 
      startgazers_count: 0 
      }]
  ReactDOM.render(<ShowRepos repos={fakeRepos}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
