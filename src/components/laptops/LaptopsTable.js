import React, { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  TableContainer,
  Fab,
  Paper,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import LaptopsRow from './LaptopsRow';
import cookie from 'react-cookies';
import superagent from 'superagent';
const apiU = 'https://pull-stack-laptoptory.herokuapp.com/laptops';

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  addBtn: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  root: {
    width: '100%',
    overflowX: 'auto',
  },
}));

export default function EnhancedTableHead(props) {
  const classes = useStyles();
  const [values, setValues] = useState([]);

  const getData = async () => {
    let results = await axios.get(apiU, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-type': 'application/json',
        Authorization: `Bearer ${cookie.load('auth')}`,
      },
    });

    // let results = superagent
    //   .get(apiU)
    //   .set('Authorization', `Bearer ${cookie.load('auth')}`);

    console.log('results>>>', results);
    setValues(results.data);
    return results.data;
  };

  useEffect(() => {
    getData();
  }, []);

  console.log('values>>>', values);
  return (
    <TableContainer>
      <Paper className={classes.root}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell align="left">Serial Number</TableCell>
              <TableCell align="left">Brand</TableCell>
              <TableCell align="left">CPU</TableCell>
              <TableCell align="left">RAM</TableCell>
              <TableCell align="left">Storage</TableCell>
              <TableCell align="left">Storage Type</TableCell>
              <TableCell align="left">Power Cable</TableCell>
              <TableCell align="left">Display Resolution</TableCell>
              <TableCell align="left">Model</TableCell>
              <TableCell align="left">Availability</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {values.map((item, indx) => {
              console.log('item', item);
              return <LaptopsRow items={item} key={indx} />;
            })}
          </TableBody>
        </Table>
        <Fab color="primary" aria-label="add" className={classes.addBtn}>
          <AddIcon />
        </Fab>
      </Paper>
    </TableContainer>
  );
}
