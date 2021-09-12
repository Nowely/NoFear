import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ReactDOM from 'react-dom'
import { Route,Switch,Link, useHistory, useParams } from 'react-router-dom';
import Lecture_2 from './Lecture_2';
import { data } from './data';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const drawerMap = {
    'lecture_1':['Лекция 1', 'Данные и информация', 'Методы доступа', 'Модели данных','Современные СУБД'],
    'lecture_2':['Лекция 2', 'Этапы разработки', 'Прикладной и предметный подходы', 'Критерии выбора СУБД','Восходящий и нисходящий подходы','ER-модель и нотация Чена'],
    'lecture_3':['Лекция 3', 'Логическое проектирование', 'Нормализация', 'Критерии оценки разработанной МД','Нотация IDEF1X','Трансформационная модель'],
    'lecture_4':['Лекция 4','Реляционная алгебра', 'Связь реляционной алгебры и реляционного исчисления', 'Общие операции реляционной алгебры','Специальные операции реляционной алгебры','Дополнительные операции реляционной алгебры'],
    'lecture_5':['Лекция 5','Стандарты языка SQL', 'Операторы DDL', 'Триггеры','Процедуры и функции','Операторы DML'],
    'lecture_6':['Лекция 6','Простой select', 'Сортировка order by', 'Ограничения where (between, like, in)','Регулярные выражения и NULL','Case и вычисления','Group by, having и агрегатные функции','Соединение join','Объединение union','Подзапросы и вложенные запросы','Цикл while и cursor'],
    'lecture_7':['Лекция 7','Требования к ИБ', 'Многоуровневая модель защиты БД', 'Методы и средства защиты в БД','Авторизация. идентификация, аутентификация','Роли и пользователи','Операторы DCL'],   
    'lecture_8':['Лекция 8','Свойства транзакций', 'Операторы TCL', 'Классификация нарушений целостности','Журнализация','Журнал транзакций разных СУБД','Восстановление после сбоев','Уровни изоляции транзакций'],
    'lecture_9':['Лекция 9','Файл хранения данных', 'Функция индексирования', 'Структуры индексов','Индексирование и доступ по индексу в различных СУБД','Виды архитектур приложений с БД']       
}



function Page(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const history = useHistory();
 
  const hendler = (to) =>
  {
    history.push(to);
  }
  const drawer1 = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {['Лекция 1', 'Данные и информация', 'Методы доступа', 'Модели данных','Современные СУБД'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

const {lecture} = useParams();

  const drawer2 = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {drawerMap[lecture].map((text, index) => (

          <ListItem onClick={()=>hendler(`/${lecture}/${index}`)} button key={text}>
            <ListItemText primary={text} />
          </ListItem>

        ))}
      </List>
      <Divider />
    </div>
  );

  const drawer3 = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {['Лекция 3', 'Логическое проектирование', 'Нормализация', 'Критерии оценки разработанной МД','Нотация IDEF1X','Трансформационная модель'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  const drawer4 = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {['Лекция 4', 'Реляционная алгебра', 'Связь реляционной алгебры и реляционного исчисления', 'Общие операции реляционной алгебры','Специальные операции реляционной алгебры','Дополнительные операции реляционной алгебры'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  const drawer5 = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {['Лекция 5', 'Стандарты языка SQL', 'Операторы DDL', 'Триггеры','Процедуры и функции','Операторы DML'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  const drawer6 = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {['Лекция 6', 'Простой select', 'Сортировка order by', 'Ограничения where (between, like, in)','Регулярные выражения и NULL','Case и вычисления','Group by, having и агрегатные функции','Соединение join','Объединение union','Подзапросы и вложенные запросы','Цикл while и cursor'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  const drawer7 = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {['Лекция 7', 'Требования к ИБ', 'Многоуровневая модель защиты БД', 'Методы и средства защиты в БД','Авторизация. идентификация, аутентификация','Роли и пользователи','Операторы DCL'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  const drawer8 = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {['Лекция 8', 'Свойства транзакций', 'Операторы TCL', 'Классификация нарушений целостности','Журнализация','Журнал транзакций разных СУБД','Восстановление после сбоев','Уровни изоляции транзакций'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  const drawer9 = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {['Лекция 9', 'Файл хранения данных', 'Функция индексирования', 'Структуры индексов','Индексирование и доступ по индексу в различных СУБД','Виды архитектур приложений с БД'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );





  const container = window !== undefined ? () => window().document.body : undefined;
    console.log(lecture);
  return (
    <div className={classes.root}>
      <CssBaseline />
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer2}
          </Drawer>
          <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer2}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          <Route path='/:lecture/:id' component={Lecture_2}/>
          
          
        </Switch>
        
      </main>

    </div>
  );
}


// let timerInput = document.getElementById("time"); // Берём строку
// let buttonRun = document.getElementById("button");// Берём кнопку запуска
// let timerShow = document.getElementById("timer"); // Берём блок для показа времени

// const timeMinut = 0;
// buttonRun.addEventListener('click', function() {
//   timeMinut = parseInt(timerInput.value) * 60
// })



// function start() {
// 	//По нажатию на кнопку наш таймер начнет работать:
// 	window.setInterval(timer);
// }
// function timer() {
// 	var elem = document.getElementById('lecture 1');
// 	elem.value = parseInt(elem.value)+1; //parseInt преобразует строку в число
// }

// function test() {
// timerId = window.setInterval(timer, 1000);
// 	alert(timerId); //выведет номер таймера
// }


Page.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Page;
