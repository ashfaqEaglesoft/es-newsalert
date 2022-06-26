import './App.css';

import React, { Component } from 'react'

import NavBar from './components/NavBar';
import NewsComponents from './components/NewsComponents';

export default class App extends Component {
  render() {
    return (
      <>
      <NavBar/>
      <NewsComponents/>
      </>
    )
  }
}

