import {useStyles} from '../../styles'
import {useEffect, useState} from "react";

export const StudentRanking = (props) => {
	const classes = useStyles();
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		//Task.get((response) => setTasks(response.data))
	}, []);

	return <div>
		Здесь будут рейтинг учащихся.
	</div>
}