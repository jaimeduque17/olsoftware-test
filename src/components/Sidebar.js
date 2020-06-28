import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MapSharpIcon from '@material-ui/icons/MapSharp';
import ListSharpIcon from '@material-ui/icons/ListSharp';
import NoteSharpIcon from '@material-ui/icons/NoteSharp';
import PersonSharpIcon from '@material-ui/icons/PersonSharp';
import SupervisorAccountSharpIcon from '@material-ui/icons/SupervisorAccountSharp';
import TuneSharpIcon from '@material-ui/icons/TuneSharp';
import { grey } from '@material-ui/core/colors';
import 'firebase/auth';
import { useUser } from 'reactfire';
import Header from './Header';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        backgroundColor: '#fff',
        color: '#0275d8'
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        backgroundImage: 'linear-gradient(to bottom, #0080ff, #0000e6)',
        color: '#fff',
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
        backgroundImage: 'linear-gradient(to bottom, #0080ff, #0000e6)',
        color: '#fff',
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: 0,
    },
    minHeght: {
        minHeight: 0,
    }
}));

const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return { color: grey[500] };
    } else {
        return { color: grey[50] };
    }
}

const MiniDrawer = ({ children, history }) => {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const user = useUser();

    return (
        <div className={user ? classes.root : null}>
            {user && <CssBaseline />}
            {user && <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, {
                            [classes.hide]: open,
                        })}
                    >
                        <MenuIcon />
                    </IconButton>
                    <div className="container-fluid" style={{ display: 'contents' }}>
                        {user ? <Header name={user.email} /> : null}
                    </div>
                </Toolbar>
            </AppBar>}
            {user && <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </div>
                <Divider />
                <Link to='/programation'>
                    <ListItem button>
                        <ListItemIcon>
                            <MapSharpIcon className="mr-5" style={isActive(history, '/programation')} />
                            <ListItemText primary={'Programación'} style={isActive(history, '/programation')} />
                        </ListItemIcon>
                    </ListItem>
                </Link>
                <Link to='/operation'>
                    <ListItem button>
                        <ListItemIcon>
                            <ListSharpIcon className="mr-5" style={isActive(history, '/operation')} />
                            <ListItemText primary={'Operaciones'} style={isActive(history, '/operation')} />
                        </ListItemIcon>
                    </ListItem>
                </Link>
                <Link to='/profile'>
                    <ListItem button>
                        <ListItemIcon>
                            <TuneSharpIcon className="mr-5" style={isActive(history, '/profile')} />
                            <ListItemText primary={'Perfiles'} style={isActive(history, '/profile')} />
                        </ListItemIcon>
                    </ListItem>
                </Link>
                <Link to='/'>
                    <ListItem button>
                        <ListItemIcon>
                            <SupervisorAccountSharpIcon className="mr-5" style={isActive(history, '/')} />
                            <ListItemText primary={'Usuario'} style={isActive(history, '/')} />
                        </ListItemIcon>
                    </ListItem>
                </Link>
                <Link to='/user'>
                    <ListItem button>
                        <ListItemIcon>
                            <PersonSharpIcon className="mr-5" style={isActive(history, '/user')} />
                            <ListItemText primary={'Usuario'} style={isActive(history, '/user')} />
                        </ListItemIcon>
                    </ListItem>
                </Link>
                <Link to='/report'>
                    <ListItem button>
                        <ListItemIcon>
                            <NoteSharpIcon className="mr-5" style={isActive(history, '/report')} />
                            <ListItemText primary={'Reportes'} style={isActive(history, '/report')} />
                        </ListItemIcon>
                    </ListItem>
                </Link>
            </Drawer>}
            <main className={classes.content}>
                {user && <div className={classes.toolbar} />}
                {children}
            </main>
        </div >
    );
}

export default withRouter(MiniDrawer);
