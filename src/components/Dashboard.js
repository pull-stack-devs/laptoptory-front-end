import React, { useContext } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { AuthContext } from '../context/SignInContext';
import {
  CssBaseline,
  Drawer,
  Box,
  AppBar,
  Toolbar,
  Typography,
  Divider,
  IconButton,
  Container,
  Badge,
  Menu,
  MenuItem,
  Breadcrumbs,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircle from '@material-ui/icons/AccountCircle';
import SideList from './SideList';
import LaptopsTable from './laptops/LaptopsTable';
import ProgramsGrid from './programs/ProgramGrid';
import UsersGrid from './users/UsersGrid';
import { Route, Redirect } from 'react-router-dom';
import cookie from 'react-cookies';
import SocketIO from './SocketIO';
import StudentsTable from './students/StudentsTable';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
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
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
  profileMenu: {
    top: '50px',
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },
  link: {
    display: 'flex',
  },
  breadcrumbs: {
    marginBottom: '20px',
  },
}));

function Dashboard(props) {
  const context = useContext(AuthContext);
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [currentPage, setCurrentPage] = React.useState('');
  const [anchorEl, setAnchorEl] = React.useState(null);
  const profileOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const changeCurrentPage = (pageName) => {
    setCurrentPage(pageName);
  };
  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      {console.log(cookie.load('auth'))}
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            Laptoptory
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton
            edge="end"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <Menu
            className={classes.profileMenu}
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
            open={profileOpen}
            onClose={handleProfileMenuClose}
          >
            <MenuItem
              onClick={() => {
                handleProfileMenuClose();
                context.logout();
              }}
            >
              Logout
            </MenuItem>
            {/* <MenuItem onClick={handleProfileMenuClose}>My account</MenuItem> */}
          </Menu>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <SideList activePage={changeCurrentPage} />
        {/* <List>{mainListItems}</List>
        <Divider />
        <List>{secondaryListItems}</List> */}
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Breadcrumbs aria-label="breadcrumb" className={classes.breadcrumbs}>
            <Typography color="inherit" className={classes.link}>
              {/* <DashboardIcon className={classes.icon} /> */}
              Dashboard
            </Typography>
            {currentPage ? (
              <Typography color="textPrimary" className={classes.link}>
                {/* <DashboardIcon className={classes.icon} /> */}
                {currentPage}
              </Typography>
            ) : null}
          </Breadcrumbs>
          {/* <SocketIO /> */}
          {/* <Route exact path="/" component={UsersGrid} /> */}
          {/* </Route> */}
          <Route exact path="/dashboard/laptops">
            {console.log('inide Studnets route')}
            {!context.loggedIn ? <Redirect to="/signin" /> : <LaptopsTable />}
          </Route>
          <Route exact path="/dashboard/students">
            {!context.loggedIn ? <Redirect to="/signin" /> : <StudentsTable />}
          </Route>
          <Route exact path="/dashboard/programs">
            {!context.loggedIn ? <Redirect to="/signin" /> : <ProgramsGrid />}
          </Route>
          <Route exact path="/dashboard/users">
            {!context.loggedIn ? <Redirect to="/signin" /> : <UsersGrid />}
          </Route>
          <Box pt={4}>{/* <Copyright /> */}</Box>.
        </Container>
      </main>
    </div>
  );
}

export default Dashboard;
