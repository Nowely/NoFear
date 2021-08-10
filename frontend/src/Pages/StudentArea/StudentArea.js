import {useStyles} from '../../styles'
import {useEffect, useState} from "react";
import {Button, Container, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography} from "@material-ui/core";
import LK from "../LK/LK";
import {DisciplineOperationalModel} from "../TeachingArea/DisciplineOperationalModel";
import {ModelingClasses} from "../TeachingArea/ModelingClasses";
import {Statistics} from "../TeachingArea/Statistics";
import Forum from "../Forum"
import StudentDisciplines from "../StudentDisciplines"
import PersonalTable from "../PersonalTable"


export const StudentArea = (props) => {
	const classes = useStyles();
	const [tasks, setTasks] = useState([]);
	const leftMenu = ['Личный кабинет', 'Форум', 'Дисциплины', 'Личный рейтинг'];
	const [selectedIndex, setSelectedIndex] = useState(0);

	const handleListItemClick = (event, index) => {
		setSelectedIndex(index);
	};

	const renderSwitch = () => {
		switch (selectedIndex) {
			case 0:
				return <LK/>;
			case 1:
				return <Forum/>;
			case 2:
				return <StudentDisciplines/>;
			case 3:
				return <PersonalTable/>;
			default:
				return null;
		}
	}

	useEffect(() => {
		//Task.get((response) => setTasks(response.data))
	}, []);

	return <>
		<Drawer
			variant="permanent"
			className={classes.drawer}
			classes={{paper: classes.drawerPaper,}}>
			<div className={classes.drawerContainer}>
				<List>
					{leftMenu.map((text, index) => (
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
		{renderSwitch()}

</>

}