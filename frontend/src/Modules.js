import React from 'react'
import './Modules.css'
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import SpeakerNotesIcon from '@material-ui/icons/SpeakerNotes';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import { Link } from 'react-router-dom'
import {Route, BrowserRouter as Router} from 'react-router-dom';
import Lection1 from './Lection1';

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default function Modules() {
  const classes = useStyles();

  return (
    <div className='ofc'>
      <Paper className={classes.root}>
        <Typography variant="inherit">Лекции</Typography>
        <MenuList>
          <MenuItem component={Link} to="/Lection1">
            <ListItemIcon>
              <SpeakerNotesIcon fontSize="small" />
            </ListItemIcon >
              <Typography variant="inherit">Лекция 1</Typography>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <SpeakerNotesIcon fontSize="small" />
            </ListItemIcon>
            <Typography variant="inherit">Лекция 2</Typography>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <SpeakerNotesIcon fontSize="small" />
            </ListItemIcon>
            <Typography variant="inherit" noWrap>
              Лекция 3
            </Typography>
          </MenuItem>
        </MenuList>
        <Typography variant="inherit">Лабораторные работы</Typography>
        <MenuList>
          <MenuItem>
            <ListItemIcon>
              <LaptopMacIcon fontSize="small" />
            </ListItemIcon>
            <Typography variant="inherit">Лабораторная работа 1</Typography>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <LaptopMacIcon fontSize="small" />
            </ListItemIcon>
            <Typography variant="inherit">Лабораторная работа 2</Typography>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <LaptopMacIcon fontSize="small" />
            </ListItemIcon>
            <Typography variant="inherit" noWrap>
              Лабораторная работа 3
            </Typography>
          </MenuItem>
        </MenuList>
      </Paper>
      <Route path="/Lection1"> 
        <Lection1 />
      </Route>
    </div>  
    
  );
}