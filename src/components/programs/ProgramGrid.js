import React from 'react';
import ProgramCard from './ProgramCard';
import { Grid } from '@material-ui/core';
import { connect, useDispatch } from 'react-redux';

function ProgramGrid() {
  return (
    <Grid container spacing={3}>
      {/* Chart */}
      {/* // <Grid item xs={12} md={6} lg={4}> */}
        <ProgramCard />
      {/* // </Grid> */}
    </Grid>
  );
}
const mapStateToProps = (state) => ({
  myPrograms: state.programs.programs,
});

export default connect(mapStateToProps)(ProgramGrid);
