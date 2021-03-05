import React, { useEffect, useState, useRef, useContext } from 'react';
import LaptopsRow from './StudentsRow';
import { connect, useDispatch } from 'react-redux';
import { getStudents, addStudent } from '../../rtk/StudentsSlicer';
import { getRemoteData } from '../../rtk/ProgramsSlicer';
import {
  TableContainer,
  Fab,
  Paper,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';
import Show from "../Show";
import { AuthContext } from "../../context/SignInContext";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  addBtn: {
    zIndex: '10',
    color: '#fff',
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    backgroundColor: '#0F3057',
    "&:hover":{
      backgroundColor: '#0F3057',
    }
  },
  root: {
    width: '100%',
    overflowX: 'auto',
  },
}));

function StudentsTable(props) {
  const context = useContext(AuthContext);
  const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [nationality, setNationality] = useState('');
  const [national_id, setNational_id] = useState('');
  const [student_status, setStudent_status] = useState();
  const [program_name, setProgram_name] = useState('');
  const [program_version, setProgram_version] = useState('');
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen('');
  };
  const radioGroupRef = useRef(null);
  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleNationality = (e) => {
    setNationality(e.target.value);
  };
  const handleId = (e) => {
    setNational_id(e.target.value);
  };

  const handleStatus = (e) => {
    setStudent_status(e.target.value);
  };
  const handleProgramName = (e) => {
    setProgram_name(e.target.value);
  };
  const handleProgramVersion = (e) => {
    setProgram_version(e.target.value);
  };
  const handleAdd = (e) => {
    let object = {
      name: name,
      nationality: nationality,
      national_id: national_id,
      student_status: student_status,
      program_name: program_name,
      program_version: program_version,
    };
    
    dispatch(addStudent(object));
  };

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getStudents());
      await dispatch(getRemoteData());
    };
    fetchData();
  }, [dispatch]);

  return (
    <TableContainer>
      <Paper className={classes.root}>
        <LaptopsRow students={props.myStudents} />
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
              autoFocus
              margin="dense"
              label="Student Name"
              type="name"
              fullWidth
              onChange={handleName}
            />
            <TextField
              autoFocus
              margin="dense"
              label="Student Nationality"
              type="department"
              fullWidth
              onChange={handleNationality}
            />
            <TextField
              autoFocus
              margin="dense"
              label="National ID"
              type="version"
              fullWidth
              onChange={handleId}
            />
            <RadioGroup
              ref={radioGroupRef}
              aria-label="ringtone"
              name="ringtone"
              label="Is_Active"
              onChange={handleProgramName}
            >
              Programs
              {props.myprograms.map((item) => {
                return (
                  <FormControlLabel
                    value={item}
                    key={item}
                    control={<Radio />}
                    label={item}
                  />
                );
              })}
            </RadioGroup>

            <RadioGroup
              ref={radioGroupRef}
              aria-label="ringtone"
              name="ringtone"
              label="Is_Active"
              onChange={handleProgramVersion}
            >
              Programs
              {props.myVersions.map((item) => {
                return (
                  <FormControlLabel
                    value={item}
                    key={item}
                    control={<Radio />}
                    label={item}
                  />
                );
              })}
            </RadioGroup>
          
            <RadioGroup
              ref={radioGroupRef}
              aria-label="ringtone"
              name="ringtone"
              label="Is_Active"
              onChange={handleStatus}
            >
              Is Active Status
              <FormControlLabel
                value="true"
                key="true"
                control={<Radio />}
                label="Yes"
              />
              <FormControlLabel
                value="false"
                key="false"
                control={<Radio />}
                label="No"
              />
            </RadioGroup>
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
      </Paper>
    </TableContainer>
  );
}

const mapStateToProps = (state) => ({
  myStudents: state.students.students,
  myprograms: state.programs.programsNames,
  myVersions: state.programs.programsVersions,
});

export default connect(mapStateToProps)(StudentsTable);
