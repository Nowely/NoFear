import {Drawer, List, ListItem, ListItemIcon, ListItemText, Typography} from "@material-ui/core";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import {useStyles} from "../../styles";
import {useState} from "react";

export const ModelingClasses = (props) => {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  return <>
    <Typography paragraph>
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin
      literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
      College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and
      going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes
      from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
      written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first
      line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
    </Typography>

    <Drawer
      anchor="right"
      variant="permanent"
      className={classes.drawer}
      classes={{paper: classes.drawerPaper,}}>
      <div className={classes.drawerContainer}>
        <List>
          {['План занятий', 'Задачи'].map((text, index) => (
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