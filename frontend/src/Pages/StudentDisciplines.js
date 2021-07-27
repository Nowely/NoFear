import {Drawer, List, ListItem, ListItemIcon, ListItemText, Typography} from "@material-ui/core";
import React, {useState} from "react";
import ListSubheader from "@material-ui/core/ListSubheader";
import {Link} from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import {makeStyles} from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import Modules from "./Modules"

const useStyles = makeStyles((theme) => ({

    list: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        position: 'relative',
        overflow: 'auto',
        maxHeight: 180,
        //marginTop: 200,
    },
    listSection: {
        backgroundColor: 'inherit',
    },
    ul: {
        backgroundColor: 'inherit',
        padding: 0,
    },
    rofl:{
        marginTop: 120,
    }

}));

export default function StudentDisciplines() {
    const classes = useStyles();
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

    return <>
        <Grid container  direction="row" justify="space-around">
            <Paper elevation={3} className={classes.rofl}>
            <List className={classes.list} subheader={<li />}>
                <ListSubheader>{'Дисциплины'}
                    <ListItem component={Link} to="/Modules" style={{ textDecoration: 'none' }}>
                        <ListItemText primary="БД" />
                    </ListItem>
                    <ListItem button selected={selectedIndex === 2} onClick={(event) => handleListItemClick(event, 2)}>
                        <ListItemText primary="Матан" />
                    </ListItem>
                    <ListItem button selected={selectedIndex === 3} onClick={(event) => handleListItemClick(event, 3)}>
                        <ListItemText primary="Нейронки" />
                    </ListItem>
                    <ListItem button selected={selectedIndex === 3} onClick={(event) => handleListItemClick(event, 3)}>
                        <ListItemText primary="Вычислительная математика" />
                    </ListItem>
                    <ListItem button selected={selectedIndex === 3} onClick={(event) => handleListItemClick(event, 3)}>
                        <ListItemText primary="Сети" />
                    </ListItem>
                </ListSubheader>
            </List>
            </Paper>
        </Grid>
    </>
}