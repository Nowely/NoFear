// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
//
// const columns = [
//   { id: 'position', label: 'Position', minWidth: 170 },
//   { id: 'nickname', label: 'Nickname', minWidth: 170 },
//   { id: 'fio', label: 'FIO', minWidth: 170 },
//   { id: 'group', label: 'Group', minWidth: 170 },
//   { id: 'performance', label: 'Performance', minWidth: 170 },
// ];
//
// function createData(position, nickname, fio, group, performance) {
//   return { position, nickname, fio, group, performance};
// }
//
// const rows = [
//   createData('1', 'qwe', 'Ардаков Игорь Герасимович', 'БПМ-19-1', '10'),
//   createData('2', 'zxc', 'Донченко Иван Андреевич', 'БПМ-19-2', '9'),
//   createData('3', 'smth', 'Кулагина Юлия Анатольевна', 'БПМ-19-3', '7'),
//   createData('4', 'noone', 'Бирюков Евгений Евгеньевич', 'БПМ-19-4', '6'),
//   createData('5', 'lessgo', 'Дылдин Алексей Валерьевич', 'БПМ-19-4', '2'),
//   createData('6', 'ayay', 'Девин Игорь Владимирович', 'БПМ-19-3', '0'),
//   createData('1', 'qwe', 'Ардаков Игорь Герасимович', 'БПМ-19-1', '10'),
//   createData('2', 'zxc', 'Донченко Иван Андреевич', 'БПМ-19-2', '9'),
//   createData('3', 'smth', 'Кулагина Юлия Анатольевна', 'БПМ-19-3', '7'),
//   createData('4', 'noone', 'Бирюков Евгений Евгеньевич', 'БПМ-19-4', '6'),
//   createData('5', 'lessgo', 'Дылдин Алексей Валерьевич', 'БПМ-19-4', '2'),
//   createData('6', 'ayay', 'Девин Игорь Владимирович', 'БПМ-19-3', '0'),
//   createData('1', 'qwe', 'Ардаков Игорь Герасимович', 'БПМ-19-1', '10'),
//   createData('2', 'zxc', 'Донченко Иван Андреевич', 'БПМ-19-2', '9'),
//   createData('3', 'smth', 'Кулагина Юлия Анатольевна', 'БПМ-19-3', '7'),
//   createData('4', 'noone', 'Бирюков Евгений Евгеньевич', 'БПМ-19-4', '6'),
//   createData('5', 'lessgo', 'Дылдин Алексей Валерьевич', 'БПМ-19-4', '2'),
//   createData('6', 'ayay', 'Девин Игорь Владимирович', 'БПМ-19-3', '0'),
//   createData('1', 'qwe', 'Ардаков Игорь Герасимович', 'БПМ-19-1', '10'),
//   createData('2', 'zxc', 'Донченко Иван Андреевич', 'БПМ-19-2', '9'),
//   createData('3', 'smth', 'Кулагина Юлия Анатольевна', 'БПМ-19-3', '7'),
//   createData('4', 'noone', 'Бирюков Евгений Евгеньевич', 'БПМ-19-4', '6'),
//   createData('5', 'lessgo', 'Дылдин Алексей Валерьевич', 'БПМ-19-4', '2'),
//   createData('6', 'ayay', 'Девин Игорь Владимирович', 'БПМ-19-3', '0'),
//   createData('1', 'qwe', 'Ардаков Игорь Герасимович', 'БПМ-19-1', '10'),
//   createData('2', 'zxc', 'Донченко Иван Андреевич', 'БПМ-19-2', '9'),
//   createData('3', 'smth', 'Кулагина Юлия Анатольевна', 'БПМ-19-3', '7'),
//   createData('4', 'noone', 'Бирюков Евгений Евгеньевич', 'БПМ-19-4', '6'),
//   createData('5', 'lessgo', 'Дылдин Алексей Валерьевич', 'БПМ-19-4', '2'),
//   createData('6', 'ayay', 'Девин Игорь Владимирович', 'БПМ-19-3', '0'),
//   createData('1', 'qwe', 'Ардаков Игорь Герасимович', 'БПМ-19-1', '10'),
//   createData('2', 'zxc', 'Донченко Иван Андреевич', 'БПМ-19-2', '9'),
//   createData('3', 'smth', 'Кулагина Юлия Анатольевна', 'БПМ-19-3', '7'),
//   createData('4', 'noone', 'Бирюков Евгений Евгеньевич', 'БПМ-19-4', '6'),
//   createData('5', 'lessgo', 'Дылдин Алексей Валерьевич', 'БПМ-19-4', '2'),
//   createData('6', 'ayay', 'Девин Игорь Владимирович', 'БПМ-19-3', '0'),
//   createData('1', 'qwe', 'Ардаков Игорь Герасимович', 'БПМ-19-1', '10'),
//   createData('2', 'zxc', 'Донченко Иван Андреевич', 'БПМ-19-2', '9'),
//   createData('3', 'smth', 'Кулагина Юлия Анатольевна', 'БПМ-19-3', '7'),
//   createData('4', 'noone', 'Бирюков Евгений Евгеньевич', 'БПМ-19-4', '6'),
//   createData('5', 'lessgo', 'Дылдин Алексей Валерьевич', 'БПМ-19-4', '2'),
//   createData('6', 'ayay', 'Девин Игорь Владимирович', 'БПМ-19-3', '0'),
//   createData('1', 'qwe', 'Ардаков Игорь Герасимович', 'БПМ-19-1', '10'),
//   createData('2', 'zxc', 'Донченко Иван Андреевич', 'БПМ-19-2', '9'),
//   createData('3', 'smth', 'Кулагина Юлия Анатольевна', 'БПМ-19-3', '7'),
//   createData('4', 'noone', 'Бирюков Евгений Евгеньевич', 'БПМ-19-4', '6'),
//   createData('5', 'lessgo', 'Дылдин Алексей Валерьевич', 'БПМ-19-4', '2'),
//   createData('6', 'ayay', 'Девин Игорь Владимирович', 'БПМ-19-3', '0'),
// ];
//
// const useStyles = makeStyles({
//   root: {
//     width: '100%',
//     marginTop: 100,
//   },
//   container: {
//     maxHeight: 440,
//   },
// });
//
// export default function GroupTable() {
//   const classes = useStyles();
//   const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(100);
//
//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };
//
//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(+event.target.value);
//     setPage(0);
//   };
//
//   return (
//     <Paper className={classes.root}>
//       <TableContainer className={classes.container}>
//         <Table stickyHeader aria-label="sticky table">
//           <TableHead>
//             <TableRow>
//               {columns.map((column) => (
//                 <TableCell
//                   key={column.id}
//                   align={column.align}
//                   style={{ minWidth: column.minWidth }}
//                 >
//                   {column.label}
//                 </TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
//               return (
//                 <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
//                   {columns.map((column) => {
//                     const value = row[column.id];
//                     return (
//                       <TableCell key={column.id} align={column.align}>
//                         {column.format && typeof value === 'number' ? column.format(value) : value}
//                       </TableCell>
//                     );
//                   })}
//                 </TableRow>
//               );
//             })}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </Paper>
//   );
// }