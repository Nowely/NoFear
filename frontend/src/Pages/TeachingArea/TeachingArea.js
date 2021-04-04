import {useStyles} from '../../styles'
import {useEffect, useState} from "react";

export const TeachingArea = (props) => {
	const classes = useStyles();
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		//Task.get((response) => setTasks(response.data))
	}, []);

	return <div>
		Hello!
	</div>
}