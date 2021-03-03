import React, { useEffect, useState, useRef } from 'react';
import LaptopsRow from './LaptopsRow';
import { connect, useDispatch } from 'react-redux';
import { getLapData, addStudent } from '../../rtk/laptopSlicer';
import {getNumData} from '../../rtk/StudentsSlicer';
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
// import axios from 'axios';
// import cookie from 'react-cookies';
// import superagent from 'superagent';
// const apiU = 'https://pull-stack-laptoptory.herokuapp.com/laptops';
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

function EnhancedStudentsTableHead(props) {
  const classes = useStyles();
  // const [values, setValues] = useState([]);
  const dispatch = useDispatch();
  // const [open, setOpen] = useState(false);
  // const [name, setName] = useState('');
  // const [nationality, setNationality] = useState('');
  // const [national_id, setNational_id] = useState('');
  // const [student_status, setStudent_status] = useState();
  // const [program_name, setProgram_name] = useState('');
  // const [program_version, setProgram_version] = useState('');
  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen('');
  // };


  // const radioGroupRef = useRef(null);
  // const handleName = (e) => {
  //   setName(e.target.value)
  // }

  // const handleNationality = (e) => {
  //   setNationality(e.target.value)
  // }
  // const handleId = (e) => {
  //   setNational_id(e.target.value)
  // }

  // const handleStatus = (e) => {
  //   setStudent_status(e.target.value)
  // }
  // const handleProgramName = (e) => {
  //   setProgram_name(e.target.value)
  // }
  // const handleProgramVersion = (e) => {
  //   setProgram_version(e.target.value)
  // }
  // const handleAdd = (e) => {
  //   let object = {
  //     name: name,
  //     nationality: nationality,
  //     national_id: national_id,
  //     student_status: student_status,
  //     program_name: program_name,
  //     program_version: program_version
  //   };
  //   console.log('from addd =======>', object);
  //   dispatch(addStudent(object));
  // }
  const [Id,setIds]=useState([])
  useEffect(() => {
    const fetchData = async () => {
      await dispatch((getLapData()));
      await dispatch(getNumData())
    };
    fetchData();
    if(props.myStdIds.length>0){
      setIds(props.myStdIds);
    }
   
  }, []);

console.log('dataaaaaaaaaaaaaaaaaaaaaaaafrom component',props.myStdIds)
  return (
    <TableContainer>
      <Paper className={classes.root}>
      
    
              {/* <LaptopsRow  data={{laptops:props.myLaptops,id:props.myStdIds}}/> */}
            
         
        {/* <Fab onClick={handleClickOpen} color="primary" aria-label="add" className={classes.addBtn}>
          <AddIcon />
        </Fab>

        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Add Program</DialogTitle>
          <DialogContent>
            <DialogContentText> */}
             
            {/* </DialogContentText>
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
              {props.myprograms.map(item=>{
               return <FormControlLabel value={item} key={item} control={<Radio />} label={item} />

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
              {props.myVersions.map(item=>{
               return <FormControlLabel value={item} key={item} control={<Radio />} label={item} />

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
              <FormControlLabel value='true' key="true" control={<Radio />} label="Yes" />
              <FormControlLabel value='false' key="false" control={<Radio />} label="No" />

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
        </Dialog> */}
      </Paper>
    </TableContainer>
  );
}

const mapStateToProps = state => ({
  myLaptops: state.laptops.laptops,
  myStdIds: state.students.stdID,
});

export default connect(mapStateToProps)(EnhancedStudentsTableHead);
