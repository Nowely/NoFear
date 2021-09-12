import {useStyles} from '../../styles'
import {useEffect, useState} from "react";
import Paper from '@material-ui/core/Paper';
import {Button, Container, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography} from "@material-ui/core";
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import {DisciplineCompetencyModel} from "./DisciplineCompetencyModel";
import {DisciplineOperationalModel} from "./DisciplineOperationalModel";
import {ModelingClasses} from "./ModelingClasses";
import {Statistics} from "./Statistics";

export const TeachingArea = (props) => {
  const classes = useStyles();
  const leftMenu = ['Компетентностная модель дисциплины', 'Оперативная модель дисциплины', 'Моделирование занятий', 'Статистика'];
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const renderSwitch = () => {
    switch (selectedIndex) {
      case 0:
        return <DisciplineCompetencyModel/>;
      case 1:
        return <DisciplineOperationalModel/>;
      case 2:
        return <ModelingClasses/>;
      case 3:
        return <Statistics/>;
      default:
        return null;
    }
  }

  return <>
    <Drawer
      variant="permanent"
      className={classes.drawer}
      classes={{paper: classes.drawerPaper,}}>
      <div className={classes.drawerContainer}>
        <List>
          {leftMenu.map((text, index) => (
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
    <div style={{width: '65%', marginLeft: '3%'}}>{renderSwitch()}</div>
  </>
}
