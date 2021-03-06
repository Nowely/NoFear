import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import {Drawer} from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";

const rightMenu = ['Улучшить понимание..', 'Исправить оценку..'];

const columns = [
  { id: 'position', label: 'Position', minWidth: 170 },
  { id: 'nickname', label: 'Nickname', minWidth: 170 },
  { id: 'fio', label: 'FIO', minWidth: 170 },
  { id: 'group', label: 'Group', minWidth: 170 },
  { id: 'performance', label: 'Performance', minWidth: 170 },
];

function createData(position, nickname, fio, group, performance) {
  return { position, nickname, fio, group, performance};
}

const rows = [
  createData('1', 'qwe', 'Ардаков Игорь Герасимович', 'БПМ-19-1', '10')
];

const useStyles = makeStyles({
  root: {
    width: '100%',
    marginTop: 52,
  },
  container: {
    maxHeight: 440,
  },
});

export default function PersonalTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(1);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const  handleListItemClick  = (event, index) => {
    setSelectedIndex(index);
    console.log(event.target)
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
      <>
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>

  <Drawer
      anchor="right"
      variant="permanent"
      className={classes.drawer}
      classes={{paper: classes.drawerPaper,}}>
    <div className={classes.root}>
      <List>
        <Typography variant="h5">
          Задачи
        </Typography>
        {rightMenu.map((text, index) => (
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
  );

}