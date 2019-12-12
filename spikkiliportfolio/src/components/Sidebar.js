import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import About from './About';
import Projects from './Projects';

export default class Sidebar extends React.Component {

    render() {
      return (
        <div className="sidebar">
        <List disablePadding dense>
         <ListItem button onClick={() => this.props.activeSideBarCallBack(<About />)}>
        <ListItemText>About</ListItemText>
      </ListItem>
      <ListItem button onClick={() => this.props.activeSideBarCallBack(<Projects />)}>
        <ListItemText>Projects</ListItemText>
      </ListItem>
      <ListItem button>
        <ListItemText>Timeline</ListItemText>
      </ListItem>
      <ListItem button>
        <ListItemText>Contact</ListItemText>
      </ListItem>
    </List>
    </div>
  );
}
}
