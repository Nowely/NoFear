import React, { PureComponent } from 'react';
import './LK.css';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Slider from '@material-ui/core/Slider';
import { Link } from 'react-router-dom'
import {Route, BrowserRouter as Router} from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import Icon from '@material-ui/core/Icon';
import PersonIcon from '@material-ui/icons/Person';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import Kaneki from './Kaneki.png';
import Modules from './Modules';

const useStyles = makeStyles((theme) => ({

    root: {
        width: '25%',
        height: 500,
        marginTop: 80,
    },

    avatar: {
        width: theme.spacing(10),
        height: theme.spacing(10),
    },

    underthing: {
        width: '25%',
        height: 200,
        marginTop: 50,
    },

    slider: {
        width: 300,
    },

    list: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        position: 'relative',
        overflow: 'auto',
        maxHeight: 180,
      },
      listSection: {
        backgroundColor: 'inherit',
      },
      ul: {
        backgroundColor: 'inherit',
        padding: 0,
      },

}));

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});
  
const data = [
    {
      name: 'week 1',
      points: 6,
      impoints: 1,
      normal: 2,
    },
    {
      name: 'week 2',
      points: 3,
      impoints: 2,
      normal: 2,
    },
    {
      name: 'week 3',
      points: 10,
      impoints: 3,
      normal: 2,
    },
    {
      name: 'week 4',
      points: 5,
      impoints: 1,
      normal: 2,
    },
    {
      name: 'week 5',
      points: 2,
      impoints: 2,
      normal: 2,
    },
    {
      name: 'week 6',
      points: 3,
      impoints: 3,
      normal: 2,
    },
    {
      name: 'week 7',
      points: 7,
      impoints: 1,
      normal: 2,
    },
  ];

  const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
          <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
            <CloseIcon />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
  });
  
  const DialogContent = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiDialogContent);
  
  const DialogActions = withStyles((theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(1),
    },
  }))(MuiDialogActions);

export default function LK() {

    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const [result, setResult] = React.useState();
  
    
    const handleClickOpen = () => {
        let div = document.getElementsByClassName("Mui-selected");
        let arr = Array.prototype.slice.call( div )
        setResult(arr[0].childNodes[0].childNodes[0].textContent)
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const [selectedIndex, setSelectedIndex] = React.useState(1);
  
     const  handleListItemClick  = (event, index) => {
         setSelectedIndex(index);
         console.log(event.target)
     };


    return (
        <>
        <Grid container direction="row" justify="space-around" alignItems="flex-start">
            <Paper className={classes.root} elevation={3}>
                <Grid container  direction="column" justify="flex-start" className="net">
                    <div>
                        <Avatar alt='src' src={Kaneki} className={classes.avatar} />
                    </div>
                    <div>
                        <PersonIcon />
                        name: qwerty (Иван Иванов Иванович)
                    </div>
                    <div>
                        <Icon>list</Icon>
                        position: 23
                    </div>
                    <div>
                        <Icon>group</Icon>
                        group: БПМ-19-1
                    </div>
                </Grid>
            </Paper>

            <LineChart
                width={700}
                height={500}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                    
                }}
                className={classes.root}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" onClick={(...rest) => {
                    for (let key in rest) {
                        if (!isNaN(rest[key])) {
                            console.log(rest[key])
                        }
                    } 
                    }} />
                <YAxis />
                <Tooltip />
                <Line
                    type="monotone"
                    dataKey="points"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                <Line type="monotone" dataKey="impoints" stroke="#82ca9d" />
                <Line type="monotone" dataKey="normal" stroke="#FF4500" />
            </LineChart>

            <Paper className={classes.root} elevation={3}>
                <div className="net">
                    Меньше всего баллов ты получил на 5 неделе, 
                    там были триггеры. Почитай это triggers.com и будет тебе счастье :)
                </div>
            </Paper>

            <Paper className={classes.underthing} elevation={3}>    
                <Grid container  direction="row" justify="space-around">
                    {/* <div  className={classes.root}> */}
                        <div /*className={classes.list}*/>
                            <List className={classes.list} subheader={<li />}>
                                <ListSubheader>{`Week 1`}
                                    <ListItem button selected={selectedIndex === 1} onClick={(event) => handleListItemClick(event, 1)}>
                                        <ListItemText primary="Практическое занятие 1" /> 
                                    </ListItem>
                                    <ListItem button selected={selectedIndex === 2} onClick={(event) => handleListItemClick(event, 2)}>
                                        <ListItemText primary="Работа на лекции 1" />
                                    </ListItem>
                                    <ListItem button selected={selectedIndex === 3} onClick={(event) => handleListItemClick(event, 3)}>
                                        <ListItemText primary="Лабораторная работа 1" />
                                    </ListItem>
                                </ListSubheader>
                                <ListSubheader>{`Week 2`}
                                    <ListItem button selected={selectedIndex === 4} onClick={(event) => handleListItemClick(event, 4)}>
                                        <ListItemText primary="Практическое занятие 2" />
                                    </ListItem>
                                    <ListItem button selected={selectedIndex === 5} onClick={(event) => handleListItemClick(event, 5)}>
                                        <ListItemText primary="Работа на лекции 2" />
                                    </ListItem>
                                    <ListItem button selected={selectedIndex === 6} onClick={(event) => handleListItemClick(event, 6)}>
                                        <ListItemText primary="Лабораторная работа 2" />
                                    </ListItem>
                                </ListSubheader>
                                <ListSubheader>{`Week 3`}
                                    <ListItem button selected={selectedIndex === 7} onClick={(event) => handleListItemClick(event, 7)}>
                                        <ListItemText primary="Практическое занятие 3" />
                                    </ListItem>
                                    <ListItem button selected={selectedIndex === 8} onClick={(event) => handleListItemClick(event, 8)}>
                                        <ListItemText primary="Работа на лекции 3" />
                                    </ListItem>
                                    <ListItem button selected={selectedIndex === 9} onClick={(event) => handleListItemClick(event, 9)}>
                                        <ListItemText primary="Лабораторная работа 3" />
                                    </ListItem>
                                </ListSubheader>
                            </List>
                        </div>
                        <div>
                            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                                Подробнее
                            </Button>
                        </div>
                        <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                            <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                                {result}
                            </DialogTitle>
                            <DialogContent dividers>
                            <Typography gutterBottom>
                                В этой activity мы работаем над тем и тем...
                            </Typography>
                            <Typography gutterBottom>
                                Ты получил: пока не выставлено 
                            </Typography>
                            <Typography gutterBottom>
                                А сколько бы ты хотел?
                            </Typography>
                            <div className={classes.slider}>
                            <Slider
                                defaultValue={1}
                                aria-labelledby="discrete-slider"
                                valueLabelDisplay="auto"
                                step={1}
                                marks
                                min={1}
                                max={5}
                            />
                            </div>
                            </DialogContent>
                            <DialogActions>
                            <Button autoFocus onClick={handleClose} color="primary">
                                Save changes
                            </Button>
                            </DialogActions>
                        </Dialog>
                    {/* </div> */}
                </Grid>    
            </Paper>       
            <Paper className={classes.underthing} elevation={3}>    
                <Grid container  direction="row" justify="space-around">
                    <div /*className={classes.list}*/>
                        <List className={classes.list} subheader={<li />}>
                            <ListSubheader>{'Дисциплины'}
                                <ListItem component={Link} to="/Modules">
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
                    </div>
                </Grid>
            </Paper>   
        </Grid>
        <Router>
            <Route path="/Modules">
                <Modules />
            </Route>
        </Router>
        </>
    ) 
}




