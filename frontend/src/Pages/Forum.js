import React from 'react'
import '../Forum.css'
import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    
    root: {
        display: 'flex',
        '& > *': {
          margin: theme.spacing(1),
        },
    },

    massage2: {
        width: '15%',
        height: 150,
        marginTop: 150,
        marginLeft: 750
    },

    search: {
      position: 'relative',
      marginRight: theme.spacing(2),
      marginLeft: 0,
      marginTop: 80,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));
  
export default function Forum() {
    const classes = useStyles();

    return (
        <>
            Тут будет форум
        {/*<div className="dadaya">*/}
        {/*    <div className={classes.search}>*/}
        {/*        <div className={classes.searchIcon}>*/}
        {/*            <SearchIcon />*/}
        {/*        </div>*/}
        {/*        <div style={{ width: 300 }}>*/}
        {/*            <InputBase*/}
        {/*                placeholder="Search…"*/}
        {/*                classes={{*/}
        {/*                    root: classes.inputRoot,*/}
        {/*                    input: classes.inputInput,*/}
        {/*                }}*/}
        {/*                inputProps={{ 'aria-label': 'search' }}*/}
        {/*                />*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*</div>*/}

        {/*<div className={classes.root}>*/}
        {/*    <ButtonGroup*/}
        {/*        orientation="vertical"*/}
        {/*        color="primary"*/}
        {/*        aria-label="vertical outlined primary button group"*/}
        {/*    >*/}
        {/*        <Button>My threads</Button>*/}
        {/*        <Button>Group threads</Button>*/}
        {/*        <Button>Marked</Button>*/}
        {/*    </ButtonGroup>*/}
        {/*</div>*/}
        {/*<Grid container  direction="column" justify="space-around" alignItems="flex-start">*/}
        {/*    <Paper className={classes.massage2} elevation="3">*/}
        {/*        Привет всем, нужна помощь. У меня не получается то то и то то*/}
        {/*        <TextField id="standard-basic"/>*/}
        {/*        <Button>Send</Button>*/}
        {/*    </Paper>*/}
        {/*</Grid>*/}
        </>
    ) 
}