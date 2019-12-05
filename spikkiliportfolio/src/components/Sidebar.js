import React from "react";
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

function Sidebar() {
  return (
    <div className="sidebar">
    <List disablePadding dense>
      <ListItem button>
        <ListItemText>About</ListItemText>
      </ListItem>
      <ListItem button>
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
  )
}

export default Sidebar
