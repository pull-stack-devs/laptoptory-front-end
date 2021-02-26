import React from 'react';
import SideItem from './SideItem';
import LaptopIcon from '@material-ui/icons/Laptop';
import FaceIcon from '@material-ui/icons/Face';
import PeopleIcon from '@material-ui/icons/People';
import SchoolIcon from '@material-ui/icons/School';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  sideLink: {
    textDecoration: 'none',
    color: 'rgba(0,0,0,0.87)'
  }
}));

function SideList(props) {
  const classes = useStyles();

  return (
    <div>
      <Link to="/laptops" className={classes.sideLink}>
        <SideItem listItemName="Laptops">
          <LaptopIcon />
        </SideItem>
      </Link>
      <Link to="students" className={classes.sideLink}>
        <SideItem listItemName="Students">
          <FaceIcon />
        </SideItem>
      </Link>
      <Link to="/programs" className={classes.sideLink}>
        <SideItem listItemName="Programs">
          <SchoolIcon />
        </SideItem>
      </Link>
      <Link to="/users" className={classes.sideLink}>
        <SideItem listItemName="Users">
          <PeopleIcon />
        </SideItem>
      </Link>
    </div>
  );
}

export default SideList;