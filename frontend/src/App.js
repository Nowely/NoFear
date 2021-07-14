import 'fontsource-roboto';
import React from 'react';
import {Route} from 'react-router';
import Layout from './components/Layout';
import {TeachingArea} from './Pages/TeachingArea/TeachingArea';
import {StudentArea} from "./Pages/StudentArea/StudentArea";
import {StudentRanking} from "./Pages/StudentRanking/StudentRanking";
import {DisciplineRanking} from "./Pages/DisciplineRanking/DisciplineRanking";
import {ComingEvents} from "./Pages/ComingEvents/ComingEvents";

export default function App() {

  return (
    <Layout>
      <Route key="П. Личный Кабинет" exact path='/' component={TeachingArea}/>
      <Route key="С. Личный кабинет" path='/Account' component={StudentArea}/>
      <Route key="Рейтинг дисциплин" path='/StudentRanking' component={StudentRanking}/>
      <Route key="Рейтинг учащихся" path='/DisciplineRanking' component={DisciplineRanking}/>
      <Route key="Ближайшие мероприятия" path='/ComingEvents' component={ComingEvents}/>
    </Layout>
  );
}


// Код Льва App.js
// import React from "react";
// import NavBar from "./components/NavBar";
// import {BrowserRouter} from "react-router-dom";
// import AppRouter from "./components/AppRouter";
//
// const App = () => {
//     return (
//         <BrowserRouter>
//             <NavBar/>
//             <AppRouter/>
//         </BrowserRouter>
//     )
// }
//
// export default App;

// Код Ильи
// import React from 'react';
// import { AppBar, Container, Toolbar, IconButton, Typography, Box } from '@material-ui/core';
// import MenuIcon from '@material-ui/icons/Menu';
// import Button from '@material-ui/core/Button';
// import { makeStyles } from "@material-ui/core/styles";
// import { withStyles } from '@material-ui/core/styles';
// import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';
// import ListItemText from '@material-ui/core/ListItemText';
// import Collapse from '@material-ui/core/Collapse';
// import ExpandLess from '@material-ui/icons/ExpandLess';
// import ExpandMore from '@material-ui/icons/ExpandMore';
// import { Link } from 'react-router-dom'
// import {Route, BrowserRouter as Router} from 'react-router-dom';
// import Grid from '@material-ui/core/Grid';
// import GroupTable from './GroupTable.js';
// import PersonalTable from './PersonalTable.js';
// import LK from './LK.js';
// import Forum from './Forum.js';
// // import Application from './Application';
// import Advice from "./Advice";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1
//   },
//   menuButton: {
//     marginRight: theme.spacing(1)
//   },
//   title: {
//     flexGrow: 1
//   },

//   nested:{
//     paddingLeft: theme.spacing(6)
//   }
// }))

// const StyledMenu = withStyles({
//   paper: {
//     border: '1px solid #d3d4d5',
//   },
// })((props) => (
//   <Menu
//     elevation={0}
//     getContentAnchorEl={null}
//     anchorOrigin={{
//       vertical: 'bottom',
//       horizontal: 'center',
//     }}
//     transformOrigin={{
//       vertical: 'top',
//       horizontal: 'center',
//     }}
//     {...props}
//   />
// ));

// const StyledMenuItem = withStyles((theme) => ({
//   root: {
//     '&:focus': {
//       backgroundColor: theme.palette.primary.main,
//       '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
//         color: theme.palette.common.white,
//       },
//     },
//   },
// }))(MenuItem);

// function App() {

//   const [open, setOpen] = React.useState(false);

//   const qwe = () => {
//     setOpen(!open);
//   };

//   const [anchorEl, setAnchorEl] = React.useState(null);

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const classes = useStyles();
//   return (
//     <>
//     <Router>
//       <AppBar position="fixed">
//         <Container fixed>
//           <Toolbar>
//             <IconButton edge="start" color="inherit" aria-label="menu" className={classes.menuButton} onClick={handleClick}>
//               <MenuIcon />
//             </IconButton>
//             <Typography variant="h6" className={classes.title}>
//               Menu  
//             </Typography>
//             <StyledMenu
//               id="customized-menu"
//               anchorEl={anchorEl}
//               keepMounted
//               open={Boolean(anchorEl)}
//               onClose={handleClose}
//             >
//               <StyledMenuItem component={Link} to="/LK">
//                 <ListItemText primary="Личный кабинет" />
//               </StyledMenuItem>
//               <StyledMenuItem onClick={qwe}>
//                 <ListItemText primary="Рейтинг" />
//                 {open ? <ExpandLess /> : <ExpandMore />}
//               </StyledMenuItem>
//               <Collapse in={open} timeout="auto" unmountOnExit>
//                   <StyledMenuItem button className={classes.nested} component={Link} to="/GroupTable">
//                     <ListItemText primary="Общий рейтинг" />
//                   </StyledMenuItem>
//                   <StyledMenuItem button className={classes.nested} component={Link} to="/PersonalTable">
//                     <ListItemText primary="Личный рейтинг" />
//                   </StyledMenuItem>
//               </Collapse>
//               <StyledMenuItem component={Link} to="/Forum">
//                 <ListItemText primary="Форум" />
//               </StyledMenuItem>
//               {/* <StyledMenuItem component={Link} to="/Application"> 
//                 <ListItemText primary="Заявка" />
//               </StyledMenuItem> */}
//             </StyledMenu>
//             <Box mr={3}>
//               <Button color="inherit" variant="outlined">
//                 Log In
//               </Button>
//             </Box>
//             <Button color="secondary" variant="contained">
//               Sign Up
//             </Button>
//           </Toolbar>
//         </Container>
//       </AppBar>  
//     <Route path="/GroupTable">
//       <div>
//         <GroupTable /> 
//       </div>
//     </Route>
//     <Route path="/LK"> 
//       <LK />
//     </Route>
//     <Route path="/PersonalTable">
//       <Grid container direction="row" justify="space-around" alignItems="flex-start">
//         <div>
//           <PersonalTable />
//         </div>
//         <div>
//           <Advice />
//         </div>        
//       </Grid>    
//     </Route>
//     <Route path="/Forum">
//       <Forum />
//     </Route>
//     {/* <Route path="/Application">
//       <Application />
//     </Route> */}
//     </Router>
//     </>
//   );
// }

// export default App;


