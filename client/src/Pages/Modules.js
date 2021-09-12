import React from 'react'
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

const useStyles = makeStyles({
  root: {
    width: 800,
  },
});

export default function Modules() {
  const classes = useStyles();

  return (
    <div style={{marginLeft: '18%', marginTop: '10%'}}>
      <Paper className={classes.root}>
        <Typography variant="inherit" variant="h4">Лекции</Typography>
        <MenuList>
          <MenuItem component={Link} to="/Lection1">
            <ListItemIcon>
              <SpeakerNotesIcon fontSize="small" />
            </ListItemIcon >
              <Typography variant="inherit" variant="h5">Лекция 1</Typography>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <SpeakerNotesIcon fontSize="small" />
            </ListItemIcon>
            <Typography variant="inherit" variant="h5">Лекция 2</Typography>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <SpeakerNotesIcon fontSize="small" />
            </ListItemIcon>
            <Typography variant="inherit" variant="h5" noWrap>
              Лекция 3
            </Typography>
          </MenuItem>
        </MenuList>
        <Typography variant="inherit" variant="h4">Лабораторные работы</Typography>
        <MenuList>
          <MenuItem>
            <ListItemIcon>
              <LaptopMacIcon fontSize="small" />
            </ListItemIcon>
            <Typography variant="inherit" variant="h5">Лабораторная работа 1</Typography>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <LaptopMacIcon fontSize="small" />
            </ListItemIcon>
            <Typography variant="inherit" variant="h5">Лабораторная работа 2</Typography>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <LaptopMacIcon fontSize="small" />
            </ListItemIcon>
            <Typography variant="inherit" noWrap variant="h5">
              Лабораторная работа 3
            </Typography>
          </MenuItem>
        </MenuList>
      </Paper>
    </div>  
    
  );
}