import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import { Box, Grid } from '@material-ui/core';

function SkeletonComponent(props) {
  return (
    <Grid container xs={12} spacing={3}>
      <Grid item xs={12} md={6} lg={4}>
        <Box pt={0.5}>
          <Skeleton variant="rect" height={118} />
          <Skeleton />
          <Skeleton width="60%" />
        </Box>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Box pt={0.5}>
          <Skeleton variant="rect" height={118} />
          <Skeleton />
          <Skeleton width="60%" />
        </Box>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Box pt={0.5}>
          <Skeleton variant="rect" height={118} />
          <Skeleton />
          <Skeleton width="60%" />
        </Box>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Box pt={0.5}>
          <Skeleton variant="rect" height={118} />
          <Skeleton />
          <Skeleton width="60%" />
        </Box>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Box pt={0.5}>
          <Skeleton variant="rect" height={118} />
          <Skeleton />
          <Skeleton width="60%" />
        </Box>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Box pt={0.5}>
          <Skeleton variant="rect" height={118} />
          <Skeleton />
          <Skeleton width="60%" />
        </Box>
      </Grid>
    </Grid>
  );
}

export default SkeletonComponent;
