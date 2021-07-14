import {IconButton} from "@material-ui/core";
import AirplayRoundedIcon from '@material-ui/icons/AirplayRounded';
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import React, {MouseEvent, useState} from "react";
import {CabinetType} from "../../utils/consts";

export const CabinetView = () => {
	const [anchorEl, setAnchorEl] = useState<Element | null>(null);
	const open = Boolean(anchorEl);

	const handleMenu = (event: MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);

	};
	const handleClose = (type: CabinetType) => {
		window.localStorage.setItem("CabinetType", type.toString());
		setAnchorEl(null);
	};
	return <>
		<IconButton
			style={{right: 40, position: 'absolute'}}
			onClick={handleMenu}
			color="inherit"
			children={<AirplayRoundedIcon/>}
		/>
		<Menu
			id="menu-appbar"
			anchorEl={anchorEl}
			keepMounted
			transformOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			open={open}
			onClose={event => setAnchorEl(null)}
		>
			<MenuItem onClick={()=> handleClose(CabinetType.Student)}>Студент</MenuItem>
			<MenuItem onClick={()=> handleClose(CabinetType.Teacher)}>Преподаватель</MenuItem>
			<MenuItem onClick={()=> handleClose(CabinetType.Methodist)}>Методист</MenuItem>
		</Menu>
	</>
}