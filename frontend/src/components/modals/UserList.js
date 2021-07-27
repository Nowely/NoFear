import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import USERDATA from '../USERDATA.json'
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const columns = [
    { id: 'id', label: 'ID', minWidth: 170 },
    { id: 'last_name', label: 'Фамилия', minWidth: 170 },
    { id: 'first_name', label: 'Имя', minWidth: 170 },
    { id: 'email', label: 'Почта', minWidth: 170 },
    { id: 'nickname', label: 'Ник', minWidth: 170 },
    { id: 'permission', label: 'Права', minWidth: 170 }
];

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 440,
    },
});

export default function GroupTable() {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(USERDATA.length);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
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
                        {USERDATA.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                    {columns.map((column) => {
                                        const value = row[column.id];
                                        return (
                                            <TableCell key={column.id} align={column.align}>
                                                {
                                                     value == ('Студент' || 'Учитель' || 'Методист') ?
                                                        <InputLabel>
                                                            <Select>
                                                                <MenuItem value="">
                                                                </MenuItem>
                                                                <MenuItem value={1}>Студент</MenuItem>
                                                                <MenuItem value={2}>Учитель</MenuItem>
                                                                <MenuItem value={3}>Методист</MenuItem>
                                                            </Select>
                                                        </InputLabel> : value
                                                }
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
    );
}