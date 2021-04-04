import {useStyles} from '../../styles'
import {useEffect, useState} from "react";

export const ComingEvents = (props) => {
	const classes = useStyles();
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		//Task.get((response) => setTasks(response.data))
	}, []);

	return <div>
		Здесь будут Ближайшие мероприятия!
	</div>
}