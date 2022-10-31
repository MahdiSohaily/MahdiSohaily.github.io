import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';
import Layout from './pages/Layout';
import './styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isLogin: false };
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick = () => {
    this.setState({
      isLogin: true,
    });
  };

  render() {
    return (

    );
  }
}

export default App;
