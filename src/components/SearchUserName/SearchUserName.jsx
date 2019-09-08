import React, { Component } from 'react';
import './SearchUserName.css';
import octocat from './Octocat.png';
import axios from 'axios';
import bulma from 'bulma'; 

class SearchUserName extends Component {
  constructor() {
    super()
    this.state = {
      user: null,
      repos: [],
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    axios
      .get(`https://api.github.com/users/${this.state.user}`)
      .then(githubResponse => {
        this.setState({
          user: githubResponse.data,
        });
        console.log(this.state.user)
      });

    axios
      .get(`https://api.github.com/users/${this.state.user}/repos`)
      .then(githubResponse => {
        this.setState({
          repos: githubResponse.data,
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
    return(
      <div className='main-container'>
        <div className='header-content'>
        <img src={octocat} alt='github mascot' className='github-mascot'/>
        <h1 className='title is-1 main-title'>Github Finder</h1>
        </div>
      <h3 className='instruction-title'>Como Utilizar:</h3>
      <ul>
        <li>Digite o nome de usuário que você deseja encontrar</li>
        <li>Clique em buscar</li>
        <li>Você receberá informações do perfil e dos repositórios deste usuário</li>
      </ul>
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
      </div>
    )
  }
}

export default SearchUserName;
