import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Message from './components/Message';
import Button from './components/Button';
import Dashboard from './components/Dashboard';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import './styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isLogin: false };
  }

  // componentDidMount() {
  //   this.timerID = setInterval(() => this.tick(), 1000);
  // }

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
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="blogs" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
        {this.state.isLogin ? <Dashboard /> : <Message />}
        <Button title="change state" handleState={this.tick} />
      </div>
    );
  }
}

export default App;
