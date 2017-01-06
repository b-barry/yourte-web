import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';
import HomeContainer from './home/homeContainer';
import DashBoardContainer from './dashboard/dashboardContainer';
import WallContainer from './wall/wallContainer';
import ColocationRequestContainer from './colocationRequest/colocationRequestContainer.js'

const Outer = (props) => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to tipi.be</h2>
    </div>
    <div><Links />{props.children}</div>
  </div>
)
// const Home = () => <HomeContainer><HomeContainer/>;
const About = () => <div><h1>About</h1></div>;
const Contact = () => <div><h1>Contact</h1></div>;

const Links = () =>
  <nav>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
    <Link to="/colocation">coloc</Link>
  </nav>

class App extends Component {
  render() {
    return (
      <Router history={ hashHistory }>
        <Route path="/" component={Outer}>
          <IndexRoute component={HomeContainer}></IndexRoute>
          <Route path="about" component={About}></Route>
          <Route path="contact" component={Contact}></Route>
          <Route path="dashboard" component={DashBoardContainer}></Route>
          <Route path="wall" component={WallContainer}></Route>
          <Route path="colocation" component={ColocationRequestContainer}></Route>
        </Route>
      </Router>
    );

    // return <HomeContainer></HomeContainer>
  }
}

export default App;