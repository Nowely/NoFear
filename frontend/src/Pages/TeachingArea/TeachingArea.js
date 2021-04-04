import {useStyles} from '../../styles'
import {useEffect, useState} from "react";
import Paper from '@material-ui/core/Paper';
import {Button, Container, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography} from "@material-ui/core";
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import {AllDiscipline} from "./AllDiscipline";

export const TeachingArea = (props) => {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const renderSwitch = () => {
    switch (selectedIndex) {
      case 0:
        return <AllDiscipline/>;
      case 1:
      default:
        return 'ASDASDsadasdasdasd';
    }
  }

  return <>
    <Drawer
      variant="permanent"
      className={classes.drawer}
      classes={{paper: classes.drawerPaper,}}>
      <div className={classes.drawerContainer}>
        <List>
          {['Все дисциплины', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem
              button key={text}
              selected={selectedIndex === index}
              onClick={(event) => handleListItemClick(event, index)}
            >
              <ListItemText primary={text}/>
            </ListItem>
          ))}
        </List>
      </div>
    </Drawer>
    {renderSwitch()}
  </>
}