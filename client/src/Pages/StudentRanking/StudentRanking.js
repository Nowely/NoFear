import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
// import {useStyles} from '../../styles'
import {useEffect, useState} from "react";

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
	createData('1', 'qwe', 'Ардаков Игорь Герасимович', 'БПМ-19-1', '10'),
	createData('2', 'zxc', 'Донченко Иван Андреевич', 'БПМ-19-2', '9'),
	createData('3', 'smth', 'Кулагина Юлия Анатольевна', 'БПМ-19-3', '7'),
	createData('4', 'noone', 'Бирюков Евгений Евгеньевич', 'БПМ-19-4', '6'),
	createData('5', 'lessgo', 'Дылдин Алексей Валерьевич', 'БПМ-19-4', '2'),
	createData('6', 'ayay', 'Девин Игорь Владимирович', 'БПМ-19-3', '0'),
	createData('7', 'qwe', 'Ардаков Игорь Герасимович', 'БПМ-19-1', '10'),
	createData('8', 'zxc', 'Донченко Иван Андреевич', 'БПМ-19-2', '9'),
	createData('9', 'smth', 'Кулагина Юлия Анатольевна', 'БПМ-19-3', '7'),
	createData('10', 'noone', 'Бирюков Евгений Евгеньевич', 'БПМ-19-4', '6'),
	createData('11', 'lessgo', 'Дылдин Алексей Валерьевич', 'БПМ-19-4', '2'),
	createData('12', 'ayay', 'Девин Игорь Владимирович', 'БПМ-19-3', '0'),
	createData('13', 'qwe', 'Ардаков Игорь Герасимович', 'БПМ-19-1', '10'),
	createData('14', 'zxc', 'Донченко Иван Андреевич', 'БПМ-19-2', '9'),
	createData('15', 'smth', 'Кулагина Юлия Анатольевна', 'БПМ-19-3', '7'),
	createData('16', 'noone', 'Бирюков Евгений Евгеньевич', 'БПМ-19-4', '6'),
	createData('17', 'lessgo', 'Дылдин Алексей Валерьевич', 'БПМ-19-4', '2'),
	createData('18', 'ayay', 'Девин Игорь Владимирович', 'БПМ-19-3', '0'),
	createData('19', 'qwe', 'Ардаков Игорь Герасимович', 'БПМ-19-1', '10'),
	createData('20', 'zxc', 'Донченко Иван Андреевич', 'БПМ-19-2', '9'),
	createData('21', 'smth', 'Кулагина Юлия Анатольевна', 'БПМ-19-3', '7'),
	createData('22', 'noone', 'Бирюков Евгений Евгеньевич', 'БПМ-19-4', '6'),
	createData('23', 'lessgo', 'Дылдин Алексей Валерьевич', 'БПМ-19-4', '2'),
	createData('24', 'ayay', 'Девин Игорь Владимирович', 'БПМ-19-3', '0'),
	createData('25', 'qwe', 'Ардаков Игорь Герасимович', 'БПМ-19-1', '10'),
	createData('26', 'zxc', 'Донченко Иван Андреевич', 'БПМ-19-2', '9'),
	createData('27', 'smth', 'Кулагина Юлия Анатольевна', 'БПМ-19-3', '7'),
	createData('28', 'noone', 'Бирюков Евгений Евгеньевич', 'БПМ-19-4', '6'),
	createData('29', 'lessgo', 'Дылдин Алексей Валерьевич', 'БПМ-19-4', '2'),
	createData('30', 'ayay', 'Девин Игорь Владимирович', 'БПМ-19-3', '0'),
	createData('31', 'qwe', 'Ардаков Игорь Герасимович', 'БПМ-19-1', '10'),
	createData('32', 'zxc', 'Донченко Иван Андреевич', 'БПМ-19-2', '9'),
	createData('33', 'smth', 'Кулагина Юлия Анатольевна', 'БПМ-19-3', '7'),
	createData('34', 'noone', 'Бирюков Евгений Евгеньевич', 'БПМ-19-4', '6'),
	createData('35', 'lessgo', 'Дылдин Алексей Валерьевич', 'БПМ-19-4', '2'),
	createData('36', 'ayay', 'Девин Игорь Владимирович', 'БПМ-19-3', '0'),
	createData('37', 'qwe', 'Ардаков Игорь Герасимович', 'БПМ-19-1', '10'),
	createData('38', 'zxc', 'Донченко Иван Андреевич', 'БПМ-19-2', '9'),
	createData('39', 'smth', 'Кулагина Юлия Анатольевна', 'БПМ-19-3', '7'),
	createData('40', 'noone', 'Бирюков Евгений Евгеньевич', 'БПМ-19-4', '6'),
	createData('41', 'lessgo', 'Дылдин Алексей Валерьевич', 'БПМ-19-4', '2'),
	createData('42', 'ayay', 'Девин Игорь Владимирович', 'БПМ-19-3', '0'),
	createData('43', 'qwe', 'Ардаков Игорь Герасимович', 'БПМ-19-1', '10'),
	createData('44', 'zxc', 'Донченко Иван Андреевич', 'БПМ-19-2', '9'),
	createData('45', 'smth', 'Кулагина Юлия Анатольевна', 'БПМ-19-3', '7'),
	createData('46', 'noone', 'Бирюков Евгений Евгеньевич', 'БПМ-19-4', '6'),
	createData('47', 'lessgo', 'Дылдин Алексей Валерьевич', 'БПМ-19-4', '2'),
	createData('48', 'ayay', 'Девин Игорь Владимирович', 'БПМ-19-3', '0'),
];

const useStyles = makeStyles({
	root: {
		width: '181%',
	},
	container: {
		maxHeight: 800,
	},
});

export const StudentRanking = (props) => {
	const classes = useStyles();
	const [tasks, setTasks] = useState([]);
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(100);

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};

	useEffect(() => {
		//Task.get((response) => setTasks(response.data))
	}, []);

	return <div>
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
	</div>
}