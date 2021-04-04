import { fade, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.paper,
	},
	grow: {
		flexGrow: 1,
	},
	container: {
		marginTop: 10,
		display: 'flex',
		flexWrap: 'wrap',
	},
	paper: {
		padding: theme.spacing(1),
		textAlign: 'center',
		/*color: theme.palette.text.secondary,*/
		flex: '1 0 auto',
		margin: theme.spacing(2),
		marginTop: 0,
	},
	typographyPaper: {
		marginTop: theme.spacing(1),
		marginLeft: theme.spacing(2),
	},
	filterTabs: {
		marginRight: theme.spacing(2),
	},
	filterTab: {
		minWidth: 72,
		minHeight: 35,
		marginRight: 0
	},
	inline: {
		display: 'inline',
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		display: 'none',
		[theme.breakpoints.up('sm')]: {
			display: 'block',
		},
	},
	inputRoot: {
		color: 'inherit',
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: '20ch',
		},
	},
	sectionDesktop: {
		display: 'none',
		[theme.breakpoints.up('md')]: {
			display: 'flex',
		},
	},
	sectionMobile: {
		display: 'flex',
		[theme.breakpoints.up('md')]: {
			display: 'none',
		},
	},
}));