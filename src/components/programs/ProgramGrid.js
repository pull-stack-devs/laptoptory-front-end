import React from 'react';
import ProgramCard from './ProgramCard';
import { Grid } from '@material-ui/core';
import { connect, useDispatch } from 'react-redux';

function ProgramGrid() {
  return <ProgramCard />;
}
const mapStateToProps = (state) => ({
  myPrograms: state.programs.programs,
});

export default connect(mapStateToProps)(ProgramGrid);
