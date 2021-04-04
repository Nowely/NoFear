import { fade, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.paper,
	},
	appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
	grow: {
		flexGrow: 1,
	},
	container: {
		width: '60%',
		marginTop: 80,
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
	drawer: {
    width: 240,
    flexShrink: 0,
  },
	//TODO сделать более корректный margin top
  drawerPaper: {
		marginTop: 72,
    width: 240,
  },
  drawerContainer: {
    overflow: 'auto',
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