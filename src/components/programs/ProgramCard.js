import React, { useContext, useEffect, useState, useRef } from 'react';
import ProgramItems from './ProgramItems';
import { connect, useDispatch } from 'react-redux';
import { getRemoteData, addProgram } from '../../rtk/ProgramsSlicer';
import { Grid, NativeSelect, FormControl, InputLabel } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Fab } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const useStyles = makeStyles((theme) => ({
  addBtn: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    width: '45%',
  },
  inputWidth: {
    width: '45%',
  },
}));

function ProgramCard(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [department, setDepartment] = useState('');
  const [version, setVersion] = useState('');
  const [is_active, setIs_active] = useState();

  const radioGroupRef = useRef(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen('');
  };
  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleDepartmen = (e) => {
    setDepartment(e.target.value);
  };
  const handleVersion = (e) => {
    setVersion(e.target.value);
  };

  const handleSelect = (e) => {
    setIs_active(e.target.value);
  };
  const handleAdd = (e) => {
    setOpen('');
    let object = {
      name: name,
      department: department,
      version: version,
      is_active: is_active,
    };
    dispatch(addProgram(object));
  };

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getRemoteData());
    };
    fetchData();
  }, [dispatch]);

  return (
    <>
      <Grid container spacing={3} justify="center">
        {props.myPrograms.map((item) => (
          <Grid item xs={12} md={6} lg={4}>
            <ProgramItems items={item} />
          </Grid>
        ))}
      </Grid>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
               ADD Program
          <AddIcon />
        
     </Button> */}
      <Fab
        onClick={handleClickOpen}
        color="primary"
        aria-label="add"
        className={classes.addBtn}
      >
        <AddIcon />
      </Fab>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add Program</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {/* To subscribe to this website, please enter your email address here. We will send updates
                        occasionally. */}
          </DialogContentText>
          <TextField
            className={classes.inputWidth}
            id="standard-full-width"
            label="Program Name"
            name="name"
            style={{ margin: 8 }}
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleName}
          />
          <TextField
            className={classes.inputWidth}
            id="standard-full-width"
            label="Program Department"
            name="department"
            style={{ margin: 8 }}
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleDepartmen}
          />

          <TextField
            className={classes.inputWidth}
            id="standard-full-width"
            label="Program Version"
            style={{ margin: 8 }}
            name="version"
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            type="number"
            min="1"
            onChange={handleVersion}
          />
          <FormControl className={classes.formControl}>
            <InputLabel shrink htmlFor="age-native-helper">
              Age
            </InputLabel>
            <NativeSelect
              inputProps={{
                name: 'is_active',
                id: 'age-native-helper',
              }}
              onChange={handleSelect}
            >
              <option defaultValue value={true}>
                Active
              </option>{' '}
              <option value={false}>Inactive</option>
            </NativeSelect>
          </FormControl>
          {/* 
          <TextField
            autoFocus
            margin="dense"
            label="Name"
            type="name"
            fullWidth
            onChange={handleName}
          />
          <TextField
            autoFocus
            margin="dense"
            label="Department"
            type="department"
            fullWidth
            onChange={handleDepartmen}
          />
          <TextField
            autoFocus
            margin="dense"
            label="Version"
            type="version"
            fullWidth
            onChange={handleVersion}
          />
          <RadioGroup
            ref={radioGroupRef}
            aria-label="ringtone"
            name="ringtone"
            label="Is_Active"
            onChange={handleSelect}
          >
            Is_Active
            <FormControlLabel
              value="true"
              key="true"
              control={<Radio />}
              label="Yes"
            />
            <FormControlLabel
              value="''"
              key="''"
              control={<Radio />}
              label="No"
            />
</RadioGroup>*/}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
          <Button onClick={handleAdd} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

const mapStateToProps = (state) => ({
  myPrograms: state.programs.programs,
});

export default connect(mapStateToProps)(ProgramCard);
