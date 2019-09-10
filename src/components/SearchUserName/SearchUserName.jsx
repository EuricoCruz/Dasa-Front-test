import React, { Component } from 'react';
import './SearchUserName.css';
import octocat from './Octocat.png';
import axios from 'axios';
import bulma from 'bulma'; 
import UserInfo from '../UserInfo/UserInfo'
import ShowRepo from '../ShowRepo/ShowRepo'

class SearchUserName extends Component {
  constructor() {
    super()
    this.state = {
      user: null,
      repos: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    axios
      .get(`https://api.github.com/users/${this.state.user}`)
      .then(githubResponse => {
        this.setState({
          username: githubResponse.data,
        });
        console.log(this.state.username)
      });

    axios
      .get(`https://api.github.com/users/${this.state.user}/repos?page=1&per_page=100`)
      .then(githubResponse => {
        this.setState({
          repos: githubResponse.data,
          showUser: true,
        });
        console.log(this.state.repos)
      });
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };  

  render() {
    if (this.state.showUser) {
      return (
        <div className='main-container'>
          <div className='header-content'>
            <img src={octocat} alt='github mascot' className='github-mascot'/>
            <h1 className='title is-1 main-title'>Github Finder</h1>
          </div>
          <h3 className='instruction-title'>Como Utilizar:</h3>
          <ol>
            <li>Digite o nome de usuário que você deseja encontrar</li>
            <li>Clique em buscar</li>
            <li>Você receberá informações do perfil e dos repositórios deste usuário</li>
          </ol>
          <form onSubmit={e => this.handleSubmit(e)}>
            <div className= 'form-container'> 

            <label className='label'>Usuário:</label>
            <input className="input is-primary"
              type="text"
              name="user"
              placeholder="Digite o nome de usuário"
              onChange={event => this.handleChange(event)}
              />
            <button type="submit" className="button is-link">Buscar</button>
              </div>
          </form>
          <div className='search-result'> 
            <UserInfo user={this.state.username} />
            <ShowRepo repos={this.state.repos} />
          </div>
        </div>
      );
    } else {
      return (
        <div className='main-container'>
          <div className='header-content'>
            <img src={octocat} alt='github mascot' className='github-mascot'/>
            <h1 className='title is-1 main-title'>Github Finder</h1>
          </div>
          <div className='instructions'>
          <h3 className='instruction-title'>Como Utilizar:</h3>
            <ul>
              <li>Digite o nome de usuário que você deseja encontrar</li>
              <li>Clique em buscar</li>
              <li>Você receberá informações do perfil e dos repositórios deste usuário</li>
            </ul>
          </div>
          <form onSubmit={e => this.handleSubmit(e)}>
            <div className='form-container'>
              <label className='label'>Usuário:</label>
            <input className="input is-primary"
              type="text"
              name="user"
              placeholder="Digite o nome do usuário"
              onChange={event => this.handleChange(event)}
            />
            <button type="submit" className="button is-link">Buscar</button>

            </div>
          </form>
        </div>
      );
    }
  }
}

export default SearchUserName;
