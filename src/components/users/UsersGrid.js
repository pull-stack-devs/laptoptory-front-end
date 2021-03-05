import React, { useEffect } from 'react';
import UsersCard from './UsersCard';
import { Grid, Paper, Tab, Tabs } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { connect, useDispatch } from 'react-redux';
import { fetchUsers } from '../../rtk/user.store';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  tabs:{
    marginBottom: '30px',
    color :'#0F3057',
  }
}));

export function UserGrid(props) {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState(1);
  const classes = useStyles();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  console.log('props users>>>>>>', props);
  console.log('value', value);

  return (
    <>
      <Paper square className={classes.tabs}>
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          aria-label="disabled tabs example"
        >
          <Tab label="Approved Users" />
          <Tab label="Non Approved Users" />
        </Tabs>
      </Paper>
      <Grid container xs={12} spacing={3}>
        {/* Chart */}
        {props.myUsers.users.map((item, index) => {
          if (value === 1) {
            if (!item.is_accepted) {
              return (
                <Grid item xs={12} md={4} lg={4}>
                  <UsersCard items={item} key={index} accepted={value} />
                </Grid>
              );
            }
          }
          else if (value === 0) {
            if (item.is_accepted && item.role_name !== 'super-admin') {
              return (
                <Grid item xs={3} md={4} lg={4}>
                  <UsersCard items={item} key={index} accepted={value} />
                </Grid>
              );
            }
          } 
          return null
        })}
      </Grid>
    </>
  );
}

const mapStateToProps = (state) => ({
  myUsers: state.user,
});

const mapDispatchToProps = {
  fetchUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserGrid);