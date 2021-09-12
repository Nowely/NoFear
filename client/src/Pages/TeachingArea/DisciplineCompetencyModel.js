import {Drawer, List, ListItem, ListItemIcon, ListItemText, Typography} from "@material-ui/core";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import {useStyles} from "../../styles";
import {useState} from "react";

export const DisciplineCompetencyModel = (props) => {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  return <>
    <Typography paragraph>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
      standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
      type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
      remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
      Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
      of Lorem Ipsum.
    </Typography>

    <Drawer
      anchor="right"
      variant="permanent"
      className={classes.drawer}
      classes={{paper: classes.drawerPaper,}}>
      <div className={classes.drawerContainer}>
        <List>
          {['Доработка модели дисциплины', 'Задачи'].map((text, index) => (
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