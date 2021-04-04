import React from 'react';
import {AppBar, Tabs, Tab, Toolbar, Container, IconButton, Typography, Button} from '@material-ui/core';
//import {WhatshotRoundedIcon} from '@material-ui/icons';
import WhatshotRoundedIcon from '@material-ui/icons/WhatshotRounded';
import {useStyles} from '../styles'
import {Route, Link} from "react-router-dom";

import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

export const Layout = props => {
	const classes = useStyles();

	const [value, setValue] = React.useState(0);
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);


	const handleChange = (event, newValue) => {
		console.log(newValue);
		setValue(newValue);
	};

	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div className={classes.root}>
			<AppBar className={classes.appBar} position="fixed">
				<Toolbar variant="dense">
					<IconButton edge="start" color="inherit" aria-label="menu">
						<WhatshotRoundedIcon/>
					</IconButton>
					<Typography className={classes.title} variant="h6" noWrap>
						3п
					</Typography>
					<Route
						path="/"
						render={({location}) => (
							<>
								<Tabs value={value} onChange={handleChange}>
									//TODO display label without CAPS
									<Tab label="П. Личный Кабинет" component={Link} to="/" {...a11yProps(0)}/>
									<Tab label="С. Личный кабинет" component={Link} to="/Account" {...a11yProps(1)}/>
									<Tab label="Рейтинг дисциплин" component={Link} to="/DisciplineRanking" {...a11yProps(2)}/>
									<Tab label="Рейтинг учащихся" component={Link} to="/StudentRanking" {...a11yProps(3)}/>
									<Tab label="Ближайшие мероприятия" component={Link} to="/ComingEvents" {...a11yProps(4)}/>

								</Tabs>
							</>
						)}/>

					<IconButton
						style={{right: 0, position: 'absolute'}}
						aria-label="account of current user"
						aria-controls="menu-appbar"
						aria-haspopup="true"
						onClick={handleMenu}
						color="inherit"
					>
						<PersonRoundedIcon />
					</IconButton>
					<Menu
						id="menu-appbar"
						anchorEl={anchorEl}
						anchorOrigin={{
							vertical: 'top',
							horizontal: 'right',
						}}
						keepMounted
						transformOrigin={{
							vertical: 'top',
							horizontal: 'right',
						}}
						open={open}
						onClose={handleClose}
					>
						<MenuItem onClick={handleClose}>Профиль</MenuItem>
						<MenuItem onClick={handleClose}>Выход</MenuItem>
					</Menu>
				</Toolbar>
			</AppBar>
			<Container maxWidth={false} disableGutters={true} className={classes.container}>
				{props.children}
			</Container>
		</div>
	);
};

Layout.displayName = Layout.name

function a11yProps(index) {
	return {
		id: `nav-tab-${index}`,
		'aria-controls': `nav-tabpanel-${index}`,
	};
}
