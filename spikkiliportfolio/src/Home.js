import React from 'react';
import './Home.css';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Contact from './components/Contact';

export default class Home extends React.Component {
  state = {
    activeSideBarElement: <About />
  }

  sideBarCallBack = (sideBarElement) => {
    this.setState({activeSideBarElement: sideBarElement});
  }

render() {
  return (
    <div className="home">
    <div className="header"> Sumanth Pikkili </div>
    <div className="socialMediaContainer">
    <Contact />
    </div>
    <span class="topFadingLine"></span>
      <Sidebar activeSideBarCallBack={this.sideBarCallBack} />
      {this.state.activeSideBarElement}
    </div>
  );
}
}
