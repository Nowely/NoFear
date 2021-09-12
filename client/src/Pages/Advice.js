import React from 'react'
import './Advice.css'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    root: {
        width: '100%',
        marginTop: 100,
        height: 162,
    },
});

export default function Advice() {
    const classes = useStyles();
    
    return (
        <>
            <Paper className={classes.root} elevation={3}>
                Здесь будуь полные советы для улучшения оценок
            </Paper>
        </>
    ) 
}