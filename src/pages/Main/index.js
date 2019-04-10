import React, { Component } from 'react';
import logo from '../../assets/logo.svg';
import api from '../../services/api';
import './styles.css';

export default class Main extends Component {
  state = {
    boxName: '',
  };

  handleSubmit = async e => {
    e.preventDefault();
    const response = await api.post('/boxes', {
      title: this.state.boxName,
    });
    this.props.history.push(`/box/${response.data._id}`);
    console.log(response.data);
  };
  handleInputChanges = (e) => {
    this.setState({
      boxName: e.target.value,
    });

  };

  render() {
    return (
      <div id="main-container">
        <form onSubmit={this.handleSubmit} >
          <img src={logo} alt="" />
          <input
            value={this.state.boxName}
            onChange={this.handleInputChanges}
            placeholder="Criar um box" />
          <button type="submit">Criar</button>
        </form>
      </div>
    );
  }
}
