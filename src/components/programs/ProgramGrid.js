import React from 'react';
import LaptopCard from './LaptopCard';
import { Grid } from '@material-ui/core';

export default function ProgramGrid() {
  return (
    <Grid container spacing={3}>
      {/* Chart */}
      <Grid item xs={12} md={8} lg={9}>
        <LaptopCard />
      </Grid>
    </Grid>
  );
}
