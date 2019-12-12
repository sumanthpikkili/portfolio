import React from 'react';
import './Home.css';
import Sidebar from './components/Sidebar';
import About from './components/About';

export default class Home extends React.Component {
  state = {
    activeSideBarElement: <About />
  }

  sideBarCallBack = (sideBarElement) => {
    this.setState({activeSideBarElement: sideBarElement});
    console.log(this.state.activeSideBarElement);
  }

render() {
  return (
    <div className="home">
      <Sidebar activeSideBarCallBack={this.sideBarCallBack} />
      {this.state.activeSideBarElement}
    </div>
  );
}
}
