import React, { useEffect, useState, useContext } from 'react';
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
import Show from "../Show";
import { AuthContext } from "../../context/SignInContext";

const useStyles = makeStyles((theme) => ({
  addBtn: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    backgroundColor: '#0F3057',
    "&:hover":{
      backgroundColor: '#0F3057',
    }  },
  formControl: {
    margin: theme.spacing(1),
    width: '45%',
  },
  inputWidth: {
    width: '45%',
  },
  editIcon :{
color: 'rgba(255, 255, 255, 0.4)'
  },
 
}));

function ProgramCard(props) {
  const context = useContext(AuthContext)
  const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [department, setDepartment] = useState('');
  const [version, setVersion] = useState('');
  const [is_active, setIs_active] = useState();
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
      <Grid container xs={12} spacing={3}>
        {props.myPrograms.map((item) => (
          <Grid item xs={12} md={6} lg={4} className="animate__animated animate__fadeInUp">
            <ProgramItems items={item} />
          </Grid>
        ))}
      </Grid>
      <Show condition={context.isValidAction('create')}>
        <Fab
          onClick={handleClickOpen}
          color="primary"
          aria-label="add"
          className={classes.addBtn}
        >
          <AddIcon />
        </Fab>
      </Show>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add Program</DialogTitle>
        <DialogContent>
          <DialogContentText>
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