import React from 'react';
import SideItem from './SideItem';
import LaptopIcon from '@material-ui/icons/Laptop';
import FaceIcon from '@material-ui/icons/Face';
import PeopleIcon from '@material-ui/icons/People';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';import SchoolIcon from '@material-ui/icons/School';
import HistoryIcon from '@material-ui/icons/History';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  sideLink: {
    textDecoration: 'none',
    color: 'rgba(0,0,0,0.87)',
  },
}));
function SideList(props) {
  const [activeLink, setActiveLink] = React.useState('');
  const classes = useStyles();
  const updateActivePage = (pageName) => {
    props.activePage(pageName);
  };

  return (
    <div>
       <Link
        to="/dashboard/charts"
        className={classes.sideLink}
        onClick={() => updateActivePage('Charts')}
      >
        <SideItem listItemName="Charts">
          <DonutLargeIcon />
        </SideItem>
      </Link>
      <Link
        to="/dashboard/laptops"
        className={classes.sideLink}
        onClick={() => updateActivePage('Laptops')}
      >
        <SideItem listItemName="Laptops">
          <LaptopIcon />
        </SideItem>
      </Link>
      <Link
        to="/dashboard/students"
        className={classes.sideLink}
        onClick={() => updateActivePage('Studnets')}
      >
        <SideItem listItemName="Students">
          <FaceIcon />
        </SideItem>
      </Link>
      <Link
        to="/dashboard/programs"
        className={classes.sideLink}
        onClick={() => updateActivePage('Programs')}
      >
        <SideItem listItemName="Programs">
          <SchoolIcon />
        </SideItem>
      </Link>
      <Link
        to="/dashboard/users"
        className={classes.sideLink}
        onClick={() => updateActivePage('Users')}
      >
        <SideItem listItemName="Users">
          <PeopleIcon />
        </SideItem>
      </Link>
      <Link
        to="/dashboard/logs"
        className={classes.sideLink}
        onClick={() => updateActivePage('Logs')}
      >
        <SideItem listItemName="Logs">
          <HistoryIcon />
        </SideItem>
      </Link>
    </div>
  );
}

export default SideList;
