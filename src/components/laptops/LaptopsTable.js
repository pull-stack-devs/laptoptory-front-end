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
  Dialog,
  DialogActions,
  DialogContentText,
  DialogContent,
  DialogTitle,
  Slide,
  Button,
  TextField,
  InputLabel,
  MenuItem,
  Select,
  FormControl
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
import LaptopsRow from './LaptopsRow';
import { fetchLaptops, addLaptops, fetchAvailability, fetchProgram, fetchBrand } from "../../rtk/laptop.store";
import {connect, useDispatch} from 'react-redux';


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
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});



function EnhancedTableHead(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [data, setData] = useState(props.myLaptops.laptops)
  const [open, setOpen] = React.useState(false);
  const [laptop, setLaptop] = useState({
    'serial_no':'',
    'model':'',
    'brand':'',
    'cpu':'',
    'ram':'',
    'storage':'',
    'display_resolution':'',
    'storage_type':'',
    'power_cable':false,
    'availability':false,
  })
  const [filter, setFilter] = useState({
    'availability': '',
    'brand': '',
    'program': ''
  })

  const handleChange = (e) =>{
    setLaptop({...laptop, [e.target.name]: e.target.value})
  };

  const handleFilter = (e) =>{
    setFilter({...filter, [e.target.name]: e.target.value})
    
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const addItem = () =>{
    setOpen(false)
    dispatch(addLaptops(laptop))
  };
  
  useEffect(() => {
    addItem();
    dispatch(fetchLaptops());
  }, []);

  console.log("propzzzzzzzz", props)

  return (
    <>
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
              
              {props.myLaptops.laptops.map((item, indx) => {
                console.log('item', item);
                return <LaptopsRow items={item} key={indx} />;
              })}
            </TableBody>
          </Table>
          <Fab color="primary" aria-label="add" className={classes.addBtn}>
            <Button onClick={handleClickOpen}>
              <AddIcon />
            </Button>
          </Fab>
        </Paper>
      </TableContainer>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Add a new Laptop to the table"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Let Google help apps determine location. This means sending anonymous location data to
            Google, even when no apps are running.
          </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Serial Number"
              type="text"
              name="serial_no"
              fullWidth
              onChange={handleChange}
            />

            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Model"
              type="text"
              name="model"
              fullWidth
              onChange={handleChange}
            />
            
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Brand</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="brand"
                onChange={handleChange}
              >
                <MenuItem value={'Lenovo'}>Lenovo</MenuItem>
                <MenuItem value={'Dell'}>Dell</MenuItem>
                <MenuItem value={'Asus'}>Asus</MenuItem>
                <MenuItem value={'HP'}>HP</MenuItem>
                <MenuItem value={'Acer'}>Acer</MenuItem>
              </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">CPU</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="cpu"
                onChange={handleChange}
              >
                <MenuItem value={'i3'}>i3</MenuItem>
                <MenuItem value={'i5'}>i5</MenuItem>
                <MenuItem value={'i7'}>i7</MenuItem>
                <MenuItem value={'i9'}>i9</MenuItem>
              </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">RAM</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="ram"
                onChange={handleChange}
              >
                <MenuItem value={'4'}>4</MenuItem>
                <MenuItem value={'8'}>8</MenuItem>
                <MenuItem value={'12'}>12</MenuItem>
                <MenuItem value={'16'}>16</MenuItem>
                <MenuItem value={'24'}>24</MenuItem>
                <MenuItem value={'32'}>32</MenuItem>
              </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Storage</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="storage"
                onChange={handleChange}
              >
                <MenuItem value={'1 TB'}>1 TB</MenuItem>
                <MenuItem value={'128 GB'}>128 GB</MenuItem>
                <MenuItem value={'256 GB'}>256 GB</MenuItem>
                <MenuItem value={'512 GB'}>512 GB</MenuItem>
              </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Display Resolution</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="display_resolution"
                onChange={handleChange}
              >
                <MenuItem value={'1280x1080'}>1280x1080</MenuItem>
                <MenuItem value={'1366x768'}>1366x768</MenuItem>
                <MenuItem value={'1920 x1080'}>1920x1080</MenuItem>
                <MenuItem value={'2160 x 1440'}>2160x1440</MenuItem>
                <MenuItem value={'3840 x 2160'}>3840x2160</MenuItem>
              </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Storage Type</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="storage_type"
                onChange={handleChange}
              >
                <MenuItem value={'HDD'}>HDD</MenuItem>
                <MenuItem value={'SSD'}>SSD</MenuItem>
              </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Power Cable</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="power_cable"
                onChange={handleChange}
              >
                <MenuItem value={true}>Included</MenuItem>
                <MenuItem value={false}>Not Included</MenuItem>
              </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Availability</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="availability"
                onChange={handleChange}
              >
                <MenuItem value={true}>Available</MenuItem>
                <MenuItem value={false}>Not Available</MenuItem>
              </Select>
            </FormControl>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={addItem} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

const mapStateToProps = state => ({
  myLaptops: state.laptop
})

const mapDispatchToProps = {
  fetchLaptops,
  fetchAvailability,
  fetchBrand,
  fetchProgram
}

export default connect(mapStateToProps, mapDispatchToProps)(EnhancedTableHead);