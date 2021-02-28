import React, { useState, useEffect } from 'react';
import UsersCard from './UsersCard';
import { Grid,
  Paper,
  Tab,
  Tabs
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { connect, useDispatch } from "react-redux";
import { fetchUsers } from "../../rtk/user.store";


export function UserGrid(props) {
    const dispatch = useDispatch()
    const [value, setValue] = React.useState(1);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    useEffect(() => {
      dispatch(fetchUsers());
    }, [])

    console.log("props users>>>>>>", props)
    console.log("value", value)

  return (
    <>
      <Paper square>
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          aria-label="disabled tabs example"
        >
          <Tab label="Accepted" />
          <Tab label="Not Accepted" />
        </Tabs>
      </Paper>
      <Grid container xs={12} spacing={3}>
        {/* Chart */}
          {props.myUsers.users.map((item, index) =>{
              if(value === 1){
                if(!item.is_accepted) {
                  return (
                  <Grid item xs={3} md={8} lg={4}> 
                          <UsersCard items={item} key={index} accepted={value}/>
                  </Grid> 
                  )
                }
              }
              if(value === 0){
                if(item.is_accepted) {
                  return (
                  <Grid item xs={3} md={8} lg={4}> 
                          <UsersCard items={item} key={index} accepted={value}/>
                  </Grid> 
                  )
                }
              }
          })}
      </Grid>
    </>
  );
}

const mapStateToProps = state => ({
    myUsers: state.user
})

const mapDispatchToProps = {
    fetchUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(UserGrid);