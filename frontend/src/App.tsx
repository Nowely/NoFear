import 'fontsource-roboto';
import React, {useEffect, useState} from 'react';
import {Route} from 'react-router';
import Layout from './components/Layout';
import {TeachingArea} from './Pages/TeachingArea/TeachingArea';
import {StudentArea} from "./Pages/StudentArea/StudentArea";
import {StudentRanking} from "./Pages/StudentRanking/StudentRanking";
import {DisciplineRanking} from "./Pages/DisciplineRanking/DisciplineRanking";
import {ComingEvents} from "./Pages/ComingEvents/ComingEvents";
import {CabinetType} from "./utils/consts";
import TeachView from "./components/TeachView";
import AppRouter from "./components/AppRouter";
import {metodistroutes, studentRoutes, teacherRoutes} from "./routes";
import {Store} from "./Stores/Store";
import {observer} from "mobx-react";

export default observer(() => {
    const [routes, setRoutes] = useState<any[]>([]);

    useEffect(() => {
        switch (Store.instance.currentView) {
            case CabinetType.Student:
                setRoutes(studentRoutes);
                break;
            case CabinetType.Teacher:
                setRoutes(teacherRoutes);
                break;
            case CabinetType.Methodist:
                setRoutes(metodistroutes);
                break;
        }
    }, [Store.instance.currentView]);

    return (
        <Layout>
            {routes.map(({key, path, Component}) =>
                <Route key={key ?? path} path={path} component={Component} exact/>
            )}
        </Layout>
    );
})


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



// Код Дениса

// import React from 'react';
// import PropTypes from 'prop-types';
// import AppBar from '@material-ui/core/AppBar';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Divider from '@material-ui/core/Divider';
// import Drawer from '@material-ui/core/Drawer';
// import Hidden from '@material-ui/core/Hidden';
// import IconButton from '@material-ui/core/IconButton';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles, useTheme } from '@material-ui/core/styles';
// import ReactDOM from 'react-dom'
// import { Route,Switch,Link, useHistory } from 'react-router-dom';
// import Lecture_2 from './Lections/Lecture_2';
// import { Main } from './Main';
// import Page from './Lections/Page';
//
// const drawerWidth = 240;
//
// const useStyles = makeStyles((theme) => ({
//     root: {
//         display: 'flex',
//     },
//     drawer: {
//         [theme.breakpoints.up('sm')]: {
//             width: drawerWidth,
//             flexShrink: 0,
//         },
//     },
//     appBar: {
//         [theme.breakpoints.up('sm')]: {
//             width: `calc(100% - ${drawerWidth}px)`,
//             marginLeft: drawerWidth,
//         },
//     },
//     menuButton: {
//         marginRight: theme.spacing(2),
//         [theme.breakpoints.up('sm')]: {
//             display: 'none',
//         },
//     },
//     // necessary for content to be below app bar
//     toolbar: theme.mixins.toolbar,
//     drawerPaper: {
//         width: drawerWidth,
//     },
//     content: {
//         flexGrow: 1,
//         padding: theme.spacing(3),
//     },
// }));
//
// function ResponsiveDrawer(props) {
//     const { window } = props;
//     const classes = useStyles();
//     const theme = useTheme();
//     const [mobileOpen, setMobileOpen] = React.useState(false);
//
//     const handleDrawerToggle = () => {
//         setMobileOpen(!mobileOpen);
//     };
//
//     const history = useHistory();
//     const hendler = (to) =>
//     {
//         history.push(to);
//     }
//
//
//     const drawer1 = (
//         <div>
//             <div className={classes.toolbar} />
//             <Divider />
//             <List>
//                 {['Лекция 1', 'Данные и информация', 'Методы доступа', 'Модели данных','Современные СУБД'].map((text, index) => (
//                     <ListItem button key={text}>
//                         <ListItemText primary={text} />
//                     </ListItem>
//                 ))}
//             </List>
//             <Divider />
//         </div>
//     );
//
//     const drawer2 = (
//         <div>
//             <div className={classes.toolbar} />
//             <Divider />
//             <List>
//                 {['Лекция 2', 'Этапы разработки', 'Прикладной и предметный подходы', 'Критерии выбора СУБД','Восходящий и нисходящий подходы','ER-модель и нотация Чена'].map((text, index) => (
//
//                     <ListItem onClick={()=>hendler(`/${index}`)} button key={text}>
//                         <ListItemText primary={text} />
//                     </ListItem>
//
//                 ))}
//             </List>
//             <Divider />
//         </div>
//     );
//
//     const drawer3 = (
//         <div>
//             <div className={classes.toolbar} />
//             <Divider />
//             <List>
//                 {['Лекция 3', 'Логическое проектирование', 'Нормализация', 'Критерии оценки разработанной МД','Нотация IDEF1X','Трансформационная модель'].map((text, index) => (
//                     <ListItem button key={text}>
//                         <ListItemText primary={text} />
//                     </ListItem>
//                 ))}
//             </List>
//             <Divider />
//         </div>
//     );
//
//     const drawer4 = (
//         <div>
//             <div className={classes.toolbar} />
//             <Divider />
//             <List>
//                 {['Лекция 4', 'Реляционная алгебра', 'Связь реляционной алгебры и реляционного исчисления', 'Общие операции реляционной алгебры','Специальные операции реляционной алгебры','Дополнительные операции реляционной алгебры'].map((text, index) => (
//                     <ListItem button key={text}>
//                         <ListItemText primary={text} />
//                     </ListItem>
//                 ))}
//             </List>
//             <Divider />
//         </div>
//     );
//
//     const drawer5 = (
//         <div>
//             <div className={classes.toolbar} />
//             <Divider />
//             <List>
//                 {['Лекция 5', 'Стандарты языка SQL', 'Операторы DDL', 'Триггеры','Процедуры и функции','Операторы DML'].map((text, index) => (
//                     <ListItem button key={text}>
//                         <ListItemText primary={text} />
//                     </ListItem>
//                 ))}
//             </List>
//             <Divider />
//         </div>
//     );
//
//     const drawer6 = (
//         <div>
//             <div className={classes.toolbar} />
//             <Divider />
//             <List>
//                 {['Лекция 6', 'Простой select', 'Сортировка order by', 'Ограничения where (between, like, in)','Регулярные выражения и NULL','Case и вычисления','Group by, having и агрегатные функции','Соединение join','Объединение union','Подзапросы и вложенные запросы','Цикл while и cursor'].map((text, index) => (
//                     <ListItem button key={text}>
//                         <ListItemText primary={text} />
//                     </ListItem>
//                 ))}
//             </List>
//             <Divider />
//         </div>
//     );
//
//     const drawer7 = (
//         <div>
//             <div className={classes.toolbar} />
//             <Divider />
//             <List>
//                 {['Лекция 7', 'Требования к ИБ', 'Многоуровневая модель защиты БД', 'Методы и средства защиты в БД','Авторизация. идентификация, аутентификация','Роли и пользователи','Операторы DCL'].map((text, index) => (
//                     <ListItem button key={text}>
//                         <ListItemText primary={text} />
//                     </ListItem>
//                 ))}
//             </List>
//             <Divider />
//         </div>
//     );
//
//     const drawer8 = (
//         <div>
//             <div className={classes.toolbar} />
//             <Divider />
//             <List>
//                 {['Лекция 8', 'Свойства транзакций', 'Операторы TCL', 'Классификация нарушений целостности','Журнализация','Журнал транзакций разных СУБД','Восстановление после сбоев','Уровни изоляции транзакций'].map((text, index) => (
//                     <ListItem button key={text}>
//                         <ListItemText primary={text} />
//                     </ListItem>
//                 ))}
//             </List>
//             <Divider />
//         </div>
//     );
//
//     const drawer9 = (
//         <div>
//             <div className={classes.toolbar} />
//             <Divider />
//             <List>
//                 {['Лекция 9', 'Файл хранения данных', 'Функция индексирования', 'Структуры индексов','Индексирование и доступ по индексу в различных СУБД','Виды архитектур приложений с БД'].map((text, index) => (
//                     <ListItem button key={text}>
//                         <ListItemText primary={text} />
//                     </ListItem>
//                 ))}
//             </List>
//             <Divider />
//         </div>
//     );
//
//
//
//
//
//     const container = window !== undefined ? () => window().document.body : undefined;
//
//     return (
//         <div className={classes.root}>
//             <CssBaseline />
//             <AppBar position="fixed" className={classes.appBar}>
//                 <Toolbar>
//                     <IconButton
//                         color="inherit"
//                         aria-label="open drawer"
//                         edge="start"
//                         onClick={handleDrawerToggle}
//                         className={classes.menuButton}
//                     >
//                     </IconButton>
//                     <Typography variant="h6" noWrap>
//                         Базы данных
//                     </Typography>
//                 </Toolbar>
//             </AppBar>
//
//             <main className={classes.content}>
//                 <div className={classes.toolbar} />
//                 <Switch>
//                     <Route path='/:lecture' component={Page}/>
//                     <Route path='/' component={Main}/>
//
//                 </Switch>
//
//             </main>
//
//         </div>
//     );
// }
//
// ResponsiveDrawer.propTypes = {
//     /**
//      * Injected by the documentation to work in an iframe.
//      * You won't need it on your project.
//      */
//     window: PropTypes.func,
// };
//
//
//
// export default ResponsiveDrawer;
