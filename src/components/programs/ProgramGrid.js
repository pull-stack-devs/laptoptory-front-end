import React from 'react';
import ProgramCard from './ProgramCard';
import { connect } from 'react-redux';

function ProgramGrid() {
  return <ProgramCard />;
}
const mapStateToProps = (state) => ({
  myPrograms: state.programs.programs,
});

export default connect(mapStateToProps)(ProgramGrid);
