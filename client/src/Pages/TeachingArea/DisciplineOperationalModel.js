import {Drawer, List, ListItem, ListItemIcon, ListItemText, Typography} from "@material-ui/core";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import {useStyles} from "../../styles";
import {useState} from "react";

export const DisciplineOperationalModel = (props) => {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  return <>
    <Typography paragraph>
      It is a long established fact that a reader will be distracted by the readable content of a page when looking at
      its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
      opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing
      packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will
      uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by
      accident, sometimes on purpose (injected humour and the like).
    </Typography>

    <Drawer
      anchor="right"
      variant="permanent"
      className={classes.drawer}
      classes={{paper: classes.drawerPaper,}}>
      <div className={classes.drawerContainer}>
        <List>
          {['Доработка модели дисциплины', 'План занятий', 'Задачи'].map((text, index) => (
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
  </>
}